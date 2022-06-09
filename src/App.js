import "./App.css";
import { Avatar, Box, Grid, Typography, Button } from "@mui/material";
import { useCallback } from "react";

function App() {
  const handleOpenFirefox = useCallback(() => {
    window.open(
      'https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-plus-extension/',
      "_blank"     
    );
  }, []);
  return (
    <Grid container justifyContent="center" sx={{ pt: 5 }}>
      {/* <Avatar alt="plus" src="images/plus.svg" sx={{ width: 70, height: 70 }} /> */}
      <Box
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
      <Grid container justifyContent="center">
        <Box
          component="img"
          sx={{
            height: 607,
            width: 2245,
            maxHeight: { xs: 60, md: 303 },
            maxWidth: { xs: 224, md: 1123 },
            pt: 3,
          }}
          alt="intro"
          src="images/intro.png"
        />
      </Grid>
      <Grid item xs={12} sx={{ px: 6 }}>
        <Typography align="center" variant="subtitle1" sx={{ pt: 4 }}>
          Polkadot js plus is actually Polkadot js extension, plus new features.
          It is a user-friendly wallet to interact with the Polkadot/Substrate
          based blockchains through a browser.
        </Typography>
        <Typography align="center" variant="body2" sx={{ pt: 2 }}>
          It allows users to access their account(s), which can also be used to
          interact with decentralized apps.
        </Typography>
      </Grid>
      <Button
        color="primary"
        variant="contained"
        sx={{ mt: 3 }}
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
  );
}

export default App;
