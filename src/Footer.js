import "./App.css";
import { Avatar, Stack, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ p: " 30px", color: "white", bgcolor: "#172026", height: 100 }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <SocialIcon
          bgColor="white"
          url="https://twitter.com/polkadotjsplus"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          bgColor="white"
          url="https://github.com/Nick-1979/polkadot-Js-Plus-extension/wiki"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          bgColor="white"
          url="mailto:polkadotjsplus@gmail.com"
          style={{ height: 35, width: 35 }}
        />
      </Stack>
      <Grid item xs={12} sx={{ fontSize: 12, textAlign: "center" }}>
        © 2022 Plus Foundation
      </Grid>
    </Grid>
  );
}

export default React.memo(Footer);
