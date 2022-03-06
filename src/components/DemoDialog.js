import { useState } from 'react';
import {
    Button, Dialog,
    DialogActions, DialogContent, DialogContentText,
    DialogTitle, Stack
} from '@mui/material';

import { performDiagnosis } from '../services/DiagnosisService'
import SelectItem from './SelectItem';

import '../static/css/demo_dialog.css'
import $ from 'jquery'

export default function DemoDialog(props) {

    const [file, setFile] = useState(null)

    const closeDialog = () => {
        props.onClose()
    }

    const inputValidation = () => {
        if (file === null) {
            $('#validateText').fadeIn(600)
            return false
        }
        $('#validateText').hide()
    }

    const handleImageUpload = (e) => {
        $('.image-section').show();
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            const fileUpload = e.target.files[0];
            reader.onloadend = () => {
                setFile(fileUpload)
                $('#imgPreview').css('background-image', 'url(' + reader.result + ')');
                $('#imgPreview').fadeIn(650);
            };
            reader.readAsDataURL(fileUpload);
        }
    }

    const handleDiagnosis = () => {
        const isInputCorrect = inputValidation()
        console.log("Input*** ", isInputCorrect)
        if (isInputCorrect === false) {
            return
        }
        $("#diagnosisResults").hide()
        $(".loader").show()
        performDiagnosis(file)
        setFile(null)
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
                        <p id="validateText" style={{ color: 'red', display: "none" }}
                        >Ensure all fields are correct!</p>
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
                                className='mt-4'><span></span></h4>
                            <div className="loader" style={{ display: "none" }}></div>
                        </div>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Cancel</Button>
                    <Button onClick={handleDiagnosis}>Diagnose</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
