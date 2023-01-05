// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { bnToU8a, stringToU8a, u8aConcat } from '@polkadot/util';

const EMPTY_H256 = new Uint8Array(32);
const MOD_PREFIX = stringToU8a('modl');

export function createAccount (api, poolId, index) {
  return api.registry.createType(
    'AccountId32',
    u8aConcat(
      MOD_PREFIX,
      api.consts.nominationPools.palletId.toU8a(),
      new Uint8Array([index]),
      bnToU8a(poolId, { bitLength: 32 }),
      EMPTY_H256
    )
  ).toString();
}

function getPoolAccounts(api, poolId) {
  return {
    rewardId: createAccount(api, poolId, 1),
    stashId: createAccount(api, poolId, 0)
  };
}

export default getPoolAccounts;
