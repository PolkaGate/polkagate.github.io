import "./App.css";
import { Avatar, Stack, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";

function Team() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ p: " 30px", color: "white", bgcolor: "#e6007a", height: 400 }}
    >
      <Grid item xs={12}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={15}
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
            sx={{ width: 100, height: 100 }}
          />
          <Typography align="center" variant="body1">
            CEO / Blockchain engineer
          </Typography>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Avatar
            alt="Amir"
            src="/images/avatar/amir.png"
            sx={{ width: 100, height: 100 }}
          />
          <Typography align="center" variant="body1">
            Test engineer
          </Typography>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Avatar
            alt="John Doe"
            // src="/images/avatar/kami.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <Typography align="center" variant="body1">
            UI/UX designer
          </Typography>
        </Stack>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Avatar
            alt="John Doe"
            // src="/images/avatar/kami.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <Typography align="center" variant="body1">
            Rust developer
          </Typography>
        </Stack>
      </Stack>
      </Grid>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={15}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Avatar
            alt="John Doe"
            // src="/images/avatar/kami.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <Typography align="center" variant="body1">
            API developer
          </Typography>
        </Stack>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Avatar
            alt="John Doe"
            // src="/images/avatar/kami.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <Typography align="center" variant="body1">
            Full stack developer
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default React.memo(Team);
