import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));

const TextFieldComponent = ({
    onChangeText,
    label,
    disabled,
    validateIPaddress,
    value,
    error = false,
}) => {
    const classes = useStyles();
    return <>
        <TextField
            // error={!!errors[name + propsKeyInternet]}
            margin="normal"
            id="standard-uncontrolled"
            label={label}
            defaultValue=""
            className={classes.textField}
            disabled={disabled}
            onChange={(e) => onChangeText(e.target.value)}
            onBlur={validateIPaddress}
            type="text"
            value={value}
        // helperText={errors[name + propsKeyInternet]}
        />
    </>
}
export default TextFieldComponent
//onChange={(onChangeTextField())}