
// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useMemo } from 'react';

import { formatBalance, isString } from '@polkadot/util';

import { FLOATING_POINT_DIGIT } from '../util/constants';

// for million, 2 * 3-grouping + comma
const M_LENGTH = 6 + 1;
const K_LENGTH = 3 + 1;

type LabelPost = string | React.ReactNode

function getFormat(decimals, tokens, formatIndex = 0) {
  return [
    formatIndex < decimals.length
      ? decimals[formatIndex]
      : decimals[0],
    formatIndex < tokens.length
      ? tokens[formatIndex]
      : tokens[1]
  ];
}

function createElement(prefix, postfix, unit, label = '', isShort = false, decimalPoint) {
  return <>{`${prefix}${isShort ? '' : '.'}`}{!isShort && <span className='ui--FormatBalance-postfix'>{`00${postfix?.slice(0, decimalPoint) || ''}`.slice(-decimalPoint)}</span>}<span className='ui--FormatBalance-unit'> {unit}</span>{label}</>;
}

function splitFormat(value, decimalPoint, label?, isShort?) {
  const [prefix, postfixFull] = value.split('.');
  const [postfix, unit] = postfixFull.split(' ');

  return createElement(prefix, postfix, unit, label, isShort, decimalPoint);
}

function applyFormat(decimalPoint, value, [decimals, token], withCurrency = true, withSi, _isShort?, labelPost) {
  const [prefix, postfix] = formatBalance(value, { decimals, forceUnit: '-', withSi: false }).split('.');
  const isShort = _isShort || (withSi && prefix.length >= K_LENGTH);
  const unitPost = withCurrency ? token : '';

  if (prefix.length > K_LENGTH) {
    const [major, rest] = formatBalance(value, { decimals, withUnit: false }).split('.');
    const minor = rest.substr(0, decimalPoint);
    const unit = rest.substr(4);

    return <>{major}.<span className='ui--FormatBalance-postfix'>{minor}</span><span className='ui--FormatBalance-unit'>{unit}{unit ? unitPost : ` ${unitPost}`}</span>{labelPost || ''}</>;
  }

  return createElement(prefix, postfix, unitPost, labelPost, isShort, decimalPoint);
}

function FormatBalance({ children, className = '', decimalPoint = FLOATING_POINT_DIGIT, decimals, format, formatIndex, isShort, label, labelPost, tokens, value, valueFormatted, withCurrency, withSi }) {

  const formatInfo = useMemo(
    () => format || getFormat(decimals, tokens, formatIndex),
    [decimals, tokens, format, formatIndex]
  );

  // labelPost here looks messy, however we ensure we have one less text node
  return (
    <div className={`ui--FormatBalance ${className}`}>
      {label ? <>{label}&nbsp;</> : ''}
      <span
        className='ui--FormatBalance-value'
        data-testid='balance-summary'
      >{
          valueFormatted
            ? splitFormat(valueFormatted, decimalPoint, labelPost, isShort)
            : value
              ? value === 'all'
                ? <>{'everything'}{labelPost || ''}</>
                : applyFormat(decimalPoint, value, formatInfo, withCurrency, withSi, isShort, labelPost)
              : isString(labelPost)
                ? `-${labelPost}`
                : labelPost
        }</span>{children}
    </div>
  );
}

export default React.memo(FormatBalance);
