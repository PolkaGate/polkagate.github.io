
import { Avatar, Grid, Typography, Button } from "@mui/material";
import { useCallback } from "react";
import ImageSlider from "./components/Slider";
import { MAX_WIDTH } from "./util/constants";


const Extension = () => {
  const handleOpenFirefox = useCallback(() => {
    window.open(
      "https://addons.mozilla.org/en-US/firefox/addon/polkagate/",
      "_blank"
    );
  }, []);

  const handleOpenChrome = useCallback(() => {
    window.open(
      "https://chrome.google.com/webstore/detail/polkagate/ginchbkmljhldofnbjabmeophlhdldgp",
      "_blank"
    );
  }, []);

  const handleOpenEdge = useCallback(() => {
    handleOpenChrome();
    // window.open(
    //   "https://microsoftedge.microsoft.com/addons/detail/polkagate-the-gateway-to/eakellaeidmgcpifaofebhpcjienkajp",
    //   "_blank"
    // );
  }, [handleOpenChrome]);

  const buttonStyle = {
    borderRadius:'16px',
    height:{md:'56px'},
    backgroundColor: '#f5f5f3',
    color: '#0f0f0f', // set text color
    width: '100%',
    minWidth: 'max-content',
    '&:hover': {
      backgroundColor: '#e0e0e0', // optional hover effect
    },
  }

  return (
    <Grid id='pg' container justifyContent="center" sx={{ bgcolor: '#0f0f0f', py: "60px", position: 'relative' }}    >
      <Grid id='pg' container justifyContent="center" justifyItems='center' sx={{ maxWidth: MAX_WIDTH, position: 'relative' }}    >
        <Typography variant='h2' color="#fff" sx={{ display: 'flex', justifyContent: 'center', fontWeight: 600, fontSize: { xs: '20px', md: '30px' }, py: '10px', width: '100%' }}>
          Browser Extension / Wallet
        </Typography>
        <Typography color="#ffffffb0" sx={{ display: 'flex', justifyContent: 'center', fontWeight: 400, fontSize: { xs: '14px', md: '16px' }, px: '10px', textAlign: 'center', width: '100%' }}>
          Unlock the full potential of the Polkadot ecosystem securely right in your browser.
        </Typography>
        <Grid container justifyContent="center" pt={{ xs: 1, md: 1, opacity:'0.8'}}>
          <ImageSlider />
        </Grid>
        <Grid item md={12} mx={{ sx: 2, md: 17 }}>
          <Typography color="#fff" sx={{ fontWeight: 300, fontSize: '14px', pt: 4, textAlign: { md: "left", xs: 'justify' }, px: { xs: '10px', md: 'auto' } }}>
            PolkaGate browser extension/wallet is a non-custodial wallet that allows you to securely store, manage, and interact with your Polkadot and Kusama assets. It offers a user-friendly interface and easy access to the Polkadot and Kusama ecosystems, allowing you to participate in staking, crowdloans, and other activities.
            With PolkaGate, you are in complete control of your assets, as your private keys are stored securely on your device, and you can easily manage multiple accounts and switch between them with ease.
            PolkaGate is an essential tool for anyone looking to participate in the growing Polkadot and Kusama ecosystems.
          </Typography>
        </Grid>
        <Grid container item justifyContent='center' spacing={1} sx={{ mt: '20px' }}>
          <Grid item xs={11} md={3}>
            <Button
              sx={buttonStyle}
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
              sx={buttonStyle}
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
              sx={buttonStyle}
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
          {/* <Grid item xs={11} md={2.5}>
          <Button
            color="secondary"
            variant="contained"
            style={{ width: '100%', minWidth: 'max-content' }}
            startIcon={
              <Avatar
                alt="plus"
                src="images/firefox.png"
                sx={{ width: 20, height: 20 }}
              />
            }
            onClick={handleOpenFirefox}
          >
            Download for Firefox (old version)
          </Button>
        </Grid> */}
        </Grid>
      </Grid >
    </Grid >
  );
}

export default Extension;
