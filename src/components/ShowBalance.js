// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

/** 
 * @description  this component is used to show an account balance in some pages like contributeToCrowdloan
 * */

import { Grid, Skeleton } from '@mui/material';
import React from 'react';

import { FLOATING_POINT_DIGIT } from '../util/constants';
// import FormatBalance from './FormatBalance';
import FormatBalance2 from './FormatBalance2';

export default function ShowBalance({ api, balance, decimalPoint, height = 20, skeletonWidth = 90, decimal = undefined, token = undefined }) {
  return (
    <Grid alignItems='center' container justifyContent='center' width='fit-content'>
      {balance === undefined || !(api || (decimal && token))
        ? <Skeleton
          height={height}
          sx={{ display: 'inline-block', transform: 'none', width: `${skeletonWidth}px` }}
        />
        // : api
        //   ? <FormatBalance
        //     api={api}
        //     decimalPoint={decimalPoint || FLOATING_POINT_DIGIT}
        //     value={balance}
        //   />
        //   : decimal && token &&
        : <FormatBalance2
          decimalPoint={decimalPoint || FLOATING_POINT_DIGIT}
          decimals={[decimal]}
          tokens={[token]}
          value={balance}
        />
      }
    </Grid>
  );
}
