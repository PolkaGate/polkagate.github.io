import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NorthEast } from "@mui/icons-material";
import React from "react";
import usePool from "./hooks/usePool";
import ShowBalance from "./components/ShowBalance";
import ShowValue from "./components/ShowValue";

export function fixFloatingPoint(_number, decimalDigit, commify) {
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
  const theme = useTheme();
  const info = usePool(index);
  const isDot = token === 'DOT';
  const accentColor = isDot ? '#e73188' : '#7c5cff';
  const stakedInUsd = info?.stashIdAccount?.stakingLedger?.active && tokenPrice &&
    `${(parseFloat(amountToHuman(info.stashIdAccount.stakingLedger.active, decimal)) * tokenPrice).toLocaleString()} USD`;
  const commission = `${info?.bondedPool?.commission?.current ? info.bondedPool.commission.current[0] : 0}%`;
  const chainIconSx = theme.palette.mode === 'dark' && isDot
    ? {
        borderRadius: '50%',
        filter: 'brightness(0) invert(1)',
      }
    : {
        borderRadius: '50%',
      };

  const statCardSx = {
    px: 2,
    py: 1.5,
    borderRadius: '18px',
    backgroundColor: theme.palette.mode === 'light' ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${theme.palette.divider}`,
    minHeight: 92,
  };

  const subscanLink = (i) => `https://AssetHub-${token === 'DOT' ? 'Polkadot' : 'kusama'}.subscan.io/nomination_pool/${String(i)}`;

  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          height: '100%',
          p: { xs: 2.5, md: 3 },
          borderRadius: '30px',
          backgroundColor: theme.palette.section.card,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: theme.palette.mode === 'light'
            ? '0 20px 50px rgba(27,25,23,0.08)'
            : '0 24px 60px rgba(0,0,0,0.28)',
        }}
      >
        <Box sx={{ width: 56, height: 4, borderRadius: '999px', backgroundColor: accentColor, mb: 2.5, opacity: 0.9 }} />

        <Grid container spacing={2} alignItems="center" sx={{ mb: 2.5 }}>
          <Grid item>
            <Box component='img' src={`images/chains/${token}.svg`} width='58px' height='58px' sx={chainIconSx} />
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.palette.text.secondary, mb: 0.5 }}>
              {isDot ? 'Polkadot Pool' : 'Kusama Pool'}
            </Typography>
            <Typography sx={{ fontSize: { xs: '26px', md: '30px' }, fontWeight: 700, lineHeight: 1 }}>
              {token}
            </Typography>
          </Grid>
          <Grid item sx={{ ml: 'auto' }}>
            <Box
              sx={{
                px: 1.4,
                py: 0.75,
                borderRadius: '999px',
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(231,49,136,0.08)' : 'rgba(231,49,136,0.12)',
                color: accentColor,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
            >
              Pool #{index}
            </Box>
          </Grid>
        </Grid>

        <Typography sx={{ color: theme.palette.text.primary, fontWeight: 600, fontSize: '18px', lineHeight: 1.4, mb: 1 }}>
          {name}
        </Typography>
        <Typography sx={{ color: theme.palette.text.secondary, fontSize: '14px', lineHeight: 1.7, mb: 3 }}>
          Stake with a curated PolkaGate nomination pool and track key pool performance directly from live network data.
        </Typography>

        <Grid container spacing={1.5} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={statCardSx}>
              <Typography sx={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.palette.text.secondary, mb: 0.8 }}>
                Members
              </Typography>
              <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>
                <ShowValue value={info?.bondedPool?.memberCounter} />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={statCardSx}>
              <Typography sx={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.palette.text.secondary, mb: 0.8 }}>
                Commission
              </Typography>
              <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>
                <ShowValue value={commission} />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={statCardSx}>
              <Typography sx={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.palette.text.secondary, mb: 0.8 }}>
                Total Staked
              </Typography>
              <Typography sx={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.3 }}>
                <ShowBalance balance={info?.stashIdAccount?.stakingLedger?.active} decimal={decimal} token={token} />
              </Typography>
              <Typography sx={{ fontSize: '14px', color: theme.palette.text.secondary, mt: 0.5 }}>
                <ShowValue value={stakedInUsd} />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={statCardSx}>
              <Typography sx={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.palette.text.secondary, mb: 0.8 }}>
                Distributed Rewards
              </Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.4 }}>
                <ShowBalance balance={info?.rewardPool?.totalRewardsClaimed} decimal={decimal} token={token} />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={statCardSx}>
              <Typography sx={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.palette.text.secondary, mb: 0.8 }}>
                Unclaimed Rewards
              </Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.4 }}>
                <ShowBalance balance={info?.rewardClaimable} decimal={decimal} token={token} />
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Button
          component="a"
          href={subscanLink(index)}
          target="_blank"
          rel="noreferrer"
          endIcon={<NorthEast />}
          sx={{
            width: '100%',
            minHeight: 52,
            borderRadius: '999px',
            backgroundColor: theme.palette.mode === 'light' ? '#f6efe7' : '#f0dbe8',
            color: '#1b1917',
            border: '1px solid rgba(27,25,23,0.1)',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'light' ? '#fbf5ee' : '#f5e7ef',
            },
          }}
        >
          View on Subscan
        </Button>
      </Box>
    </Grid>
  );
}

export default Pool;
