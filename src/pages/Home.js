import { Grid, Button, Stack, Box, Typography, Slide } from '@mui/material';

import '../static/css/home.css'
import MediLogo from '../static/img/medical1.svg'

export default function Home() {
    return (
        <div className="home-cont">
            <Slide direction='up' in={true} timeout={1000}>
                <Grid container className='container align-items-center'>
                    <Grid item xs={5}>
                        <Stack spacing={2} justifyContent='center'>
                            <Typography
                                variant='h3' align='left'>
                                Accurate results guaranteed <br /> on x-ray scans
                            </Typography>
                            <Typography align='left'>
                                Our APIs are designed to scale and are available on request by client applications.
                                Smart Afya API can be used to predict Malaria, Pneumonia and Covid19.
                                All you need to do is send an image to our service.
                            </Typography>
                            <Box display='flex'>
                                <Button
                                    variant="contained"
                                    color='success'
                                    disableElevation={true}>
                                    Live Demo
                                </Button>
                                <Button
                                    sx={{
                                        marginLeft: '30px',
                                        ':hover': {
                                            color: "#fff"
                                        }
                                    }}
                                    variant="contained"
                                    href="/applications"
                                    disableElevation={true}>
                                    Get Started
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={7}>
                        <img className='fill-height'
                            src={MediLogo} alt="Medi Logo" />
                    </Grid>
                </Grid>
            </Slide>
        </div>
    )
}