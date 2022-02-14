import { Navigate } from 'react-router-dom'

import { Box, Typography, Button, Fade } from "@mui/material"
import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../authentication/firebase'
import { Icon } from '@iconify/react'

import '../static/css/applications.css'

export default function Apis() {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return
        if (!user) return navigate("/login")
    }, [user, loading]);

    return (
        <div className="container fill-height apis-cont font-face-roboto">
            < Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    alignContent: 'center'
                }
                }>
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
                    href="/applications/create"
                    startIcon={<Icon icon="bi:plus-lg" />}
                    disableElevation={true}>
                    New Application</Button>
            </Box >
            <p align="left" className="mt-2 mb-4">
                An application will help you integrate to our API by generating an api key.</p>
            <Fade in={true} timeout={1000}>
                <table className="table table-striped table-sm w-75">
                    <thead>
                        <tr>
                            <th scope="#">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Api key</th>
                            <th scope="col">Authorized</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>App-1</td>
                            <td>somerandomgeneratedkey</td>
                            <td>No</td>
                            <td><Button endIcon={<Icon icon="ep:delete" />}>Delete</Button></td>
                        </tr>
                    </tbody>
                </table>
            </Fade>
        </div >
    )
}