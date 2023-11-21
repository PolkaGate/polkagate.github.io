import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PGMenu from './PGMenu';

function Header() {
  return (
    <Grid container justifyContent='space-between' sx={{ backgroundColor: 'black', p: "30px 30px 10px", position: 'relative', opacity: '0.9' }}    >
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
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 600, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' , textAlign: { xs: 'center', md: 'left' }}}>
            PolkaGate
          </Typography>
          <Typography sx={{ color: 'white',  fontWeight: 600, ml: 1, textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
            The Gateway to the Polkadot Ecosystem <br />
          </Typography>
          <Typography  sx={{ color: 'white',fontSize: '15px', fontWeight: 300, ml: 1, textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
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
