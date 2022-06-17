import { Avatar, Stack, Grid, Typography, Link } from "@mui/material";
import React from "react";

function Member({ src, name, link, title }) {
  return (
    <Grid item md={3}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Avatar src={src} sx={{  width: 100, height: 100 }} />
        <Typography align="center" variant="subtitle2">
          <Link
            href={`https://www.linkedin.com/in/${link}`}
            underline="none"
            color="inherit"
            target="_blank"
            rel="noopener"
            fontWeight={700}
          >
            {name}
          </Link>
        </Typography>
        <Typography align="center" variant="body2" fontStyle='oblique'>
          {title}
        </Typography>
      </Stack>
    </Grid>
  );
}

export default React.memo(Member);
