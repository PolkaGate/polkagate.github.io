import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Member from "./Member";
import { MAX_WIDTH } from "./util/constants";

function Team() {
  const theme = useTheme();
  return (
    <Grid id='team'
      container
      justifyContent="center"
      sx={{
        px: { xs: 2, md: 4 },
        py: { xs: 7, md: 10 },
        color: theme.palette.text.primary,
        bgcolor: theme.palette.section.light,
        position: 'inherit',
      }}
    >
      <Grid container sx={{ maxWidth: MAX_WIDTH }}>
        <Grid item xs={12} sx={{ textAlign: "center", pb: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 32,
              px: 1.75,
              py: 0.625,
              mb: 2.25,
              borderRadius: '999px',
              border: `1px solid ${theme.palette.divider}`,
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.mode === 'light' ? 'rgba(231,49,136,0.06)' : 'rgba(231,49,136,0.12)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            People Behind PolkaGate
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              fontSize: { xs: '32px', md: '48px' },
              lineHeight: 0.96,
              letterSpacing: '-0.03em',
              mb: 1.5,
            }}
          >
            Team with product,
            <br />
            research, and delivery focus
          </Typography>
          <Typography
            sx={{
              maxWidth: 720,
              mx: 'auto',
              color: theme.palette.text.secondary,
              fontSize: { xs: '15px', md: '17px' },
              lineHeight: 1.7,
            }}
          >
            PolkaGate is built by a small cross-functional team covering blockchain research,
            product development, frontend delivery, and interface design across the Polkadot ecosystem.
          </Typography>
        </Grid>

        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          <Member
            src={"/images/avatar/kami.jpg"}
            name={"Dr. G. (Kami) Ekbatanifard"}
            title={"Founder · CEO · Developer"}
            link={"ekbatanifard"}
          />
          <Member
            src={"/images/avatar/morteza.jpg"}
            name={"Morteza Chalaki"}
            title={"CFO"}
            link={"mchalaki"}
          />
          <Member
            src={"/images/avatar/amir.jpg"}
            name={"Amir Ekbatani"}
            title={"Test Engineer · Front-end Developer"}
            link={"amir-ekbatani-4b7399201"}
          />
          <Member
            src={"/images/avatar/mehran.jpg"}
            name={"Dr. Mehran Pourvahab"}
            title={"Blockchain Researcher"}
            link={"mehran-pourvahab"}
          />
          <Member
            src={"/images/avatar/martin.jpg"}
            name={"Martin Azarbad"}
            title={"UI/UX Specialist"}
            link={"mehranazarbad"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default React.memo(Team);
