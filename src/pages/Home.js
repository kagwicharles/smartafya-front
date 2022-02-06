import { Grid, Button, Stack, Box, Typography, Slide } from '@mui/material';

import '../static/css/home.css'
import MediLogo from '../static/img/medical1.svg'
import ImageBlob from '../static/img/blob.svg'
import RightBlob from '../static/img/blob2.svg'

export default function Home() {
    return (
        <div className='fill-height'>
            <Slide direction='up' in='true' timeout={1000}>
                <Grid container className=' container align-items-center'>
                    <Grid item xs={5} size='md'>
                        <Stack spacing={2} className='fill-heght' justifyContent='center'
                            style={{
                                backgroundImage: `url(${ImageBlob})`,
                                backgroundPosition: 'left top',
                                backgroundRepeat: 'no-repeat',
                            }}>
                            <Typography variant='h4' align='left'>
                                Accurate results guaranteed <br /> on x-ray scans
                            </Typography>
                            <Typography align='left'>
                                Our APIs are designed to scale and are available on request by client applications.
                                Smart Afya API can be used to predict Malaria, Pneumonia and Covid19 from chest x-rays.
                                All you need to do is send an x-ray image to our service.
                            </Typography>
                            <Box display='flex'>
                                <Button variant="contained" color='success'>
                                    Live Demo
                                </Button>
                                <Button style={{ marginLeft: '30px' }} variant="contained">
                                    Get Started
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={7} size='md'
                        style={{
                            backgroundImage: `url(${RightBlob})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                        <img className='fill-height medi-img'
                            src={MediLogo} alt="Medi Logo" />
                    </Grid>
                </Grid>
            </Slide>
        </div>
    )
}