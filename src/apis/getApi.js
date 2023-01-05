// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise, WsProvider } from '@polkadot/api';

async function getApi(endpoint) {
  const wsProvider = new WsProvider(endpoint);

  return await ApiPromise.create({ provider: wsProvider });
}

export default getApi;
