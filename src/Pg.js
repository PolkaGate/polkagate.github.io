
import { Avatar, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";

const PG = () => {
  const handleOpenFirefox = useCallback(() => {
    window.open(
      "https://addons.mozilla.org/en-US/firefox/addon/polkagate/",
      "_blank"
    );
  }, []);

  const handleOpenChrome = useCallback(() => {
    window.open(
      "https://chrome.google.com/webstore/detail/polkagate/ginchbkmljhldofnbjabmeophlhdldgp",
      "_blank"
    );
  }, []);

  const handleOpenEdge = useCallback(() => {
    window.open(
      "https://microsoftedge.microsoft.com/addons/detail/polkagate-the-gateway-to/eakellaeidmgcpifaofebhpcjienkajp",
      "_blank"
    );
  }, []);


  return (
    <Grid id='pg' container spacing={2} justifyContent="center" justifyItems='center' sx={{ mt: "40px", mb: "30px", position: 'relative' }}    >
      <Grid container justifyContent='center' item >
        <Typography sx={{ fontWeight: 600, fontSize: { xs: '24px', md: '28px' }, pb: '30px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', }}>
          Browser extension / Wallet
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
            alt="intro"
            src="images/pg/homeDark.svg"
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
            alt="intro"
            src="images/pg/rewards.svg"
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
            alt="intro"
            src="images/pg/pool.svg"
          />
        </Grid>
      </Grid>
      <Grid item md={12} mx={{ sx: 2, md: 8 }}>
        <Typography variant="subtitle1" sx={{ pt: 4, textAlign: { md: "left", xs: 'justify' }, px:{xs:'10px', md:'auto'} }} color="#180710">
          Polkagate is a non-custodial wallet that allows you to securely store, manage, and interact with your Polkadot and Kusama assets. It offers a user-friendly interface and easy access to the Polkadot and Kusama ecosystems, allowing you to participate in staking, crowdloans, and other activities.
          With Polkagate, you are in complete control of your assets, as your private keys are stored securely on your device, and you can easily manage multiple accounts and switch between them with ease.
          Polkagate is an essential tool for anyone looking to participate in the growing Polkadot and Kusama ecosystems.
        </Typography>
      </Grid>
      <Grid container item justifyContent='center' spacing={1}>
        <Grid item xs={11} md={2.5}>
          <Button
            color="primary"
            variant="contained"
            style={{ width: '100%', minWidth: 'max-content' }}
            startIcon={
              <Avatar
                alt="chrome"
                src="images/chrome.png"
                sx={{ width: 20, height: 20 }}
              />
            }
            onClick={handleOpenChrome}
          >
            Download for Chrome
          </Button>
        </Grid>
        <Grid item xs={11} md={2.5}>
          <Button
            color="success"
            variant="contained"
            style={{ width: '100%', minWidth: 'max-content' }}
            startIcon={
              <Avatar
                alt="edge"
                src="images/edge.png"
                sx={{ width: 20, height: 20 }}
              />
            }
            onClick={handleOpenEdge}
          >
            Download for Edge
          </Button>
        </Grid>
        <Grid item xs={11} md={2.5}>
          <Button
            color="warning"
            variant="contained"
            style={{ width: '100%', minWidth: 'max-content' }}
            startIcon={
              <Avatar
                alt="brave"
                src="images/brave.png"
                sx={{ width: 20, height: 20 }}
              />
            }
            onClick={handleOpenChrome}
          >
            Download for Brave
          </Button>
        </Grid>
        <Grid item xs={11} md={2.5}>
          <Button
            color="secondary"
            variant="contained"
            style={{ width: '100%', minWidth: 'max-content' }}
            startIcon={
              <Avatar
                alt="plus"
                src="images/firefox.png"
                sx={{ width: 20, height: 20 }}
              />
            }
            onClick={handleOpenFirefox}
          >
            Download for Firefox
          </Button>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default PG;
