import ContactBg from '../static/img/envelope.svg'

import { Button, TextField, Grid, Stack, Box, Typography } from "@mui/material"

export default function Contact() {

    return (
        <div className="container font-face-roboto">
            <Grid
                sx={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                <Grid item xs={8} className='fill-height p-4'
                    display='flex'
                    justifyContent='center'
                >
                    <img src={ContactBg} alt="contact us" />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h4"
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