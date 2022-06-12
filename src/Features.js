import "./App.css";
import { Avatar, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import { CenterFocusWeak as CenterFocusWeakIcon, AutoAwesome as AutoAwesomeIcon, Api as ApiIcon } from '@mui/icons-material';
function Features() {


  return (

    <Grid container spacing={2} sx={{ p: ' 30px', height: 300 }}>
      <Grid item xs={4}>
        <Grid item>
          <CenterFocusWeakIcon color='warning' sx={{ fontSize: 50 }} />
        </Grid>
        <Grid item sx={{ fontSize: 20, fontWeight: 600 }}>
          Simple User Interface
        </Grid>
        <Grid item sx={{ fontSize: 15, fontWeight: 400, pt: 1 }}>
          Feel comfortable,  focusing on what's important, by creating a stylised but instantly recognisable UI
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid item>
          <AutoAwesomeIcon color='success' sx={{ fontSize: 50 }} />
        </Grid>
        <Grid item sx={{ fontSize: 20, fontWeight: 600 }}>
          Efficient User Expereince
        </Grid>
        <Grid item sx={{ fontSize: 15, fontWeight: 400, pt: 1 }}>
          Efficiently and quickly get most of the common functionalities of the Kusama/Polkadot blockchain done
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid item>
          <ApiIcon color='error' sx={{ fontSize: 50 }} />
        </Grid>
        <Grid item sx={{ fontSize: 20, fontWeight: 600 }}>
          Agile Developments
        </Grid>
        <Grid item sx={{ fontSize: 15, fontWeight: 400, pt: 1 }}>
          Analyzing circumstances and user needs and adapt to the constantly evolving blockchain technology
        </Grid>
      </Grid>
    </Grid>
  );
}

export default React.memo(Features);
