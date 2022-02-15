import * as React from 'react';
import { Button, TextField, Checkbox, Link, Box, Grid, Typography, Container } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { logInWithEmailAndPassword, auth } from '../../authentication/firebase'

const theme = createTheme();

export default function Login() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        logInWithEmailAndPassword(data.get('email'), data.get('password')).then(() => {
            navigate("/applications")
        })
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Grid className="container" justifyContent="center"
            sx={{
                marginTop: 4,
                padding: 2,
                marginBottom: 4
            }}
        >
            <Typography sx={{ alignSelf: "flex-start" }} variant="h4" align='left'>
                Log in.
            </Typography>
            <Grid xs={12} sm={4}
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
            </Grid>
        </Grid>
    );
}