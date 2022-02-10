import { Box, TextField, Button, Typography } from "@mui/material"

export default function CreateApplication() {
    return (
        <div className="container d-flex justify-content-center">
            <Box className="fill-height"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: "40%"
                }}>
                <Typography variant="h5" alignSelf="start">
                    Create an application</Typography>
                <form className="mt-4">
                    <TextField
                        id="outlined-basic"
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