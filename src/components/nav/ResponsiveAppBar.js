import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Link, Grid,
    AppBar, Box,
    Toolbar, IconButton,
    Typography, Menu,
    Container, MenuItem, Fade
} from '@mui/material'

import NavUser from './NavUser';

import '../../static/css/nav.css';
require("@fontsource/roboto");

const pages = ['Home', 'APIs', 'Pricing', 'Contact Us'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toolbarStyle = {
        minHeight: '50px',
    };

    return (
        <div>
            <AppBar position="fixed"
                elevation={1}
                color='transparent'
                className="app-bar"
                style={{ backgroundImage: 'linear-gradient(to right, #fff, #E2F1D5)' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters
                        className='container'
                        style={toolbarStyle}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <Link href='/' underline='none' className='nav-link text-black'>
                                Smart Afya
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="default"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            Smart Afya
                        </Typography>

                        <Box sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex',
                                marginRight: '100px'
                            }
                        }}
                            justifyContent="flex-end">
                            <Link href='/'
                                className='ripple nav-link text-black'
                                underline='none'>Home</Link>
                            <Link href='/docs'
                                className='ripple nav-link text-black'
                                underline='none'>
                                Documentation</Link>
                            <Link href='/applications' className='ripple nav-link text-black' underline='none'>Applications</Link>
                            <Link href='/contact' className='ripple nav-link text-black' underline='none'>Contact Us</Link>
                        </Box>

                            <Grid
                                xs={12} sm={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    flexDirection: "row"
                                }}>
                                <NavUser />
                            </Grid>

                    </Toolbar>
                </Container>
            </AppBar >
            <Toolbar />
        </div >
    );
};
export default ResponsiveAppBar;
