
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


  return (
    <Grid id='snap' container justifyContent="center" justifyItems='center' sx={{ bgcolor: '#cecbcc', pt: "50px", pb: "20px", position: 'relative', mt: '50px' }}    >
      <Grid container spacing={2} justifyContent="center" justifyItems='center' sx={{ maxWidth: MAX_WIDTH, position: 'inherit' }}    >
          <Typography sx={{ display:'flex', justifyContent: 'center', fontWeight: 600, fontSize: { xs: '20px', md: '24px' }, pb: '10px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', width: '100%' }}>
            🦊 MetaMask Snap by PolkaGate
          </Typography>
          <Typography sx={{ color: '#0e0e0eb5', display:'flex', justifyContent: 'center', fontWeight: 400, fontSize: { xs: '14px', md: '16px' }, pb: '30px', px: '10px', textAlign: 'center', width: '100%' }}>
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
          <Typography variant="subtitle1" sx={{ pt: 4, textAlign: { md: "left", xs: 'justify' }, px: { xs: '10px', md: 'auto' } }} color="#180710">
            A MetaMask snap for seamless interaction with the Polkadot ecosystem, a prominent platform for cross-chain communication and scalability. Now you can use your MetaMask wallet to access Polkadot dApps and tokens effortlessly.
          </Typography>
        </Grid>
        <Grid container item justifyContent='center' spacing={1}>
          <Grid item xs={11} md={4}>
            <Button
              color="primary"
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
              color="success"
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
        <Grid container justifyContent='center' sx={{ fontSize: '20px', fontWeight: 800, px: { xs: '10px', md: 'auto' } }}>
          <Link href="https://youtu.be/vtDf74-FId8?feature=shared" color="#e73188" underline="hover" target="_blank" rel="noopener noreferrer">
            <Grid alignItems='center' justifyContent='center' container item mx='10px'>
              <YouTubeIcon fontSize="large" />
              Watch this guide on staking with the PolkaGate MetaMask Snap.
            </Grid>
          </Link>
        </Grid>
      </Grid >
    </Grid >
  );
}

export default Snap;
