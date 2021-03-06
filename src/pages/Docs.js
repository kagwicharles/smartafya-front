import { Grid, Typography, Box } from '@mui/material'
import { Icon } from '@iconify/react'
import { Link, Fade } from '@mui/material'

import '../static/css/docs.css'

export default function Docs() {
    return (
        <div className='container font-face-roboto'>
            <Grid container className="flex-section">
                <Grid
                    item
                    xs={4}
                    className={"flex-col-scroll pt-2"}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Icon width='40' height='40' color="#353c47" icon="bi:stack" />
                        <Typography variant='h5'
                            className='title-content '
                            align='left'
                            sx={{ marginLeft: '20px' }}
                        >
                            Documentation
                        </Typography>
                    </Box>

                    <p style={{ textAlign: 'left', marginTop: '40px' }}>API Version: 1.0.0</p>

                    <Box className='left-column-cont scroll-effect' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>

                        <Typography variant='h6' align='left'>
                            <Link href='#get-started' underline='hover'>Get Started</Link>
                        </Typography>
                        <Typography variant='h6' align='left' className='mt-4'>
                            <Link href='#predict-xray' underline='hover'>Predict X-ray</Link>
                        </Typography>
                        <Typography variant='h6' align='left' className='mt-4'>
                            <Link href='#error' underline='hover'>Errors</Link>
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={8}
                    className={"flex-col-scroll"}
                >

                    <Box className='scroll-effect pb-2' sx={{ width: '60%' }} style={{ paddingTop: '40px' }}>

                        <Fade in={true} timeout={1000}>
                            <Box>
                                <Typography id='get-started' variant='h4' align='left' className='title-content'>
                                    Get Started
                                </Typography>
                                <p style={{ textAlign: 'left', paddingTop: '20px' }}>
                                    The Smart Afya API provides programmatic access to predict
                                    Chest x-ray scans. Depending on the request you make, the api
                                    predicts one of the following cases: Malaria, Pneumonia and Covid19.
                                </p>

                                <p style={{ textAlign: 'left', marginTop: '20px' }}>To use this API, you need an API key. Get an API key <Link href='/applications' underline='hover'>here</Link>.</p>
                            </Box>
                        </Fade>

                        <Fade in={true} timeout={1000}>
                            <Box>
                                <Typography id='predict-xray' variant='h4' align='left' className='title-content'
                                    style={{ marginTop: '40px' }}
                                >
                                    Predict X-ray/Microscopic cells
                                </Typography>

                                <p style={{ textAlign: 'left', marginTop: '20px' }}>
                                    To predict an x-ray/microscopic cell image make a POST call to the following url :
                                    http://api.smartafya.com/predict
                                </p>

                                <Typography align='left' color='primary'>QUERY PARAMETERS</Typography>

                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Field</th>
                                            <th>Type</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>secret_key</td>
                                            <td>String</td>
                                            <td>Your API key</td>
                                        </tr>
                                        <tr>
                                            <td>disease</td>
                                            <td>String</td>
                                            <td>"malaria", "pneumonia" or "covid19"</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </Box>
                        </Fade>

                        <Fade in={true} timeout={1000}>
                            <Box>
                                <Typography id='error' variant='h4' align='left' className='title-content'
                                    style={{ marginTop: '40px' }}
                                >
                                    Errors
                                </Typography>

                                <p style={{ textAlign: 'left', marginTop: '20px' }}>Smart Afya can produce the following errors.</p>

                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Error code</th>
                                            <th>Meaning</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>X000</td>
                                            <td>Some parameters are missing</td>
                                        </tr>
                                        <tr>
                                            <td>X001</td>
                                            <td>Security key is invalid</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </Box>
                        </Fade>
                    </Box>
                </Grid>
            </Grid >
        </div >
    )
}