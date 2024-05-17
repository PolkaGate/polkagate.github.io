import * as React from 'react';
import {Grid, Button} from '@mui/material';
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
    window.open("https://support.polkadot.network/support/solutions/folders/65000157854");
  };

  return (
    <Grid container item justifyContent='flex-end' sx={{ flexWrap:'nowrap', width:'100%'}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleProductClick}
        sx={{ fontSize: 15, p: 'auto', color: '#e73188' }}
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
          <MenuItem onClick={handleClose}>
            Browser extension/wallet
          </MenuItem>
        </Link>
        <Link smooth to="/#snap" style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleClose}>
            MetaMask snap
          </MenuItem>
        </Link>
        <Link smooth to="/#pools" style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleClose}>
            Staking pools
          </MenuItem>
        </Link>
        <MenuItem onClick={gotoApps} sx={{ color: "blue" }}>
          Apps
        </MenuItem>
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={gotoDocs}
        sx={{ fontSize: 15, p: 'auto', color: '#e73188' }}
      >
      Docs
      </Button>
      <Link smooth to="/#team">
        <Button
          sx={{ fontSize: 15, color: '#e73188' }}
        >
          Team
        </Button>
      </Link>
      <Link smooth to="/#contacts">
        <Button
          sx={{ fontSize: 15, color: '#e73188' }}
        >
          Contacts
        </Button>
      </Link>
    </Grid>
  );
}
