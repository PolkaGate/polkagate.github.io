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
      backgroundColor: '#0f0f0f',
      px: { xs: "14px", md: "20px" },
      minHeight: { xs: '56px', md: '63px' },
      position: 'relative'
    }}>
      <Grid container justifyContent='space-between' alignItems='center' sx={{ flexWrap: 'nowrap' }}>
        <Grid item>
          <Grid alignItems='center' container wrap='nowrap' spacing={1.25}>
            <Grid item>
            <Box
              component="img"
              alt="logo"
              src="images/pg.png"
              sx={{
                width: { xs: 22, md: 26 },
                height: { xs: 22, md: 26 },
              }}
            />
            </Grid>
            <Grid item>
              <Typography
                color='#f5f5f4'
                variant="h2"
                sx={{
                  fontSize: { xs: '18px', md: '20px' },
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                PolkaGate
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ minWidth: 'fit-content' }}>
          <PGMenu />
        </Grid>
      </Grid >
    </Grid >
  );
}

export default React.memo(Header);
