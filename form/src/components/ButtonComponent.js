import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const ButtonComponent = ({ text, submitForm = null }) => {
    const classes = useStyles()
    return <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={submitForm}>
        {text}
    </Button>
}

export default ButtonComponent