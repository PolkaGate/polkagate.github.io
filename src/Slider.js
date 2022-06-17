import { Avatar, Box, Grid, Typography, Button } from "@mui/material";
import React, { useCallback } from "react";
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from "@mui/icons-material";

const ImageList=  ['intro','transfer1']
  
  function Slider() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        pt={{ xs: 1, md: 6 }}
      >
        <Grid item xs={1} textAlign="right">
          <KeyboardArrowLeftIcon sx={{ fontSize: 40 }} color="action" />
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={10}
        >
          <Grid
            item
            xs={12}
            style={{
              backgroundImage: `url(images/screenShots/${ImageList[1]}.PNG)`,
              height: "600px",
              marginTop: 20,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            justifyContent="center"
            alignItems="center"
          />
        </Grid>
        {/* <Box
            component="img"
            // sx={{
            //   height: 607,
            //   width: 2245,
            //   maxHeight: { xs: 90, md: 303 },
            //   maxWidth: { xs: 336, md: 1123 },
            //   pt: 5,
            // }}
            alt="intro"
            src="images/intro.png"
          /> */}
        <Grid item xs={1} textAlign="left">
          <KeyboardArrowRightIcon sx={{ fontSize: 40 }} color="action" />
        </Grid>
      </Grid>
    </>
  );
}

export default Slider;
