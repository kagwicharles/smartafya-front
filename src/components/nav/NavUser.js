import { Box, Button, Grow, Slide } from "@mui/material"
import { useUserAuth } from "../../authentication/AuthProvider";
import AccountPopover from "../auth/AccountPopover"

export default function NavUser() {

    const { user } = useUserAuth();

    let userExists = false
    if (user && user != 'undefined') {
        userExists = true
    }

    try {
        user.email.charAt(0).toUpperCase()
    } catch (err) {
        console.log(err)
    }


    return (
        <div>
            {!user ?
                <Slide in={true} direction="left" timeout={1000}>
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
                </Slide> :
                <Grow in={userExists} timeout={2000}>
                    <div>
                        <AccountPopover />
                    </div>
                </Grow>
            }
        </div>
    )
}