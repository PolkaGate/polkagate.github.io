
import { CardContent, Card, Box, Grid, Typography, Button, CardActions } from "@mui/material";
import React, { useCallback } from "react";
import { grey } from '@mui/material/colors';

const Home = () => {
  const handleOpenFirefox = useCallback(() => {
    window.open(
      "https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-plus-extension/",
      "_blank"
    );
  }, []);

  const handleOpenChrome = useCallback(() => {
    window.open(
      "https://github.com/Nick-1979/polkadot-Js-Plus-extension#add-on",
      "_blank"
    );
  }, []);

  const Pool = ({ index, name, token }) => (
    <Grid item md={5.9} xs={12} sx={{ textAlign: "center", pb: 2, mb: '20px' }}>
      <Card elevation={18} borderRadius='50%' >
        <CardContent>
          <Grid component='img' src={`images/chains/${token}.svg`} width='50px' height='50px' my='20px' />
          <Grid container>
            <Grid container item width='fit-content' mr='10px'>
              <Box component='img' src={`images/pools/${token}Pool.png`} width='50px' height='50px' />
            </Grid>
            <Grid container item xs >
              <Grid item sx={12}>
                Pool Index: <strong>{index}</strong>
              </Grid>
              <Grid item xs={12} textAlign='left'>
                Name: <b>{name}</b>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent='flex-end' >
            <Button size="small">Join</Button>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )

  return (
    <Grid container justifyContent="space-between" id='pools' py='50px'>
      <Grid item xs={12} sx={{ textAlign: "center", pb: 2 }}>
        <Typography style={{ display: "inline-block" }} variant="h5" width='100%' fontWeight={700}>
          Join Our Staking Pools
        </Typography>
        <Typography style={{ display: "inline-block" }} variant="subtitle1" fontWeight={500} width='75%' py='30px'>
          Polkagate staking pools are available on both Polkadot an Kusama blockchains. You can join our Polkadot pool and earn rewards with at least 1 DOT.
          Similarly you can join the Kusama pool with as little as 0.01 KSM.
        </Typography>
      </Grid>
      <Pool index={8} name='Polkadot js plus ❤️ | http://polkagate.xyz | Nominates trusted, high return validators' token='DOT' />
      <Pool index={18} name='Polkadot js plus ❤️ | http://polkadotjs.plus' token='KSM' />
    </Grid>
  );
}

export default Home;
