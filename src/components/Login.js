import * as React from 'react';
import { Button, TextField, Checkbox, Link, Box, Grid, Typography, Container } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Icon } from '@iconify/react'

import { logInWithEmailAndPassword } from '../authentication/firebase'

const theme = createTheme();

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container maxWidth="xs" justify-xs-flex-end>
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 3,
                    padding: 2
                }}
            >
                <Icon height='40' width='40' color='#1976D2'
                    icon="simple-line-icons:login"
                    style={{ marginBottom: "20px" }} />
                <Typography sx={{ alignSelf: "flex-start" }} component="h1" variant="h5" align='left'>
                    Log in.
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        mt: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        variant='standard'
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={logInWithEmailAndPassword}
                        disableElevation={true}
                    >
                        Log in
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item style={{ marginLeft: '8px' }}>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}