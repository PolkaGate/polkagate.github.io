import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PGMenu from './PGMenu';

function Header() {
  return (
    <Grid container spacing={2} justifyContent='space-between' sx={{ px: " 30px", pt: '30px', pb: "10px", color: "white", bgcolor: "#180710" }}    >
      <Grid container item justifyContent='flex-start' spacing={2}>
        <Grid item container mx='auto' xs={12} md={1.2}>
          <Box
            component="img"
            alt="logo"
            src="images/pg.png"
            sx={{
              width: 120,
              height: 120,
              maxHeight: { xs: 80, md: '90%' },
              maxWidth: { xs: 80, md: '90%' },
            }}
          />
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h2" sx={{ fontWeight: 600 }}>
            PolkaGate
          </Typography>
          <Typography variant="overline" sx={{ ml: 1, fontWeight: 'bold' }}>
            The gateway to Polkadot ecosystem <br />
          </Typography>
          <Typography variant="overline" sx={{ ml: 1 }}>
            Supported by Kusama Treasury
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
