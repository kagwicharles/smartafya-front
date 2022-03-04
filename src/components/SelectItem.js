import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectItem() {
    const [disease, setDisease] = useState('');

    const handleChange = (event) => {
        setDisease(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth margin='dense'>
                <InputLabel id="demo-simple-select-label">Select disease</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={disease}
                    label="Select disease"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Malaria</MenuItem>
                    <MenuItem value={20}>Pneumonia</MenuItem>
                    <MenuItem value={30}>Covid19</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
