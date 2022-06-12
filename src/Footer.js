import "./App.css";
import { Avatar, Stack, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";

function Footer() {


  return (

    <Grid container spacing={2} justifyContent="center" sx={{ p: ' 30px', color: 'white', bgcolor: '#172026', height: 400 }}>
      <Grid item xs={4}>
        <Grid item>
          Links
        </Grid>
        <Grid item sx={{ fontSize: 20, fontWeight: 600 }}>
          About
        </Grid>
        <Grid item sx={{ fontSize: 15, fontWeight: 400, pt: 1 }}>
          ...
        </Grid>
      </Grid>
    </Grid >
  );
}

export default React.memo(Footer);
