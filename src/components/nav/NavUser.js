import { Box, Button, Grow, Slide } from "@mui/material"
import { useUserAuth } from "../../authentication/AuthProvider";
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
                    ':hover': {
                        color: '#fff',
                    }
                }}
                disableElevation={true}
            >
                Login</Button>
            <Button
                variant='outlined'
                color='secondary'
                className='m-1'
                href="/register">
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
