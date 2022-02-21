import { Box, Button, Grow, Slide } from "@mui/material"
import AccountPopover from "../auth/AccountPopover"

const LoggedOut = () => {
    return (
        <Box>
            <Button
                variant='contained'
                color='success'
                href="/login"
                className='m-1'
                sx={{
                    textTransform: "none",
                    ':hover': {
                        color: '#fff',
                    }
                }}
                disableElevation={true}
            >
                Login</Button>
            <Button
                variant='outlined'
                className='m-1'
                color="inherit"
                href="/register"
                disableElevation={true} sx={{
                    textTransform: "none",
                    ':hover': {
                        color: "white"
                    }
                }}>
                Sign Up</Button>
        </Box>
    )
}

const LoggedIn = (props) => {
    return (
        <AccountPopover />
    )
}

export {
    LoggedOut, LoggedIn
}
