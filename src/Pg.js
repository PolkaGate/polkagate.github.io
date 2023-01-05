
import { Avatar, Box, Grid, Typography, Button, Link } from "@mui/material";
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
      "https://github.com/Nick-1979/polkagate#add-on",
      "_blank"
    );
  }, []);

  return (
    <Grid id='pg' container spacing={2} justifyContent="center" sx={{ my: "30px", color: "#180710", bgcolor: "white" }}    >
      <Grid container item justifyContent='center' alignItems='center' spacing={2} pb='30px'>
        <Grid item>
          <Typography variant="h4" sx={{ ml: 1, fontWeight: 600 }}>
            PolkaGate extension
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" pt={{ xs: 1, md: 2 }} spacing={2}>
        <Grid container justifyContent='center' item xs={12} md={3} >
          <Box
            component="img"
            sx={{
              maxWidth: { xs: '100%', md: 357 },
              border: 1,
              borderColor: 'white',
              borderRadius: '2%',
              mr: 1
            }}
            alt="intro"
            src="images/pg/qucickActionDark.png"
          />
        </Grid>
        <Grid container justifyContent='center' item xs={12} md={3}>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: '100%', md: 357 },
              border: 1,
              borderColor: 'white',
              borderRadius: '2%',
              mr: 1
            }}
            alt="intro"
            src="images/pg/homeLight.png"
          />
        </Grid>
        <Grid container justifyContent='center' item xs={12} md={3}>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: '100%', md: 357 },
              border: 1,
              borderColor: 'white',
              borderRadius: '2%',
              mr: 1
            }}
            alt="intro"
            src="images/pg/accountDetails.png"
          />
        </Grid>
      </Grid>
      <Grid item md={12} mx={{ sx: 2, md: 8 }}>
        <Typography align="center" variant="subtitle1" sx={{ pt: 4 }} md={{ with: '80%' }} color="#180710">
          PolkaGate extension is a Kusama Treasury supported extension/wallet. It is the next version of polkadot js plus which completely re-developed, with a new look, smooth user experience, and many performance improvements.
        </Typography>
      </Grid>
      <Grid container item justifyContent='center' spacing={1}>
        <Grid item xs={11} md={3.5}>
          <Button
            color="primary"
            variant="contained"
            style={{ width: '100%' }}
            startIcon={
              <Avatar
                alt="plus"
                src="images/firefox.png"
                sx={{ width: 20, height: 20 }}
              />
            }
            onClick={handleOpenFirefox}
          >
            Download for firefox
          </Button>
        </Grid>
        <Grid item xs={11} md={3.5}>
          <Button
            color="secondary"
            variant="contained"
            style={{ width: '100%' }}
            startIcon={
              <Avatar
                alt="plus"
                src="images/chrome.png"
                sx={{ width: 20, height: 20 }}
              />
            }
            onClick={handleOpenChrome}
          >
            Build for chrome
          </Button>
        </Grid>
      </Grid>


    </Grid>
  );
}

export default PG;
