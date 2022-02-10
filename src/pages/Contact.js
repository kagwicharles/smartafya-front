import ContactBg from '../static/img/contact.jpg'

import { Button, TextField, Grid, Fade, Box, Typography } from "@mui/material"
import TypeWriterEffect from 'react-typewriter-effect'

export default function Contact() {

    return (
        <div className="container">
            <Grid container>
                <Grid item xs={8} sm='md'>
                    <Fade in={true} timeout={1000}>
                        <Box className='fill-height p-4'
                            display='flex'
                            justifyContent='center'
                            style={{
                                backgroundImage: `url(${ContactBg})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain',
                            }}>

                            <TypeWriterEffect
                                textStyle={{
                                    color: '#3F3D56',
                                    fontWeight: 500,
                                    fontSize: '1.5em',
                                }}
                                startDelay={2000}
                                cursorColor="#3F3D56"
                                multiText={[
                                    'Hello Buddies,',
                                    'We love hearing from you...',
                                ]}
                                loop={true}
                                nextTextDelay={2000}
                                typeSpeed={50}
                            />
                        </Box>
                    </Fade>
                </Grid>
                <Grid item xs={4} sm='md'>
                    <Typography variant="h5"
                        style={{ marginTop: '50px' }}
                        align="left">Get In Touch</Typography>
                    <form className="contact-form mt-4 d-flex flex-column mb-3">
                        <TextField
                            id="outlined-basic"
                            placeholder="Enter your name"
                            label="Name"
                            variant="outlined"
                            required
                            type="text"
                            fullWidth
                        />

                        <br />

                        <TextField
                            id="outlined-basic"
                            label="Email"
                            placeholder="Enter email address"
                            variant="outlined"
                            required
                            type="email"
                            fullWidth
                        />

                        <br />

                        <TextField
                            id="full-width-text-field"
                            label="Message"
                            placeholder="Enter Message"
                            variant="outlined"
                            rows={4}
                            multiline
                            required
                            type="text"
                            fullWidth
                        />

                        <br />

                        <Button
                            type="submit"
                            variant="contained"
                            disableElevation={true}>
                            Send Message
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}