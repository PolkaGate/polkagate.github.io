
import { Grid, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pool from "./Pool";
import getPrices from "./apis/getPrices";
import { hexToRgba } from './util/utils';

function Pools() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const chainNames = ['polkadot', 'kusama'];

    getPrices(chainNames).then((prices) => {
      setPrices(prices);
    }).catch(console.error);
  }, []);


  return (
    <Grid container justifyContent="space-between" id='pools' sx={{ color: "white", bgcolor: hexToRgba("#180710", 0.88), position: 'inherit', py: '50px' }}>
      <Grid item xs={12} sx={{ textAlign: "center", pb: 2 }}>
        <Typography style={{ display: "inline-block" }} variant="h5" width='100%' fontWeight={700}>
          Join our staking pools!
        </Typography>
        <Typography align="left" style={{ display: "inline-block" }} variant="subtitle1" fontWeight={500} width='80%' py='30px'>
          Polkagate provides staking pools on both the Polkadot and Kusama blockchains, allowing you to effortlessly participate in them using our extension. By joining our Polkadot pool with a minimum of 1 DOT or our Kusama pool with just 0.01 KSM, you can earn rewards. We carefully nominate reliable validators that offer high returns
        </Typography>
      </Grid>
      <Pool
        index={8}
        name='PolkaGate ❤️ | https://polkagate.xyz'
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
      <Grid container justifyContent='center' sx={{ fontSize: '20px', fontWeight: 800, px: { xs: '10px', md: 'auto' } }}>
        <Link href="https://www.youtube.com/watch?v=ErSKuhSGuKA" color="#e73188" underline="hover">
          Watch how to join a pool using the Polkagate extension
        </Link>
      </Grid>
    </Grid>
  );
}

export default Pools;
