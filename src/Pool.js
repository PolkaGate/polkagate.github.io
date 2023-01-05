
import { CardContent, Card, Box, Grid, Button, CardActions } from "@mui/material";
import React from "react";
import usePool from "./hooks/usePool";
import ShowBalance from "./components/ShowBalance";

export function fixFloatingPoint(_number, decimalDigit, commify?) {
  // make number positive if it is negative
  const sNumber = Number(_number) < 0 ? String(-Number(_number)) : String(_number);

  const dotIndex = sNumber.indexOf('.');

  if (dotIndex < 0) {
    return sNumber;
  }

  let integerDigits = sNumber.slice(0, dotIndex);

  integerDigits = commify ? Number(integerDigits).toLocaleString() : integerDigits;
  const fractionalDigits = sNumber.slice(dotIndex, dotIndex + decimalDigit + 1);

  return integerDigits + fractionalDigits;
}

export function amountToHuman(_amount, _decimals, decimalDigits, commify) {
  if (!_amount) {
    return '';
  }

  _amount = String(_amount).replace(/,/g, '');

  const x = 10 ** _decimals;

  return fixFloatingPoint(Number(_amount) / x, decimalDigits, commify);
}

const Pool = ({ index, name, token, decimal }) => {
  const info = usePool(index);

  return (
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
              <Grid item xs={12} textAlign='left'>
                Members: <b>{info?.bondedPool?.memberCounter}</b>
              </Grid>
              <Grid item container xs={12} textAlign='left'>
                <Grid item>
                  Staked:
                </Grid>
                <Grid item sx={{fontWeight:600, ml:'10px'}}>
                  <ShowBalance balance={info?.stashIdAccount?.stakingLedger?.active} decimal={decimal} token={token} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent='flex-end' >
            {/* <Button size="small">Join</Button> */}
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Pool;
