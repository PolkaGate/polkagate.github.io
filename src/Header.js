import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PGMenu from './PGMenu';

function Header() {
  return (
    <Grid container justifyContent='center' alignItems='center' sx={{
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: 'rgba(229,231,235,0.15)',
      },
      backgroundColor: '#0f0f0f', px: "20px",height: { md:'63px'}, position: 'relative'
    }}    >
      <Grid container justifyContent='space-between' >
        <Grid alignItems='center' container item justifyContent='flex-start' spacing={2} md>
          <Grid item container mx='auto' width='fit-content'>
            <Box
              component="img"
              alt="logo"
              src="images/pg.png"
              sx={{
                width: 100,
                height: 100,
                maxHeight: { xs: 24, md: 26 },
                maxWidth: { xs: 24, md: 26 },
              }}
            />
          </Grid>
          <Grid item xs={12} md>
            <Typography color='#f5f5f4' variant="h2" sx={{ fontSize: '20px', textAlign: { xs: 'center', md: 'left' } }}>
              PolkaGate
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
