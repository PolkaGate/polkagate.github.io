import * as React from 'react';
import { Grid, Button, IconButton, Divider, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';

export default function PGMenu() {
  const theme = useTheme();
  const [productAnchorEl, setProductAnchorEl] = React.useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);
  const productOpen = Boolean(productAnchorEl);
  const mobileOpen = Boolean(mobileAnchorEl);

  const handleProductClick = (event) => {
    setProductAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClick = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setProductAnchorEl(null);
  };

  const handleMobileClose = () => {
    setMobileAnchorEl(null);
  };

  const gotoApps = () => {
    handleClose();
    handleMobileClose();
    window.open("https://apps.polkagate.xyz", "_blank", "noopener,noreferrer");
  };

  const gotoDocs = () => {
    handleClose();
    handleMobileClose();
    window.open("https://docs.polkagate.xyz", "_blank", "noopener,noreferrer");
  };

  const closeAllMenus = () => {
    handleClose();
    handleMobileClose();
  };

  const menuStyle = {
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
    }, fontSize: '14px', fontWeight: 300, p: 'auto', color: theme.palette.text.secondary, letterSpacing: '0.02em', textTransform: 'none', transition: 'color 150ms ease',
  };

  const subMenuStyle = { fontSize: '14px', color: theme.palette.text.primary };
  const mobileMenuItemStyle = {
    fontSize: '15px',
    minWidth: 220,
    py: 1.2,
    color: theme.palette.text.primary,
  };
  const mobileSubMenuItemStyle = {
    ...mobileMenuItemStyle,
    pl: 4,
    color: theme.palette.text.secondary,
    fontSize: '14px',
  };

  return (
    <Grid container item justifyContent='flex-end' sx={{ flexWrap: 'nowrap', width: '100%' }}>
      <Grid item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        <Button
          id="product-button"
          aria-controls={productOpen ? 'product-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={productOpen ? 'true' : undefined}
          onClick={handleProductClick}
          sx={menuStyle}
        >
          Products
        </Button>
        <Menu
          id="product-menu"
          anchorEl={productAnchorEl}
          open={productOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'product-button',
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
          onClick={gotoDocs}
          sx={menuStyle}
        >
          Docs
        </Button>
        <Link smooth to="/#team">
          <Button sx={menuStyle}>
            Team
          </Button>
        </Link>
        <Link smooth to="/#contacts">
          <Button sx={menuStyle}>
            Contacts
          </Button>
        </Link>
      </Grid>

      <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
        <IconButton
          aria-label="Open menu"
          aria-controls={mobileOpen ? 'mobile-menu' : undefined}
          aria-expanded={mobileOpen ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleMobileMenuClick}
          sx={{ color: theme.palette.text.primary }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="mobile-menu"
          anchorEl={mobileAnchorEl}
          open={mobileOpen}
          onClose={handleMobileClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              mt: 1,
              minWidth: 250,
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              color: theme.palette.text.primary,
            },
          }}
        >
          <MenuItem disabled sx={{ ...mobileMenuItemStyle, opacity: 0.7 }}>
            Products
          </MenuItem>
          <Link smooth to="/#pg" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={closeAllMenus} sx={mobileSubMenuItemStyle}>
              Browser extension/wallet
            </MenuItem>
          </Link>
          <Link smooth to="/#snap" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={closeAllMenus} sx={mobileSubMenuItemStyle}>
              MetaMask snap
            </MenuItem>
          </Link>
          <Link smooth to="/#pools" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={closeAllMenus} sx={mobileSubMenuItemStyle}>
              Staking pools
            </MenuItem>
          </Link>
          <MenuItem onClick={gotoApps} sx={mobileSubMenuItemStyle}>
            Apps
          </MenuItem>
          <Divider sx={{ borderColor: theme.palette.divider }} />
          <MenuItem onClick={gotoDocs} sx={mobileMenuItemStyle}>
            Docs
          </MenuItem>
          <Link smooth to="/#team" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={closeAllMenus} sx={mobileMenuItemStyle}>
              Team
            </MenuItem>
          </Link>
          <Link smooth to="/#contacts" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={closeAllMenus} sx={mobileMenuItemStyle}>
              Contacts
            </MenuItem>
          </Link>
        </Menu>
      </Box>
    </Grid>
  );
}
