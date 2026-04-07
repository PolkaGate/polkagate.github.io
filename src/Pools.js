
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import Pool from "./Pool";
import getPrices from "./apis/getPrices";
import { MenuBook as MenuBookIcon } from '@mui/icons-material';
import { MAX_WIDTH } from "./util/constants";

function Pools() {
  const theme = useTheme();
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const chainNames = ['polkadot', 'kusama'];

    getPrices(chainNames).then((prices) => {
      setPrices(prices);
    }).catch(console.error);
  }, []);


  return (
    <Grid container justifyContent="center" id='pools' sx={{ color: theme.palette.text.primary, bgcolor: theme.palette.section.dark, position: 'inherit', py: { xs: 7, md: 10 }, px: { xs: 2, md: 4 } }}>
      <Grid container justifyContent="space-between" sx={{ maxWidth: MAX_WIDTH, position: 'inherit' }}>
        <Grid item xs={12} sx={{ textAlign: "center", pb: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 32,
              px: 1.75,
              py: 0.625,
              mb: 2.25,
              borderRadius: '999px',
              border: `1px solid ${theme.palette.divider}`,
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.mode === 'light' ? 'rgba(231,49,136,0.06)' : 'rgba(231,49,136,0.12)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Curated Staking
          </Box>
          <Typography variant='h2' color={theme.palette.text.primary} sx={{ display: 'flex', justifyContent: 'center', fontWeight: 700, fontSize: { xs: '32px', md: '48px' }, lineHeight: 0.96, letterSpacing: '-0.03em', py: '10px', width: '100%' }}>
            Join our staking pools!
          </Typography>
          <Typography color={theme.palette.text.secondary} sx={{ display: 'flex', justifyContent: 'center', fontWeight: 400, fontSize: { xs: '15px', md: '17px' }, lineHeight: 1.7, px: '10px', textAlign: 'center', width: '100%', maxWidth: 820, mx: 'auto' }}>
            PolkaGate provides staking pools on both the Polkadot and Kusama blockchains, allowing you to effortlessly participate in them using our extension. By joining our Polkadot pool with a minimum of 1 DOT or our Kusama pool with just 0.01 KSM, you can earn rewards. We carefully nominate reliable validators that offer high returns
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: { xs: 3, md: 4 } }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ px: 2.5, py: 2, borderRadius: '24px', backgroundColor: theme.palette.mode === 'light' ? '#fffaf2' : '#18181b', border: `1px solid ${theme.palette.divider}` }}>
                <Typography sx={{ fontSize: '13px', color: theme.palette.text.secondary, mb: 0.75 }}>Minimum to join</Typography>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, color: theme.palette.text.primary }}>1 DOT / 0.01 KSM</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ px: 2.5, py: 2, borderRadius: '24px', backgroundColor: theme.palette.mode === 'light' ? '#fffaf2' : '#18181b', border: `1px solid ${theme.palette.divider}` }}>
                <Typography sx={{ fontSize: '13px', color: theme.palette.text.secondary, mb: 0.75 }}>Pool selection</Typography>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, color: theme.palette.text.primary }}>Polkadot + Kusama</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ px: 2.5, py: 2, borderRadius: '24px', backgroundColor: theme.palette.mode === 'light' ? '#fffaf2' : '#18181b', border: `1px solid ${theme.palette.divider}` }}>
                <Typography sx={{ fontSize: '13px', color: theme.palette.text.secondary, mb: 0.75 }}>Validator strategy</Typography>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, color: theme.palette.text.primary }}>Curated nominations</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
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
        </Grid>
        <Grid container justifyContent='center' sx={{ fontSize: '20px', fontWeight: 800, px: { xs: '10px', md: 'auto' }, pt: { xs: '14px', md: '26px' } }}>
          <Button
            component="a"
            href="https://docs.polkagate.xyz/polkagate/polkagate-extension-user-guide/staking/easy-staking"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<MenuBookIcon />}
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: '15px',
              textTransform: 'none',
              px: 0,
              minWidth: 0,
              borderRadius: 0,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            Read the easy staking guide for the PolkaGate extension
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Pools;
