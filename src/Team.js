import { Avatar, Stack, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import Member from "./Member";
function Team() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ px: " 30px", py: "50px", color: "white", bgcolor: "#e6007a" }}
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
          <p>{"{We are hiring}"}</p>
        </Typography>
      </Grid>

      <Member
        src={"/images/avatar/kami.jpg"}
        name={"Dr. Kami Ekbatanifard"}
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

      <Member src={""} title={"Full stack developer"} />
    </Grid>
  );
}

export default React.memo(Team);
