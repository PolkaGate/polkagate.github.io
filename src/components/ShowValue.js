// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

/** 
 * @description  this component is used to show an account balance in some pages like contributeToCrowdloan
 * */

import { Skeleton } from '@mui/material';
import React from 'react';

export default function ShowValue({ value, decimalPoint = 2, unit, height = 20, width = '90px' }) {
  return (
    <>
      {value !== undefined
        ? <>
          {value}{' '}{unit}
        </>
        : <Skeleton
          height={height}
          sx={{ display: 'flex', transform: 'none', width: { width } }}
        />
      }
    </>
  );
}
