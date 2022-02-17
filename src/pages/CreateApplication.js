import { Box, TextField, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

import { generateKey } from "../utils/util"
import { addApp } from "../db/firebaseDb"
import { useUserAuth } from "../authentication/AuthProvider";

import "../static/css/create_application.css"

export default function CreateApplication(props) {

    const { user } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);

        const key = generateKey()
        addApp(key, user.email, data.get('app_name'), data.get('app_desc'))
        navigate("/applications")
        console.log("Generated key: " + key)
    }

    return (
        <div className="container d-flex justify-content-center app-cont">
            <Box className="fill-height"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: "40%"
                }}>
                <Typography variant="h5" alignSelf="start">
                    Create an application</Typography>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        name="app_name"
                        placeholder="Enter application name"
                        label="Application"
                        variant="outlined"
                        required
                        type="text"
                        fullWidth
                    />

                    <br />
                    <br />

                    <TextField
                        id="outlined-basic"
                        name="app_desc"
                        label="Description"
                        placeholder="Application description"
                        variant="outlined"
                        rows={4}
                        type="email"
                        fullWidth
                        multiline
                    />
                    <br />
                    <br />

                    <Box sx={{ display: 'flex' }}>
                        <Button variant="contained"
                            type="submit"
                            disableElevation={true}>
                            Save</Button>
                        <Button variant="contained"
                            sx={{ marginLeft: "10px" }}
                            color="inherit"
                            href="/applications"
                            disableElevation={true}>
                            cancel</Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}