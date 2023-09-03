import { Grid, Typography } from "@mui/material";
import React from "react";
import Member from "./Member";
import { hexToRgba } from './util/utils';

function Team() {
  return (
    <Grid id='team'
      container
      justifyContent="center"
      sx={{ px: " 30px", py: "60px", color: "white", bgcolor: hexToRgba("#e6007a", 0.9), position: 'inherit' }}
    >
      <Grid item xs={12} sx={{ textAlign: "center", pb: 2 }}>
        <Typography
          style={{ display: "inline-block" }}
          variant="h5"
          fontWeight={700}
        >
          Meet Our Team
        </Typography>
        <Typography style={{ display: "inline-block" }} variant="body1">
          {'   '}{"{We are hiring}"}
        </Typography>
      </Grid>

      <Member
        src={"/images/avatar/kami.jpg"}
        name={"Dr. G. (Kami) Ekbatanifard"}
        title={"Founder - CEO"}
        link={"ekbatanifard"}
      />
      <Member
        src={"/images/avatar/morteza.jpg"}
        name={"Morteza Chalaki"}
        title={"CFO"}
        link={"mchalaki"}
      />
      <Member
        src={"/images/avatar/mehran.jpg"}
        name={"Dr. Mehran Pourvahab"}
        title={"Blockchain researcher"}
        link={"mehran-pourvahab"}
      />
      <Member
        src={"/images/avatar/martin.jpg"}
        name={"Martin Azarbad"}
        title={"UI/UX specialist"}
        link={"mehranazarbad"}
      />
      <Member
        src={"/images/avatar/amir.jpg"}
        name={"Amir Ekbatani"}
        title={"Test engineer"}
        link={"amir-ekbatani-4b7399201"}
      />

      <Member src={""} title={"Front-end developer"} />
    </Grid>
  );
}

export default React.memo(Team);
