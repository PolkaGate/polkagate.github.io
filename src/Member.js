import { Avatar, Box, Stack, Grid, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

function Member({ src, name, link, title }) {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3.6}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: '100%',
          px: 2.5,
          py: 3,
          borderRadius: '28px',
          backgroundColor: theme.palette.mode === 'light' ? '#fffaf2' : '#18181b',
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: theme.palette.mode === 'light'
            ? '0 16px 40px rgba(27,25,23,0.08)'
            : '0 16px 40px rgba(0,0,0,0.24)',
        }}
      >
        <Avatar
          src={src}
          sx={{
            width: 120,
            height: 120,
            mb: 2,
            border: theme.palette.mode === 'light'
              ? '3px solid rgba(27,25,23,0.08)'
              : '3px solid rgba(255,255,255,0.08)',
          }}
        />
        <Typography align="center">
          <Link
            href={`https://www.linkedin.com/in/${link}`}
            underline="none"
            color="inherit"
            target="_blank"
            rel="noopener"
            fontWeight={600}
            sx={{
              color: theme.palette.text.primary,
              fontSize: '18px',
              lineHeight: 1.3,
            }}
          >
            {name}
          </Link>
        </Typography>
        <Box
          sx={{
            width: 42,
            height: 2,
            my: 1.5,
            borderRadius: '999px',
            backgroundColor: theme.palette.primary.main,
            opacity: 0.65,
          }}
        />
        <Typography
          align="center"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: '15px',
            lineHeight: 1.6,
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Grid>
  );
}

export default React.memo(Member);
