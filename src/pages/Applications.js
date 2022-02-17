import { Box, Typography, Button, Fade } from "@mui/material"
import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react'


import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../authentication/firebase'
import { getApps, jsonData } from "../db/firebaseDb"

import '../static/css/applications.css'

export default function Apis() {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    getApps()
    const APP_DATA = jsonData.map(
        (info, i) => {
            return (
                <tr>
                    <td>{i + 1}</td>
                    <td>{info.AppName}</td>
                    <td>{info.ApiKey}</td>
                    <td>{info.Authorized}</td>
                    <td><Button className="table-btn">Delete</Button></td>
                </tr>
            )
        }
    )

    useEffect(() => {
        if (loading) return
        if (!user) return navigate("/login")
    }, [user, loading]);

    return (
        <Fade in={true} timeout={1000}>
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
                <table className="table table-striped w-75">
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
                        {APP_DATA}
                    </tbody>
                </table>
            </div >
        </Fade>
    )
}