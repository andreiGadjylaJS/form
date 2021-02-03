import React, { useState } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControl, FormControlLabel, } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';


const RadioComponent = ({
    defaultValue,
    params,
    onChange,
    disabled = false
}) => {
    const [value, setValue] = useState(defaultValue); // params[0].value
    const handleChangeRadio = (e) => {
        setValue(e.target.value);
        onChange(e.target.value)
    };

    return <FormControl component="fieldset">
        <RadioGroup value={value} onChange={handleChangeRadio} >
            {
                params.map((item, index) => {
                    return <FormControlLabel
                        control={<Radio />}
                        label={item.label}
                        value={item.value}
                        key={index}
                        disabled={disabled}
                    />
                })
            }
        </RadioGroup>
    </FormControl>
}

export default RadioComponent



