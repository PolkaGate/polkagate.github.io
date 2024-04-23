
import { Link, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import { Apps as AppsIcon, YouTube as YouTubeIcon } from '@mui/icons-material';

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
    <Grid id='snap' container spacing={2} justifyContent="center" justifyItems='center' sx={{ bgcolor: '#cecbcc', pt: "50px", pb: "100px", position: 'relative', mt: '50px' }}    >
      <Grid container justifyContent='center' item >
        <Typography sx={{ fontWeight: 600, fontSize: { xs: '24px', md: '28px' }, pb: '10px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', display: 'block' }}>
          🦊 MetaMask Snap by PolkaGate
        </Typography>
      </Grid>
      <Grid container justifyContent='center' item >
        <Typography sx={{ fontWeight: 400, fontSize: { xs: '18px', md: '22px' }, pb: '30px', px: '10px', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', }}>
          Enables MetaMask to interact with tokens within the Polkadot ecosystem, including Polkadot, Kusama, and more.
        </Typography>
      </Grid>
      <Grid container justifyContent="center" pt={{ xs: 1, md: 2 }} spacing={2}>
        <Grid container justifyContent='center' justifyItems='center' item xs={10} md={3}>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: '100%' },
              border: 1,
              borderColor: 'white',
              borderRadius: '2%',
            }}
            alt="connection"
            src="images/snap/connection.png"
          />
        </Grid>
        <Grid container justifyContent='center' item xs={10} md={3}>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: '100%' },
              border: 1,
              borderColor: 'white',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
            alt="onInstall"
            src="images/snap/onInstall.png"
          />
        </Grid>
        <Grid container justifyContent='center' item xs={10} md={3}>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: '100%' },
              border: 1,
              borderColor: 'white',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
            alt="transaction"
            src="images/snap/tx.png"
          />
        </Grid>
      </Grid>
      <Grid item md={12} mx={{ xs: 2, md: 17 }}>
        <Typography variant="subtitle1" sx={{ pt: 4, textAlign: { md: "left", xs: 'justify' }, px: { xs: '10px', md: 'auto' } }} color="#180710">
          A MetaMask snap for seamless interaction with the Polkadot ecosystem, a prominent platform for cross-chain communication and scalability. Now you can use your MetaMask wallet to access Polkadot dApps and tokens effortlessly.
        </Typography>
      </Grid>
      <Grid container item justifyContent='center' spacing={1}>
        <Grid item xs={11} md={5}>
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
        <Grid item xs={11} md={5}>
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
      <Grid container  justifyContent='center' sx={{ fontSize: '20px', fontWeight: 800, pt: '40px', px: { xs: '10px', md: 'auto' } }}>
        <Link href="https://youtu.be/BnQYDETCeGY" color="#e73188" underline="hover">
          <Grid alignItems='center' justifyContent='center' container item mx='10px'>
            <YouTubeIcon fontSize="large" />
            Watch a demo of how to use the MetaMask PolkaGate Snap
          </Grid>
        </Link>
      </Grid>
    </Grid >
  );
}

export default Snap;
