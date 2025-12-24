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
      <Grid item>
        {icon}
      </Grid>
      <Typography variant='h2' sx={{color:'#f6f6f4', fontSize: {xs:20, md:30}, fontWeight: 600, pt: 1 }}>
        {title}
      </Typography>
      <Typography sx={{color:'#a8a1a1', fontSize: 16, fontWeight: 300, pt: 2 }}>
        {text}
      </Typography>
    </Grid>
  );

  return (
    <Grid container justifyContent='center' sx={{ bgcolor: '#1b1917', position: 'relative', py: { xs: '20px',md: '60px' } }}>
      <Grid container justifyContent='space-around' spacing={2} sx={{ px: { xs: '30px', md: "150px" }, pt: "20px" }}>
        <Feature
          // icon={<CenterFocusWeakIcon color="warning" sx={{ fontSize: 50 }} />}
          title={"Secure & Simple UI"}
          text={
            "A non-custodial interface that keeps your assets safe while making management effortless."}
        />
        <Feature
          // icon={<AutoAwesomeIcon color="success" sx={{ fontSize: 50 }} />}
          title={"Efficient User Experience"}
          text={
            "Perform common tasks on Kusama/Polkadot quickly and efficiently."
          }
        />
        <Feature
          // icon={<ApiIcon color="error" sx={{ fontSize: 50 }} />}
          title={"Agile Developments"}
          text={
            "Adapt rapidly to evolving blockchain technologies by analyzing user needs and circumstances."
          }
        />
      </Grid>
    </Grid>
  );
}

export default React.memo(Features);
