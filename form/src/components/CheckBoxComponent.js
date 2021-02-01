import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckBoxComponent = ({ label, onChange, name, disabled = false }) => {

    return <FormControlLabel
        control={<Checkbox color="primary" />}
        label={label}
        labelPlacement="end"
        onClick={(e) => onChange(e.target.checked, e.target.name)}
        name={name}
        disabled={disabled}
    />
}

export default CheckBoxComponent