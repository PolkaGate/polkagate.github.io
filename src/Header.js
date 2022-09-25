import { Avatar, Stack, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import { SocialIcon } from "react-social-icons";
import PGMenu from './PGMenu';

function Header() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent='space-between'
      sx={{ px: " 30px", pt:'30px', mb: "70px", color: "white", bgcolor: "#180710" }}
    >
      <Grid container item justifyContent='flex-start' spacing={2}>
        <Grid item  container px='auto' xs={12} md={1.2}>
          <Box
            component="img"
            alt="logo"
            src="images/pg.png"
            sx={{
              width: 120,
              height: 120,
              maxHeight: { xs: 80, md: 120 },
              maxWidth: { xs: 80, md: 120 },
            }}
          />
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h2" sx={{ fontWeight: 600 }}>
            PolkaGate
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            The gateway to Polkadot ecosystem
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justifyContent='flex-end' alignItems='flex-end' sx={{ px: '20px' }}>
        <PGMenu />
      </Grid>
    </Grid >
  );
}

export default React.memo(Header);
