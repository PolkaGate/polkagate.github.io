
import { Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useCallback } from "react";
import { Apps as AppsIcon, AccountBalanceWallet as WalletIcon, Hub as HubIcon, MenuBook as MenuBookIcon, Shield as ShieldIcon } from '@mui/icons-material';
import { MAX_WIDTH } from "./util/constants";
import ImageSlider from "./components/Slider";

const snapImages = [
  "images/snap/1.png",
  "images/snap/2.png",
  "images/snap/3.png",
];

const snapBenefits = [
  {
    icon: WalletIcon,
    title: 'Familiar wallet flow',
    text: 'Use MetaMask to access Polkadot ecosystem assets without learning a completely new wallet pattern.',
  },
  {
    icon: HubIcon,
    title: 'Direct app access',
    text: 'Move from Snap setup into PolkaGate Apps and continue with the same connected wallet flow.',
  },
  {
    icon: ShieldIcon,
    title: 'Simpler staking path',
    text: 'Follow a cleaner route for staking-related actions across supported Polkadot ecosystem networks.',
  },
];

const Snap = () => {
  const theme = useTheme();

  const handleDownloadSnap = useCallback(() => {
    window.open("https://snaps.metamask.io/snap/npm/polkagate/snap/", "_blank", "noopener,noreferrer");
  }, []);

  const handleVisitApps = useCallback(() => {
    window.open("https://apps.polkagate.xyz", "_blank", "noopener,noreferrer");
  }, []);

  const primaryButtonStyle = {
    borderRadius: '999px',
    minHeight: { xs: '52px', md: '56px' },
    backgroundColor: '#f6efe7',
    color: '#1b1917',
    width: '100%',
    minWidth: 'max-content',
    border: '1px solid rgba(27,25,23,0.1)',
    boxShadow: 'none',
    '& .MuiButton-startIcon': {
      color: '#1b1917',
    },
    '& .MuiSvgIcon-root': {
      color: '#1b1917',
    },
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? '#fbf5ee' : '#f1dfeb',
      borderColor: theme.palette.mode === 'light' ? 'rgba(231,49,136,0.28)' : 'rgba(231,49,136,0.5)',
      color: '#1b1917',
      boxShadow: 'none',
    },
    '&:hover .MuiButton-startIcon': {
      color: '#1b1917',
    },
    '&:hover .MuiSvgIcon-root': {
      color: '#1b1917',
    },
  };

  const secondaryButtonStyle = {
    ...primaryButtonStyle,
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    '& .MuiButton-startIcon': {
      color: theme.palette.text.primary,
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.text.primary,
    },
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? 'rgba(27,25,23,0.04)' : 'rgba(255,255,255,0.06)',
      borderColor: theme.palette.mode === 'light' ? 'rgba(27,25,23,0.16)' : 'rgba(255,255,255,0.14)',
      color: theme.palette.text.primary,
    },
    '&:hover .MuiButton-startIcon': {
      color: theme.palette.text.primary,
    },
    '&:hover .MuiSvgIcon-root': {
      color: theme.palette.text.primary,
    },
  };

  return (
    <Grid id='snap' container justifyContent="center" justifyItems='center' sx={{ bgcolor: theme.palette.section.light, py: { xs: 7, md: 10 }, px: { xs: 2, md: 4 }, position: 'relative' }}>
      <Grid container spacing={2} justifyContent="center" justifyItems='center' sx={{ maxWidth: MAX_WIDTH, position: 'inherit' }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 32,
            px: 1.75,
            py: 0.625,
            mb: 2.25,
            borderRadius: '999px',
            border: `1px solid ${theme.palette.divider}`,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(231,49,136,0.06)' : 'rgba(231,49,136,0.12)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          MetaMask Integration
        </Box>
        <Typography variant="h1" sx={{ display: 'flex', justifyContent: 'center', fontWeight: 700, fontSize: { xs: '32px', md: '48px' }, lineHeight: 0.96, letterSpacing: '-0.03em', pb: '10px', width: '100%' }}>
          MetaMask Snap by PolkaGate
        </Typography>
        <Typography sx={{ color: theme.palette.text.secondary, display: 'flex', justifyContent: 'center', fontWeight: 400, fontSize: { xs: '15px', md: '17px' }, lineHeight: 1.7, pb: '26px', px: '10px', textAlign: 'center', width: '100%', maxWidth: 760 }}>
          Use MetaMask to connect with PolkaGate Apps, access Polkadot ecosystem assets, and move through staking flows with a wallet experience that already feels familiar.
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: { xs: 2, md: 3 } }}>
          {snapBenefits.map(({ icon: Icon, title, text }) => (
            <Grid item xs={12} md={4} key={title}>
              <Box
                sx={{
                  height: '100%',
                  px: 2.5,
                  py: 2.25,
                  borderRadius: '24px',
                  backgroundColor: theme.palette.mode === 'light' ? '#fffaf2' : '#18181b',
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Icon sx={{ color: theme.palette.primary.main, fontSize: 24, mb: 1.25 }} />
                <Typography sx={{ color: theme.palette.text.primary, fontWeight: 700, fontSize: '17px', mb: 0.75 }}>
                  {title}
                </Typography>
                <Typography sx={{ color: theme.palette.text.secondary, fontSize: '14px', lineHeight: 1.65 }}>
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center" pt={{ xs: 1, md: 2 }}>
          <ImageSlider
            images={snapImages}
            altPrefix="snap-slide"
            aspectRatio="16 / 9"
            transitionVariant="fade"
          />
        </Grid>
        <Grid container item justifyContent='center' spacing={1.5} sx={{ mt: '20px' }}>
          <Grid item xs={11} md={4}>
            <Button
              sx={primaryButtonStyle}
              variant="contained"
              style={{ width: '100%', minWidth: 'max-content' }}
              startIcon={
                <Box
                  alt="chrome"
                  component='img'
                  src="images/snap/browsers.svg"
                  sx={{ width: 80, height: 20 }}
                />
              }
              onClick={handleDownloadSnap}
            >
              Download PolkaGate Snap
            </Button>
          </Grid>
          <Grid item xs={11} md={4}>
            <Button
              sx={secondaryButtonStyle}
              variant="outlined"
              style={{ width: '100%', minWidth: 'max-content' }}
              startIcon={
                <AppsIcon
                  sx={{ width: 20, height: 20 }}
                />
              }
              onClick={handleVisitApps}
            >
              Visit Apps
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent='center' sx={{ fontSize: '20px', fontWeight: 800, px: { xs: '10px', md: 'auto' }, pt: { xs: '14px', md: '26px' } }}>
          <Button
            component="a"
            href="https://docs.polkagate.xyz/polkagate/metamask-snap-user-guide/installing-polkagate-snap"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<MenuBookIcon />}
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: '15px',
              textTransform: 'none',
              px: 0,
              minWidth: 0,
              borderRadius: 0,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            Read the PolkaGate Snap installation guide
          </Button>
        </Grid>
      </Grid >
    </Grid >
  );
}

export default Snap;
