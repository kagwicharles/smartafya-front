import { Link } from 'react-router-dom';

import { Stack, Box } from '@mui/material';

import AccountPopover from './AccountPopOver';

export default function HomeNavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/home">Smart Afya</a>
                <div className="collapse navbar-collapse menu" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/apis" className="nav-link">APIs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link >
                        </li>
                    </ul>
                </div>
                <Box sx={{ flexGrow: 1 }} />
                <Stack direction="row" alignItems="center">
                    <AccountPopover />
                </Stack>
            </div>
        </nav>
    );
}