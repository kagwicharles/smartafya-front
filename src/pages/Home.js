import { Grid, Button, Stack, Box, Typography } from '@mui/material';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../static/css/home.css'


export default function Home() {
    return (
        <div className='home-bg'>
            <MDBContainer fluid className='home-cont container'>
                <MDBRow className='align-items-center row-cont home-cont'>
                    <MDBCol size='md'>
                        <Stack spacing={2}>
                            <Typography variant='h4' align='left'>
                                Accurate results guaranteed <br /> on x-ray scans
                            </Typography>
                            <Typography align='left' sx={{ width: '50%' }}>
                                Our APIs are designed to scale and are available on request by client applications.
                                Smart Afya API can be used to predict Malaria, Pneumonia and Covid19 from chest x-rays.
                                All you need to do is send an x-ray image to our service and it does the work for you.
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
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}