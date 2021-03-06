import { useState } from 'react';
import { Toolbar, IconButton, Drawer, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

import smartAfyaLogo from './NavLogo'
import getMenuButtons from './MenuOptions';
import DisplayUser from './user/DisplayUser';
import headersData from './HeaderData';

const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
        return (
            <NavLink className="ripple nav-link" underline="none"
                {...{
                    to: href,
                    key: label,
                    color: "inherit",
                }}
            >
                <MenuItem>{label}</MenuItem>
            </NavLink>
        );
    });
};

const displayDesktop = () => {
    return (
        <Toolbar className='toolbar container'>
            {smartAfyaLogo}
            <div className="menu-btn">{getMenuButtons()}</div>
            <DisplayUser />
        </Toolbar>
    );
};

const DisplayMobile = () => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });
    const { mobileView, drawerOpen } = state;

    const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
        <Toolbar>
            <IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,
                }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                {...{
                    anchor: "left",
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                }}
            >
                <div className="drawerContainer">{getDrawerChoices()}</div>
            </Drawer>
            <div>{smartAfyaLogo}</div>
        </Toolbar>
    );
}


export {
    displayDesktop,
    DisplayMobile
}