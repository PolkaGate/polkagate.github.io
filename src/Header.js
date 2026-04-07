import { Box, Grid, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DarkMode, LightMode } from "@mui/icons-material";
import React from "react";
import PGMenu from './PGMenu';
import { useColorMode } from "./colorMode";

function Header() {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Grid container justifyContent='center' alignItems='center' sx={{
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        backgroundColor: theme.palette.divider,
      },
      backgroundColor: theme.palette.section.header,
      px: { xs: "14px", md: "20px" },
      minHeight: { xs: '56px', md: '63px' },
      position: 'relative',
      backdropFilter: 'blur(12px)',
    }}>
      <Grid container justifyContent='space-between' alignItems='center' sx={{ flexWrap: 'nowrap' }}>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              minHeight: { xs: 28, md: 30 },
            }}
          >
            <Box
              component="img"
              alt="logo"
              src={mode === 'dark' ? 'images/pg-black.png' : 'images/pg-white.png'}
              sx={{
                width: { xs: 22, md: 26 },
                height: { xs: 22, md: 26 },
                flexShrink: 0,
                display: 'block',
              }}
            />
            <Typography
              color={theme.palette.text.primary}
              variant="h2"
              sx={{
                fontSize: { xs: '18px', md: '20px' },
                lineHeight: 1,
                whiteSpace: 'nowrap',
                display: 'block',
                pt: '1px',
              }}
            >
              PolkaGate
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={{ minWidth: 'fit-content', display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <PGMenu />
          <IconButton
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleColorMode}
            sx={{ color: theme.palette.text.primary }}
          >
            {mode === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
          </IconButton>
        </Grid>
      </Grid >
    </Grid >
  );
}

export default React.memo(Header);
