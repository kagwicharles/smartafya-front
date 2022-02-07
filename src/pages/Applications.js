import { Box, Typography, Button } from "@mui/material"
import { Icon } from '@iconify/react'

import '../static/css/applications.css'

export default function Apis() {

    return (
        <div className="container fill-height">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    alignContent: 'center'
                }}>
                <Icon width='40' height='40' color="#353c47" icon="carbon:application" />
                <Typography style={{ marginLeft: '10px' }} variant='h5' >
                    My Applications
                </Typography>
                <Button sx={{
                    marginLeft: '10px',
                    ':hover': {
                        color: '#fff',
                    }
                }}
                    variant='contained'
                    href="/applications/create">
                    New Application</Button>
            </Box>
            <p align="left" className="mt-4 mb-4">
                An application will help integrate your application to our API by generating an api key.</p>
            <table class="table table-striped w-50">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Api key</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    )
}