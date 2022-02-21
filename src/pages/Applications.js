import { Box, Typography, Button, Fade } from "@mui/material"
import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react'


import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../authentication/firebase'
import { getFirestore, getDocs, collection } from "firebase/firestore"

import '../static/css/applications.css'

export default function Apis() {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [apps, setApps] = useState([])
    const db = getFirestore();

    useEffect(() => {
        var jsonData = []
        async function fetchMyApps() {
            const userEmail = user.email
            const querySnap = await getDocs(collection(db, "api_keys", userEmail, "my_apps"))
            querySnap.forEach((doc) => {
                var app = doc.data()
                var obj = {
                    'AppName': app.appName,
                    'ApiKey': app.apiKey,
                    'Authorized': app.authorized.toString()
                }
                jsonData.push(obj)
            })
            setApps(jsonData)
        }
        fetchMyApps()
    }, [user, loading])

    var column = null

    if (apps !== null || apps != 'undefined') {
        try {
            column = Object.keys(apps[0])
        } catch (err) {
        }
    }

    // get table row data
    const appData = () => {

        return apps.map((data, i) => {
            return (
                <tr>
                    <td>{i + 1}</td>
                    {
                        column.map((v) => {
                            return <td>{data[v]}</td>
                        })
                    }
                    < td > <Button className="table-btn"
                        variant="text"
                        disableElevation={true}
                        color="error">Delete</Button></td>
                </tr >
            )
        })
    }

    useEffect(() => {
        if (loading) return
        if (!user) return navigate("/login")
    }, [user, loading]);

    return (
        <Fade in={true} timeout={1000}>
            <div className="container fill-height apis-cont font-face-roboto pt-2">
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
                        {appData()}
                    </tbody>
                </table>
            </div >
        </Fade>
    )
}