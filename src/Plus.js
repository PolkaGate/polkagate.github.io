
import { Avatar, Box, Grid, Typography, Button, Link } from "@mui/material";
import React, { useCallback } from "react";

const Home = () => {
  const handleOpenFirefox = useCallback(() => {
    window.open(
      "https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-plus-extension/",
      "_blank"
    );
  }, []);

  const handleOpenChrome = useCallback(() => {
    window.open(
      "https://github.com/Nick-1979/polkadot-Js-Plus-extension#add-on",
      "_blank"
    );
  }, []);

  return (
    <Grid container justifyContent="center" id='pjs+' sx={{ color: "white", bgcolor: "#180710", py: '50px' }}>
      <Grid container item justifyContent='center' alignItems='center' spacing={2} pb='30px'>
        <Grid item >
          <Box component="img" alt="logo" src="images/plus.svg" sx={{ width: 70, height: 70, maxHeight: { xs: 40, md: 70 }, maxWidth: { xs: 40, md: 70 }, }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ ml: 1, fontWeight: 600 }}>
            Polkadot js PLUS extension
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" pt={{ xs: 1, md: 2 }}>
        <Box
          component="img"
          sx={{
            height: 607,
            width: 2245,
            maxHeight: { xs: 90, md: 303 },
            maxWidth: { xs: 336, md: 1123 }
          }}
          alt="intro"
          src="images/intro.png"
        />
        <Grid item xs={12} textAlign="right" pr="40px" fontSize={14}>
          <Link
            href="https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki/How-To's"
            target="_blank"
            rel="noopener"
          >
            More photos
          </Link>
        </Grid>
      </Grid>
      <Grid item md={12} px={{ sx: 2, md: 8 }}>
        <Typography align="center" variant="subtitle1" sx={{ pt: 4 }}>
          Polkadot js plus is actually Polkadot js extension, plus new features. It is a user-friendly wallet to interact with the
          Polkadot/Substrate based blockchains through a browser. It allows users to access their account(s), which can also be used to interact
          with decentralized apps.
        </Typography>
      </Grid>
      <Grid container item justifyContent='center' spacing={1} mt='20px'>
        <Grid item xs={11} md={3.5}>
          <Button
            color="primary"
            variant="contained"
            style={{width:'100%'}}
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
            style={{width:'100%'}}
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

export default Home;
