
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pool from "./Pool";
import getPrices from "./apis/getPrices";

function Pools() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const chainNames = ['polkadot', 'kusama'];

    getPrices(chainNames).then((prices) => {
      setPrices(prices);
      console.log('prices:', prices)
    }).catch(console.error);
  }, []);


  return (
    <Grid container justifyContent="space-between" id='pools' sx={{ color: "white", bgcolor: "#180710", py: '50px' }}>
      <Grid item xs={12} sx={{ textAlign: "center", pb: 2 }}>
        <Typography style={{ display: "inline-block" }} variant="h5" width='100%' fontWeight={700}>
          Join Our Staking Pools
        </Typography>
        <Typography style={{ display: "inline-block" }} variant="subtitle1" fontWeight={500} width='80%' py='30px'>
          Polkagate staking pools are available on both Polkadot and Kusama blockchains. You can easily join polls using the extensions, join our Polkadot pool and earn rewards with at least 1 DOT.
          Similarly you can join the Kusama pool with as little as 0.01 KSM.
        </Typography>
      </Grid>
      <Pool
        index={8}
        name='PolkaGate ❤️ | https://polkagate.xyz | Nominates trusted, high return validators'
        token='DOT'
        decimal={10}
        tokenPrice={prices?.polkadot?.usd}
      />
      <Pool
        index={18}
        name='PolkaGate ❤️ | https://polkagate.xyz'
        token='KSM'
        decimal={12}
        tokenPrice={prices?.kusama?.usd}
      />
    </Grid>
  );
}

export default Pools;
