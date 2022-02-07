import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material'
import Ripple from 'react-ripples'
import { useLocation } from "react-router-dom";


import '../static/css/nav.css'

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
                style={{ backgroundImage: 'linear-gradient(to right, #fff, #E2F1D5)' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters className='container' style={toolbarStyle}>
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
                            <Link href='/docs' className='ripple nav-link text-black' underline='none'>Documentation</Link>
                            <Link href='/applications' className='ripple nav-link text-black' underline='none'>Applications</Link>
                            <Link href='/contact' className='ripple nav-link text-black' underline='none'>Contact Us</Link>
                        </Box>

                        <Box
                            sx={{
                                flexFlow: 1,
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                            <Button variant='contained' color='success' className='m-1'>Login</Button>
                            <Button variant='outlined' color='secondary' className='m-1'>Sign Up</Button>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar >
            <Toolbar />
        </div >
    );
};
export default ResponsiveAppBar;
