import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PGMenu from './PGMenu';
import { MAX_WIDTH } from "./util/constants";

function Header() {
  return (
    <Grid container justifyContent='center' sx={{ backgroundColor: '#fff', p: "10px 30px 0px", position: 'relative' }}    >
      <Grid container justifyContent='space-between' sx={{ maxWidth: MAX_WIDTH }}    >
        <Grid container item justifyContent='flex-start' spacing={2} md>
          <Grid item container mx='auto' width='fit-content'>
            <Box
              component="img"
              alt="logo"
              src="images/pg-black.png"
              sx={{
                width: 100,
                height: 100,
                maxHeight: { xs: 80, md: '90%' },
                maxWidth: { xs: 80, md: '90%' },
              }}
            />
          </Grid>
          <Grid item xs={12} md>
            <Typography color='#000' sx={{ fontWeight: 600, fontSize: '30px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', textAlign: { xs: 'center', md: 'left' } }}>
              PolkaGate
            </Typography>
            <Typography color='#000' sx={{ fontWeight: 500, fontSize: '18px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
              The Gateway to the Polkadot Ecosystem <br />
            </Typography>
            <Typography color='#000' sx={{ fontWeight: 300,  fontSize: '12px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
              Supported by Kusama Treasury
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='flex-end' alignItems='flex-end' md={4}>
          <PGMenu />
        </Grid>
      </Grid >
    </Grid >
  );
}

export default React.memo(Header);
