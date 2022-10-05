import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';

export default function PGMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'white', fontSize: 15, px: '20px' }}
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
        <Link smooth to="/#pjs+" style={{ textDecoration: 'none', color: 'black' }}>
          <MenuItem onClick={handleClose}>
            Polkadot js Plus extension
          </MenuItem>
        </Link>
        <Link smooth to="/#pg" style={{ textDecoration: 'none' , color: 'black' }}>
          <MenuItem onClick={handleClose}>
            PolkaGate extension
          </MenuItem>
        </Link>
      </Menu>

      <Link smooth to="/#team">
        <Button
          sx={{ color: 'white', fontSize: 15 }}
        >
          Team
        </Button>
      </Link>

      <Link smooth to="/#contacts">
        <Button
          sx={{ color: 'white', fontSize: 15 }}
        >
          Contacts
        </Button>
      </Link>
    </>
  );
}
