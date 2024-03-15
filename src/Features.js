import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  CenterFocusWeak as CenterFocusWeakIcon,
  AutoAwesome as AutoAwesomeIcon,
  Api as ApiIcon,
} from "@mui/icons-material";

function Features() {
  const Feature = ({ icon, title, text }) => (
    <Grid item md={4} sx={{ px: 4 }}>
      <Grid item>{icon}</Grid>
      <Grid item sx={{ fontSize: 20, fontWeight: 600, pt: 1 }}>
        {title}
      </Grid>
      <Typography variant="body2" pt={1}>
        {text}
      </Typography>
    </Grid>
  );

  return (
    <Grid container spacing={2} sx={{ px: { xs: '30px', md: "150px" }, py: "50px", position: 'relative' }}>
      <Feature
        icon={<CenterFocusWeakIcon color="warning" sx={{ fontSize: 50 }} />}
        title={"Simple User Interface"}
        text={
          "Feel comfortable, focusing on what's important, by creating a stylized but instantly recognizable UI"
        }
      />
      <Feature
        icon={<AutoAwesomeIcon color="success" sx={{ fontSize: 50 }} />}
        title={" Efficient User Experience"}
        text={
          "Efficiently and quickly get most of the common functionalities done on Kusama/Polkadot blockchains"
        }
      />
      <Feature
        icon={<ApiIcon color="error" sx={{ fontSize: 50 }} />}
        title={"  Agile Developments"}
        text={
          "Analyzing circumstances and user needs and adapt to the constantly evolving blockchain technology"
        }
      />
    </Grid>
  );
}

export default React.memo(Features);
