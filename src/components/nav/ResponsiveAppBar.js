import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Grid,
    AppBar, Box,
    Toolbar, IconButton,
    Typography, Menu,
    Container, MenuItem, Fade
} from '@mui/material'
import { NavLink, NavNavLink } from 'react-router-dom'

import { LoggedIn, LoggedOut } from './NavUser';
import { useUserAuth } from "../../authentication/AuthProvider";

import '../../static/css/nav.css';
require("@fontsource/roboto");

const pages = ['Home', 'APIs', 'Pricing', 'Contact Us'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { user } = useUserAuth();

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
        minHeight: '55px',
    };

    return (
        <div>
            <AppBar position="fixed" sx={{ fontFamily: "sans-serif" }}
                elevation={2}
                color='transparent'
            >
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
                            <NavLink to='/' underline='none' className='nav-link text-black'>
                                Smart Afya
                            </NavLink>
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
                        <Typography className="font-face-robotoB"
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            Smart Afya
                        </Typography>

                        <Fade in={true} timeout={1}>
                            <Box id="btnContainer"
                                sx={{
                                    flexGrow: 1,
                                    display: {
                                        xs: 'none',
                                        md: 'flex',
                                        marginRight: '100px',
                                    }
                                }}
                                justifyContent="flex-end">
                                <NavLink to='/'
                                    className="ripple nav-link text-secondary"
                                    underline='none'>Home</NavLink>
                                <NavLink to='/docs'
                                    className='ripple nav-link text-secondary'
                                    underline='none'>
                                    Documentation</NavLink>
                                <NavLink to='/applications'
                                    className='ripple nav-link text-secondary'
                                    underline='none'>Applications</NavLink>
                                <NavLink to='/contact'
                                    className='ripple nav-link text-secondary'
                                    underline='none'>Contact Us</NavLink>
                            </Box>
                        </Fade>
                        <Grid
                            item xs={12} sm={2}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "row"
                            }}>
                            {
                                !user ?
                                    <Fade in={true} timeout={10}>
                                        <div>
                                            <LoggedOut />
                                        </div>
                                    </Fade>
                                    :
                                    <Fade in={true} timeout={3000}>
                                        <div>
                                            <LoggedIn />
                                        </div>
                                    </Fade>
                            }
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar >
            <Toolbar />
        </div >
    );
};
export default ResponsiveAppBar;
