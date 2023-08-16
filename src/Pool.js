
import { CardContent, Card, Box, Grid, CardActions, Link } from "@mui/material";
import React from "react";
import usePool from "./hooks/usePool";
import ShowBalance from "./components/ShowBalance";
import ShowValue from "./components/ShowValue";

export function fixFloatingPoint(_number, decimalDigit, commify) {
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

const Pool = ({ index, name, token, decimal, tokenPrice }) => {
  const info = usePool(index);
  const stakedInUsd = info?.stashIdAccount?.stakingLedger?.active && tokenPrice &&
    `${(parseFloat(amountToHuman(info.stashIdAccount.stakingLedger.active, decimal)) * tokenPrice).toLocaleString()} USD`;

  console.log('info:', info)
  const subscanLink = (i) => `https://${token === 'DOT' ? 'Polkadot' : 'kusama'}.subscan.io/nomination_pool/${String(i)}`;

  return (
    <Grid item md={5.8} xs={12} sx={{ textAlign: "center", pb: 2, mb: '20px', mx: '10px' }}>
      <Card elevation={18} borderRadius='50%' >
        <CardContent>
          <Grid component='img' src={`images/chains/${token}.svg`} width='50px' height='50px' sx={{ borderRadius: '50%' }} />
          <Grid container>
            <Grid container item width='fit-content' mr='10px'>
              <Box component='img' src={`images/pools/${token}Pool.png`} width='50px' height='50px' />
            </Grid>
            <Grid container item xs >
              <Grid item sx={12} my='4px'>
                Pool Index: <strong>{index}</strong>
              </Grid>
              <Grid item xs={12} textAlign='left' my='4px'>
                Name: <b>{name}</b>
              </Grid>
              <Grid item container xs={12} textAlign='left' my='4px'>
                <Grid item>
                  Members:
                </Grid>
                <Grid item sx={{ fontWeight: 600, ml: '10px' }}>
                  <ShowValue value={info?.bondedPool?.memberCounter} />
                </Grid>
              </Grid>
              <Grid container item justifyContent='flex-start' my='4px'>
                <Grid item>
                  Total staked:
                </Grid>
                <Grid item sx={{ fontWeight: 600, ml: '10px' }}>
                  <ShowBalance balance={info?.stashIdAccount?.stakingLedger?.active} decimal={decimal} token={token} />
                </Grid>
                <Grid item sx={{ fontWeight: 600, mx: '15px' }}>
                  |
                </Grid>
                <Grid item sx={{ fontWeight: 600 }}>
                  <ShowValue value={stakedInUsd} />
                </Grid>
              </Grid>
              <Grid container item justifyContent='flex-start' my='4px'>
                <Grid item>
                  Distributed Rewards:
                </Grid>
                <Grid item sx={{ fontWeight: 600, ml: '10px' }}>
                  <ShowBalance balance={info?.rewardPool?.totalRewardsClaimed} decimal={decimal} token={token} />
                </Grid>
              </Grid>
              <Grid container item justifyContent='flex-start' my='4px'>
                <Grid item>
                  Unclaimed Rewards:
                </Grid>
                <Grid item sx={{ fontWeight: 600, ml: '10px' }}>
                  <ShowBalance balance={info?.rewardClaimable} decimal={decimal} token={token} />
                </Grid>
              </Grid>
              <Grid container item justifyContent='flex-start' my='4px'>
                <Grid item>
                  Pool Commission:
                </Grid>
                <Grid item sx={{ fontWeight: 600, ml: '10px' }}>
                  <ShowValue value={`${info?.bondedPool?.commission?.current ? info.bondedPool.commission.current[0] : 0}%`} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent='flex-end' >
            <Link
              href={`${subscanLink(index)}`} 
              rel='noreferrer'
              target='_blank'
              underline='none'
            >
              <Box component='img' src={`images/subscan.svg`} width='30px' height='30px' />
            </Link>
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
