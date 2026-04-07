
import { Avatar, Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useCallback } from "react";
import { Key as KeyIcon, Layers as LayersIcon, Shield as ShieldIcon } from "@mui/icons-material";
import ImageSlider from "./components/Slider";
import { MAX_WIDTH } from "./util/constants";

const extensionBenefits = [
  {
    icon: ShieldIcon,
    title: 'Non-custodial control',
    text: 'Keep your keys on your device while managing Polkadot ecosystem accounts yourself.',
  },
  {
    icon: LayersIcon,
    title: 'Polkadot + Kusama',
    text: 'Work across the core ecosystems from one extension interface built for day-to-day use.',
  },
  {
    icon: KeyIcon,
    title: 'Multi-account access',
    text: 'Create, import, and switch accounts without losing the flow between actions.',
  },
];

const Extension = () => {
  const theme = useTheme();

  const handleOpenChrome = useCallback(() => {
    window.open(
      "https://chrome.google.com/webstore/detail/polkagate/ginchbkmljhldofnbjabmeophlhdldgp",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  const handleOpenEdge = useCallback(() => {
    handleOpenChrome();
    // window.open(
    //   "https://microsoftedge.microsoft.com/addons/detail/polkagate-the-gateway-to/eakellaeidmgcpifaofebhpcjienkajp",
    //   "_blank"
    // );
  }, [handleOpenChrome]);

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

  return (
    <Grid id='pg' container justifyContent="center" sx={{ bgcolor: theme.palette.section.dark, py: { xs: 7, md: 10 }, px: { xs: 2, md: 4 }, position: 'relative' }}>
      <Grid id='pg' container justifyContent="center" justifyItems='center' sx={{ maxWidth: MAX_WIDTH, position: 'relative' }}>
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
          Browser Wallet
        </Box>
        <Typography variant='h2' color={theme.palette.text.primary} sx={{ display: 'flex', justifyContent: 'center', fontWeight: 700, fontSize: { xs: '32px', md: '48px' }, lineHeight: 0.96, letterSpacing: '-0.03em', py: '10px', width: '100%' }}>
          Browser Extension / Wallet
        </Typography>
        <Typography color={theme.palette.text.secondary} sx={{ display: 'flex', justifyContent: 'center', fontWeight: 400, fontSize: { xs: '15px', md: '17px' }, lineHeight: 1.7, px: '10px', textAlign: 'center', width: '100%', maxWidth: 780 }}>
          Manage Polkadot and Kusama ecosystem accounts from a non-custodial browser wallet built for staking, account access, and everyday ecosystem interactions.
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
          {extensionBenefits.map(({ icon: Icon, title, text }) => (
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
          <ImageSlider />
        </Grid>
        <Grid container item justifyContent='center' spacing={1.5} sx={{ mt: '20px' }}>
          <Grid item xs={11} md={3}>
            <Button
              sx={primaryButtonStyle}
              variant="contained"
              style={{ width: '100%', minWidth: 'max-content' }}
              startIcon={
                <Avatar
                  alt="chrome"
                  src="images/chrome.png"
                  sx={{ width: 20, height: 20 }}
                />
              }
              onClick={handleOpenChrome}
            >
              Download for Chrome
            </Button>
          </Grid>
          <Grid item xs={11} md={3}>
            <Button
              sx={primaryButtonStyle}
              variant="contained"
              style={{ width: '100%', minWidth: 'max-content' }}
              startIcon={
                <Avatar
                  alt="edge"
                  src="images/edge.png"
                  sx={{ width: 20, height: 20 }}
                />
              }
              onClick={handleOpenEdge}
            >
              Download for Edge
            </Button>
          </Grid>
          <Grid item xs={11} md={3}>
            <Button
              sx={primaryButtonStyle}
              variant="contained"
              style={{ width: '100%', minWidth: 'max-content' }}
              startIcon={
                <Avatar
                  alt="brave"
                  src="images/brave.png"
                  sx={{ width: 20, height: 20 }}
                />
              }
              onClick={handleOpenChrome}
            >
              Download for Brave
            </Button>
          </Grid>
        </Grid>
      </Grid >
    </Grid >
  );
}

export default Extension;
