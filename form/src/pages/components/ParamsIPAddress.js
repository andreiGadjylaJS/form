import React, { useState } from 'react'
import TextFieldComponent from '../../components/TextFieldComponent'
import RadioComponent from '../../components/RadioComponent'
import Grid from '@material-ui/core/Grid';
import { ipLabels } from '../../constans/labelTexts'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    containerIp: {
        marginTop: 8,
        marginBottom: 8
    }
}));

const ParamsIPAddress = ({ onChange, settings, disabled, path, /*errors*/ }) => {
    const classes = useStyles();
    const defaultValue = ipLabels.radioButtonLabels[0].value

    const [data, setData] = useState(settings)

    const onChangeIsAutomatic = automatic => {
        const newData = { ...data, isAutomatic: !!automatic }
        setData(newData)
        onChange(newData, path)
    }

    const onChangeText = (value, name) => {
        const textInput = { ...data, settings: { ...data.settings, [name]: value } }
        setData(textInput)
        onChange(textInput, path)
    }

    return < >

        <RadioComponent
            onChange={automatic => onChangeIsAutomatic(automatic)}
            params={ipLabels.radioButtonLabels}
            disabled={disabled}
            defaultValue={defaultValue}
        />

        <Grid container
            direction="column"
            justify="center"
            alignItems="flex-end"
            className={classes.containerIp}
        >

            {
                ipLabels.inputLabels.map((item, index) => {
                    return <TextFieldComponent
                        label={item.label}
                        key={index}
                        disabled={disabled || data.isAutomatic}
                        onChangeText={value => onChangeText(value, item.name)}
                        value={data.name}
                    />
                })
            }
        </Grid>

    </>
}

export default ParamsIPAddress







