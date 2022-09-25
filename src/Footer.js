import { Avatar, Stack, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <Grid id='contacts'
      container
      spacing={2}
      justifyContent="center"
      sx={{ p: " 60px", color: "white", bgcolor: "#172026" }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <SocialIcon
          bgColor="white"
          url="https://twitter.com/polkagate"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          bgColor="white"
          url="https://github.com/polkagate"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          bgColor="white"
          url="mailto:polkagate@outlook.com"
          style={{ height: 35, width: 35 }}
        />
      </Stack>
      <Grid item xs={12} sx={{ fontSize: 12, textAlign: "center" }}>
        © 2022 PolkaGate Foundation
      </Grid>
    </Grid>
  );
}

export default React.memo(Footer);
