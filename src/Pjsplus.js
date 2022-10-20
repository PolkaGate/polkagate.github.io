
import { Avatar, Box, Grid, Typography, Button, Link } from "@mui/material";
import React, { useCallback } from "react";
import Features from "./Features";
import Team from "./Team";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "./Slider";

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
    <>
      <Grid container justifyContent="center" id='pjs+'>
        <Grid
          component="img"
          alt="logo"
          src="images/logo.jpg"
          sx={{
            width: 405,
            height: 70,
            maxHeight: { xs: 35, md: 70 },
            maxWidth: { xs: 202, md: 405 },
          }}
        />
        {/* <Slider /> */}
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
            Polkadot js plus is actually Polkadot js extension, plus new
            features. It is a user-friendly wallet to interact with the
            Polkadot/Substrate based blockchains through a browser. It allows
            users to access their account(s), which can also be used to interact
            with decentralized apps.
          </Typography>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 5 }}
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
        <Button
          color="secondary"
          variant="contained"
          sx={{ mt: 5, ml: 5 }}
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
      <Features />
    </>
  );
}

export default Home;
