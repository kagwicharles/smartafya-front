import { useEffect } from 'react';
import {
    Button, Dialog,
    DialogActions, DialogContent, DialogContentText,
    DialogTitle, Stack
} from '@mui/material';

import SelectItem from './SelectItem';

import '../static/css/demo_dialog.css'
import $ from 'jquery'

export default function DemoDialog(props) {

    useEffect(() => {

    });

    const handleImageUpload = (input) => {
        $('.image-section').show();
        $('#imagePreview').css('background-image', 'url("../static/img/check.jpg")');
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
                            enctype="multipart/form-data">
                            <label htmlFor="imageUpload" className="upload-label">
                                Select Image
                            </label>
                            <br />
                            <input type="file" name="file"
                                id="imageUpload"
                                onChange={handleImageUpload}
                                accept=".png, .jpg, .jpeg" />
                        </form>

                        <div className="image-section" style={{ display: "none" }}>
                            <div class="img-preview">
                                <div id="imagePreview">
                                </div>
                            </div>
                        </div>

                        <div className="loader" style={{ display: "none" }}></div>

                        <h3 id="result">
                            <span> </span>
                        </h3>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button>Cancel</Button>
                    <Button>Diagnose</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
