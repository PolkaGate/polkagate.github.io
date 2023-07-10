import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PGMenu from './PGMenu';

function Header() {
  return (
    <Grid container justifyContent='space-between' sx={{ px: " 30px", pt: '30px', pb: "10px", position: 'relative' }}    >
      <Grid container item justifyContent='flex-start' spacing={2} md>
        <Grid item container mx='auto' width='fit-content'>
          <Box
            component="img"
            alt="logo"
            src="images/pg-black.png"
            sx={{
              width: 120,
              height: 120,
              maxHeight: { xs: 80, md: '90%' },
              maxWidth: { xs: 80, md: '90%' },
            }}
          />
        </Grid>
        <Grid item xs={12} md>
          <Typography variant="h3" sx={{ fontWeight: 600, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
            PolkaGate
          </Typography>
          <Typography variant="h5" sx={{ ml: 1, fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
            The gateway to the Polkadot ecosystem <br />
          </Typography>
          <Typography variant="overline" sx={{ ml: 1, textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
            Supported by Kusama Treasury
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justifyContent='flex-end' alignItems='flex-end' sx={{ px: '20px' }} md={4}>
        <PGMenu />
      </Grid>
    </Grid >
  );
}

export default React.memo(Header);
