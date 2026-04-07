import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  CenterFocusWeak as CenterFocusWeakIcon,
  AutoAwesome as AutoAwesomeIcon,
  Api as ApiIcon,
} from "@mui/icons-material";

function Features() {
  const theme = useTheme();

  const Feature = ({ icon, title, text }) => (
    <Grid item md={4} sx={{ px: 4 }}>
      <Grid item>
        {icon}
      </Grid>
      <Typography variant='h2' sx={{ color: theme.palette.text.primary, fontSize: {xs:20, md:30}, fontWeight: 600, pt: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ color: theme.palette.text.secondary, fontSize: 16, fontWeight: 300, pt: 2 }}>
        {text}
      </Typography>
    </Grid>
  );

  return (
    <Grid container justifyContent='center' sx={{ bgcolor: theme.palette.section.muted, position: 'relative', py: { xs: '20px',md: '60px' } }}>
      <Grid container justifyContent='space-around' spacing={2} sx={{ px: { xs: '30px', md: "150px" }, pt: "20px" }}>
        <Feature
          // icon={<CenterFocusWeakIcon color="warning" sx={{ fontSize: 50 }} />}
          title={"Non-custodial by default"}
          text={
            "Keep control of your accounts and keys while using PolkaGate across the ecosystem."}
        />
        <Feature
          // icon={<AutoAwesomeIcon color="success" sx={{ fontSize: 50 }} />}
          title={"Built for everyday actions"}
          text={
            "Move through staking, account access, and common Polkadot ecosystem tasks with less friction."
          }
        />
        <Feature
          // icon={<ApiIcon color="error" sx={{ fontSize: 50 }} />}
          title={"Designed around real usage"}
          text={
            "PolkaGate evolves around practical user needs across Polkadot and Kusama workflows."
          }
        />
      </Grid>
    </Grid>
  );
}

export default React.memo(Features);
