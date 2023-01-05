// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0


import { useCallback, useEffect, useState } from 'react';

import { BN, hexToBn, isHex } from '@polkadot/util';


export const isHexToBn = (i) => isHex(i) ? hexToBn(i) : new BN(i);
export default function usePool(id){
  const endpoint = id === 8
    ? 'wss://polkadot-rpc.dwellir.com'
    : 'wss://kusama-rpc.dwellir.com'

  const [myPool, setMyPool] = useState();

  const getPoolInfo = useCallback((endpoint, id) => {
    const getPoolWorker = new Worker(new URL('../workers/getPool.js', import.meta.url));

    getPoolWorker.postMessage({ endpoint, id });

    getPoolWorker.onerror = (err) => {
      console.log(err);
    };

    getPoolWorker.onmessage = (e) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const info = e.data;

      if (!info) {
        setMyPool(null);

        getPoolWorker.terminate();

        return;
      }

      const parsedInfo = JSON.parse(info);

      /** convert hex strings to BN strings*  MUST be string since nested BNs can not be saved in local storage safely*/
      if (parsedInfo.member) {
        parsedInfo.member.points = isHexToBn(parsedInfo.member.points).toString();
      }

      parsedInfo.bondedPool.points = isHexToBn(parsedInfo.bondedPool.points).toString();
      parsedInfo.stashIdAccount.stakingLedger.active = isHexToBn(parsedInfo.stashIdAccount.stakingLedger.active).toString();
      parsedInfo.stashIdAccount.stakingLedger.total = isHexToBn(parsedInfo.stashIdAccount.stakingLedger.total).toString();

      console.log('*** My pool info returned from worker is:', parsedInfo);

      setMyPool(parsedInfo);

      getPoolWorker.terminate();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (id) { /** do not save pool in local storage when pool is fetched via id, which is used in join pool page */
      getPoolInfo(endpoint, id);

      return;
    }
  }, [endpoint, getPoolInfo, id]);

  return myPool;
}
