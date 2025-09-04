
import { Grid, Typography, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pool from "./Pool";
import getPrices from "./apis/getPrices";
import { hexToRgba } from './util/utils';
import { YouTube as YouTubeIcon } from '@mui/icons-material';
import { MAX_WIDTH } from "./util/constants";

function Pools() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const chainNames = ['polkadot', 'kusama'];

    getPrices(chainNames).then((prices) => {
      setPrices(prices);
    }).catch(console.error);
  }, []);


  return (
    <Grid container justifyContent="center" id='pools' sx={{ color: "white", bgcolor: hexToRgba("#180710", 0.88), position: 'inherit', p: '50px 0 10px' }}>
      <Grid container justifyContent="space-between" sx={{ maxWidth: MAX_WIDTH, position: 'inherit' }}>
        <Grid item xs={12} sx={{ textAlign: "center", pb: 2 }}>
          <Typography style={{ display: "inline-block" }} variant="h6" width='100%' fontWeight={700}>
            Join our staking pools!
          </Typography>
          <Typography align="left" style={{ display: "inline-block" }} variant="subtitle2" fontWeight={500} width='80%' py='20px'>
            PolkaGate provides staking pools on both the Polkadot and Kusama blockchains, allowing you to effortlessly participate in them using our extension. By joining our Polkadot pool with a minimum of 1 DOT or our Kusama pool with just 0.01 KSM, you can earn rewards. We carefully nominate reliable validators that offer high returns
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
          name='❤️ PolkaGate 🐦‍⬛ | https://polkagate.xyz'
          token='KSM'
          decimal={12}
          tokenPrice={prices?.kusama?.usd}
        />
        <Grid container justifyContent='center' sx={{ fontSize: '20px', fontWeight: 800, px: { xs: '10px', md: 'auto' } }}>
          <Link href="https://www.youtube.com/watch?v=ErSKuhSGuKA" color="#e73188" underline="hover" target="_blank" rel="noopener noreferrer">
            <Grid alignItems='center' justifyContent='center' container item mx='10px'>
              <YouTubeIcon fontSize="large" />
              Watch how to join a pool using the PolkaGate extension
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Pools;
