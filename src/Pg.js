
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
      "https://github.com/Nick-1979/polkadot-Js-Plus-extension#development-version",
      "_blank"
    );
  }, []);

  return (
    <Grid id='pg'
      container
      spacing={2}
      justifyContent="center"
      sx={{ px: " 30px", py: "50px", color: "white", bgcolor: "#180710" }}
    >
      <Grid container item justifyContent='center' alignItems='center' spacing={2} pb='30px'>
        <Grid item >
          <Box
            component="img"
            alt="logo"
            src="images/pg-red.png"
            sx={{
              width: 70,
              height: 70,
              maxHeight: { xs: 40, md: 70 },
              maxWidth: { xs: 40, md: 70 },
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ ml: 1, fontWeight: 600 }} color='white'>
            PolkaGate extension
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" pt={{ xs: 1, md: 2 }}>
        <Box
          component="img"
          sx={{
            height: 700,
            width: 357,
            maxHeight: { xs: 140, md: 700 },
            maxWidth: { xs: 70, md: 357 },
            border: 1,
            borderColor: 'white',
            borderRadius: '2%',
            mr: 1
          }}
          alt="intro"
          src="images/pg/pg-1.png"
        />
        <Box
          component="img"
          sx={{
            height: 700,
            width: 357,
            maxHeight: { xs: 140, md: 700 },
            maxWidth: { xs: 70, md: 357 },
            border: 1,
            borderColor: 'white',
            borderRadius: '2%',
            mr: 1
          }}
          alt="intro"
          src="images/pg/pg-2.png"
        />
        <Box
          component="img"
          sx={{
            height: 700,
            width: 357,
            maxHeight: { xs: 140, md: 700 },
            maxWidth: { xs: 70, md: 357 },
            border: 1,
            borderColor: 'white',
            borderRadius: '2%',
            mr: 1
          }}
          alt="intro"
          src="images/pg/pg-5.png"
        />

      </Grid>
      <Grid item md={12} px={{ sx: 2, md: 8 }}>
        <Typography align="center" variant="subtitle1" sx={{ pt: 4 }} color='white'>
          PlkaGate extension is a Kusama Treasury supported extension/wallet. It is the next version of polkadot js plus which completely re-developed, with a new look, smooth user experience, and more new features.

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
      // onClick={handleOpenFirefox}
      >
        Download for firefox (Coming soon ...)
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
      // onClick={handleOpenChrome}
      >
        Build for chrome (Coming soon ...)
      </Button>
    </Grid>
  );
}

export default Home;
