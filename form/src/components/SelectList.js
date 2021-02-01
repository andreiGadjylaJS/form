import React, { useState } from 'react'
import { MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
        marginTop: theme.spacing(2)
    }
}));

const SelectList = ({
    onChange,
    disabled,
    path,
    validateIPaddress,
    errors = false
}) => {

    const [nameNetwork, setAge] = useState('');
    const classes = useStyles();
    const handleChangeSelect = (event) => {
        setAge(event.target.value);
        onChange(event.target.value, event.target.name)
    };

    return <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Please select </InputLabel>
        <Select
            // error={!!errors[name]}
            disabled={disabled}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={nameNetwork}
            placeholder='fr'
            onChange={handleChangeSelect}
            label={'please select'}
            name={path}
        // onBlur={validateIPaddress}
        // helperText={errors[name]}
        >

            <MenuItem value={'Abraham Linksys'}>Abraham Linksys</MenuItem>
            <MenuItem value={'Benjamin FrankLAN'}>Benjamin FrankLAN</MenuItem>
            <MenuItem value={'Martin Router King'}>Martin Router King</MenuItem>
        </Select >
    </FormControl>
}

export default SelectList