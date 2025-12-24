import * as React from 'react';
import { Grid, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';

export default function PGMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleProductClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const gotoApps = () => {
    window.open("https://apps.polkagate.xyz");
  };

  const gotoDocs = () => {
    window.open("https://docs.polkagate.xyz");
  };

  const menuStyle = {
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: 'transparent',
    }, fontSize: '14px', fontWeight: 300, p: 'auto', color: 'rgba(255,255,255,0.72)', letterSpacing: '0.02em', textTransform: 'none', transition: 'color 150ms ease',
  };

  const subMenuStyle = { fontSize: '14px', color: "#1b1917"  };

  return (
    <Grid container item justifyContent='flex-end' sx={{ flexWrap: 'nowrap', width: '100%' }}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleProductClick}
        sx={menuStyle}
      >
        Products
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link smooth to="/#pg" style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleClose} sx={subMenuStyle}>
            Browser extension/wallet
          </MenuItem>
        </Link>
        <Link smooth to="/#snap" style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleClose} sx={subMenuStyle}>
            MetaMask snap
          </MenuItem>
        </Link>
        <Link smooth to="/#pools" style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleClose} sx={subMenuStyle}>
            Staking pools
          </MenuItem>
        </Link>
        <MenuItem onClick={gotoApps} sx={subMenuStyle}>
          Apps
        </MenuItem>
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={gotoDocs}
        sx={menuStyle}
      >
        Docs
      </Button>
      <Link smooth to="/#team">
        <Button
          sx={menuStyle}
        >
          Team
        </Button>
      </Link>
      <Link smooth to="/#contacts">
        <Button
          sx={menuStyle}
        >
          Contacts
        </Button>
      </Link>
    </Grid>
  );
}
