import { useState } from 'react'
import { send } from 'emailjs-com'
import { Button, TextField, Grid, Grow, Stack } from "@mui/material"
import ContactBg from '../static/img/envelope.svg'
import CorrectBg from '../static/img/check.jpg'

import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from '../env/env'

export default function Contact() {

    const [isFormHidden, setFormVisibility] = useState(true)

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        subject: ''
    })

    const clearForm = () => {
        document.getElementById("contact-form").reset();
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        sendEmail()
    }

    const sendEmail = () => {
        setFormVisibility(false)
        send(EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            toSend, EMAILJS_USER_ID)
            .then((result) => {
                setTimeout(setFormVisibility(true), 8000)
                clearForm()
            }, (error) => {
                setTimeout(setFormVisibility(true), 3000)
            });
    };

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
                    <img
                        className={
                            isFormHidden ? "contact-form mt-4 d-flex flex-column mb-3 p-4" : "d-none"}
                        src={ContactBg} alt="contact us" />
                    <Stack className={
                        !isFormHidden ? "contact-form mt-4 d-flex flex-column mb-3 p-4" : "d-none"}
                    >
                        <h1>
                            Thank you for reaching us.</h1>

                        <img style={{ height: 200, width: 200 }}
                            src={CorrectBg} alt="contact us" />
                    </Stack>
                </Grid>
                <Grow in={true} timeout={1000}>
                    <Grid item xs={4}>
                        <h1
                            style={{ marginTop: '50px' }}
                            align="left">Get In Touch</h1>
                        <form id="contact-form"
                            className="contact-form mt-4 d-flex flex-column mb-3"
                            onSubmit={handleSubmit}>
                            <TextField
                                id="user_name"
                                name="user_name"
                                placeholder="Enter your name"
                                label="Name"
                                variant="outlined"
                                required
                                type="text"
                                fullWidth
                                inputProps={{
                                    maxLength: 30
                                }}
                                onChange={handleChange}
                            />

                            <br />

                            <TextField
                                id="subject"
                                name="subject"
                                label="Subject"
                                placeholder="Enter email subject"
                                variant="outlined"
                                required
                                type="text"
                                fullWidth
                                inputProps={{
                                    maxLength: 30
                                }}
                                onChange={handleChange}
                            />

                            <br />

                            <TextField
                                id="message"
                                name="message"
                                label="Message"
                                placeholder="Enter Message"
                                variant="outlined"
                                rows={4}
                                multiline
                                required
                                type="text"
                                fullWidth
                                inputProps={{
                                    maxLength: 300
                                }}
                                onChange={handleChange}
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
                </Grow>
            </Grid>
        </div>
    )
}