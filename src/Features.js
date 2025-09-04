import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  CenterFocusWeak as CenterFocusWeakIcon,
  AutoAwesome as AutoAwesomeIcon,
  Api as ApiIcon,
} from "@mui/icons-material";
import { MAX_WIDTH } from "./util/constants";

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
    <Grid container spacing={2} sx={{ maxWidth:MAX_WIDTH, px: { xs: '30px', md: "150px" }, pt: "20px", position: 'relative' }}>
      <Feature
        icon={<CenterFocusWeakIcon color="warning" sx={{ fontSize: 50 }} />}
        title={"Secure & Simple UI"}
        text={
          "A non-custodial interface that keeps your assets safe while making management effortless."        }
      />
      <Feature
        icon={<AutoAwesomeIcon color="success" sx={{ fontSize: 50 }} />}
        title={"Efficient User Experience"}
        text={
          "Perform common tasks on Kusama/Polkadot quickly and efficiently."
        }
      />
      <Feature
        icon={<ApiIcon color="error" sx={{ fontSize: 50 }} />}
        title={"Agile Developments"}
        text={
          "Adapt rapidly to evolving blockchain technologies by analyzing user needs and circumstances."
        }
      />
    </Grid>
  );
}

export default React.memo(Features);
