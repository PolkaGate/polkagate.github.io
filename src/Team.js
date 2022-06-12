import "./App.css";
import { Avatar, Stack, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";

function Team() {


  return (

    <Grid container spacing={2} justifyContent="center" sx={{ p: ' 30px', color: 'white', bgcolor: '#e6007a', height: 400 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
      >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Avatar
          alt="Kami"
          src="/images/avatar/kami.jpg"
          sx={{ width: 80, height: 80 }}
        />
        <Typography align="center" variant="body1">
          Blockchain engineer
        </Typography>
      </Stack >

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Avatar
          alt="Amir"
          src="/images/avatar/amir.png"
          sx={{ width: 80, height: 80 }}
        />
        <Typography align="center" variant="body1">
          Test engineer
        </Typography>
      </Stack >
      
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Avatar
          alt="John Doe"
          // src="/images/avatar/kami.jpg"
          sx={{ width: 80, height: 80 }}
        />
        <Typography align="center" variant="body1">
          UI designer
        </Typography>
      </Stack >
    </Stack >
    </Grid >
  );
}

export default React.memo(Team);
