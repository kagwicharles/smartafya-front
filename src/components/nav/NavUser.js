import { Box, Button, Grow, Slide } from "@mui/material"
import { useUserAuth } from "../../authentication/AuthProvider";
import AccountPopover from "../auth/AccountPopover"

function LoggedOut() {
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

function LoggedIn(props) {
    return (
        <AccountPopover />
    )
}

export default function NavUser() {

    const { user } = useUserAuth();
    let isLoggedIn = false

    if (user) {
        isLoggedIn = true
    }

    try {
        user.email.charAt(0).toUpperCase()
    } catch (err) {
        console.log(err)
    }


    return (
        <div>
            {user ?
                <LoggedIn isLoggedIn={isLoggedIn} /> :
                <LoggedOut isLoggedIn={isLoggedIn} />
            }
        </div>
    )
}