
import { Link, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import { Apps as AppsIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
import { MAX_WIDTH } from "./util/constants";

const Snap = () => {
  const handleDownloadSnap = useCallback(() => {
    window.open(
      "https://snaps.metamask.io/snap/npm/polkagate/snap/",
      "_blank"
    );
  }, []);

  const handleVisitApps = useCallback(() => {
    window.open(
      "https://apps.polkagate.xyz",
      "_blank"
    );
  }, []);

  const buttonStyle = {
    borderRadius:'16px',
    height:{md:'56px'},
    backgroundColor: '#f5f5f3',
    color: '#0f0f0f', // set text color
    width: '100%',
    minWidth: 'max-content',
    '&:hover': {
      backgroundColor: '#e0e0e0', // optional hover effect
    },
  }

  return (
    <Grid id='snap' container justifyContent="center" justifyItems='center' sx={{ bgcolor: '#fafaf8', py: "60px", position: 'relative' }}    >
      <Grid container spacing={2} justifyContent="center" justifyItems='center' sx={{ maxWidth: MAX_WIDTH, position: 'inherit' }}    >
        <Typography variant="h1" sx={{ display: 'flex', justifyContent: 'center', fontWeight: 600, fontSize: { xs: '20px', md: '30px' }, pb: '10px', width: '100%' }}>
          🦊 MetaMask Snap by PolkaGate
        </Typography>
        <Typography sx={{ color: '#0e0e0eb5', display: 'flex', justifyContent: 'center', fontWeight: 400, fontSize: { xs: '14px', md: '16px' }, pb: '30px', px: '10px', textAlign: 'center', width: '100%' }}>
          Enables MetaMask to interact with tokens within the Polkadot ecosystem, including Polkadot, Kusama, and more.
        </Typography>
        <Grid container justifyContent="center" pt={{ xs: 1, md: 2 }} spacing={2}>
          <Grid container justifyContent='center' justifyItems='center' item xs={10} md={3}>
            <Box
              component="img"
              sx={{
                maxWidth: { xs: '100%' },
              }}
              alt="connection"
              src="images/snap/home.png"
            />
          </Grid>
          <Grid container justifyContent='center' item xs={10} md={3}>
            <Box
              component="img"
              sx={{
                maxWidth: { xs: '100%' },
              }}
              alt="onInstall"
              src="images/snap/staking.png"
            />
          </Grid>
          <Grid container justifyContent='center' item xs={10} md={3}>
            <Box
              component="img"
              sx={{
                maxWidth: { xs: '100%' },
              }}
              alt="transaction"
              src="images/snap/stakingHome.png"
            />
          </Grid>
        </Grid>
        <Grid item md={12} mx={{ xs: 2, md: 17 }}>
          <Typography color="#000" sx={{ fontWeight: 300, fontSize: '14px', pt: 4, textAlign: { md: "left", xs: 'justify' }, px: { xs: '10px', md: 'auto' } }}>
            A MetaMask snap for seamless interaction with the Polkadot ecosystem, a prominent platform for cross-chain communication and scalability. Now you can use your MetaMask wallet to access Polkadot dApps and tokens effortlessly.
          </Typography>
        </Grid>
        <Grid container item justifyContent='center' spacing={1} sx={{ mt: '20px' }}>
          <Grid item xs={11} md={4}>
            <Button
              sx={buttonStyle}
              variant="contained"
              style={{ width: '100%', minWidth: 'max-content' }}
              startIcon={
                <Box
                  alt="chrome"
                  component='img'
                  src="images/snap/browsers.svg"
                  sx={{ width: 80, height: 20 }}
                />
              }
              onClick={handleDownloadSnap}
            >
              Download PolkaGate Snap
            </Button>
          </Grid>
          <Grid item xs={11} md={4}>
            <Button
              sx={buttonStyle}
              variant="contained"
              style={{ width: '100%', minWidth: 'max-content' }}
              startIcon={
                <AppsIcon
                  sx={{ width: 20, height: 20 }}
                />
              }
              onClick={handleVisitApps}
            >
              Visit Apps
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent='center' sx={{ fontSize: '20px', fontWeight: 800, px: { xs: '10px', md: 'auto' }, pt: { xs: '10px', md: '24px' } }}>
          <Link href="https://youtu.be/vtDf74-FId8?feature=shared" color="#e73188" underline="hover" target="_blank" rel="noopener noreferrer">
            <Grid alignItems='center' justifyContent='center' container item mx='10px'>
              <YouTubeIcon fontSize="large" />
              <Typography color="#000" sx={{ fontWeight: 500, fontSize: '16px' }}>
                Watch this guide on staking with the PolkaGate MetaMask Snap
              </Typography>
            </Grid>
          </Link>
        </Grid>
      </Grid >
    </Grid >
  );
}

export default Snap;
