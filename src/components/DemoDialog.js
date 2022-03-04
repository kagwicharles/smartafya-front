import { useState } from 'react';
import {
    Button, Dialog,
    DialogActions, DialogContent, DialogContentText,
    DialogTitle, Stack
} from '@mui/material';

import SelectItem from './SelectItem';

import '../static/css/demo_dialog.css'
import $ from 'jquery'

export default function DemoDialog(props) {

    const closeDialog = () => {
        props.onClose()
    }

    const handleImageUpload = (event) => {
        $('.image-section').show();
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                $('#imgPreview').css('background-image', 'url(' + e.target.result + ')');
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose}>
                <DialogTitle variant="h5">Perform diagnosis</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Upload an appropriate image either microscopic cell(Malaria dignosis) or
                        chest x-ray(Pneumonia or Covid19)
                    </DialogContentText>
                    <Stack spacing={1} className="pt-2">
                        <SelectItem />
                        <form id="upload-file" method="post"
                            encType="multipart/form-data">
                            <label htmlFor="imageUpload" className="upload-label">
                                Select Image
                            </label>&nbsp;
                            <input type="file" name="file"
                                id="imageUpload"
                                onChange={handleImageUpload}
                                accept=".png, .jpg, .jpeg" />
                        </form>

                        <div className="image-section" style={{ display: "none" }}>
                            <div className="img-preview">
                                <div id="imgPreview" />
                            </div>
                            <h4 id="diagnosisResults" style={{ display: "none" }}
                                className='mt-4'>result</h4>
                        </div>

                        <div className="loader" style={{ display: "none" }}></div>

                        <h3 id="result">
                            <span> </span>
                        </h3>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button>Diagnose</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
