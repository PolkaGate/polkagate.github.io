import { Avatar, Stack, Grid, Typography, Link } from "@mui/material";
import React from "react";

function Member({ src, name, link, title }) {
  return (
    <Grid item md={4}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        mb={3}
      >
        <Avatar src={src} sx={{  width: 130, height: 130 }} />
        <Typography align="center">
          <Link
            href={`https://www.linkedin.com/in/${link}`}
            underline="none"
            color="inherit"
            target="_blank"
            rel="noopener"
            fontWeight={600}
            sx={{ color:'#1b1917'}}
          >
            {name}
          </Link>
        </Typography>
        <Typography align="center" sx={{ color:'#1b1917', fontSize: '15px'}}>
          {title}
        </Typography>
      </Stack>
    </Grid>
  );
}

export default React.memo(Member);
