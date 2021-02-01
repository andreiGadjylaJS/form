import React, { useState } from 'react'
import TextFieldComponent from '../../components/TextFieldComponent'
import CheckBoxComponent from '../../components/CheckBoxComponent'
import Grid from '@material-ui/core/Grid';
import { wirelessSettingsParams } from '..//../constans/labelTexts'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    securityKey: {
        marginBottom: 8
    }
}));




const ParamsWirelessSettings = ({ onChange, settings, settingsWireless, disabled, path }) => {
    const classes = useStyles()
    const [data, setData] = useState(settings)

    const onChangeIsAutomatic = automatic => {
        const newData = { ...data, isAutomatic: !automatic }
        setData(newData)
        onChange(newData, path)
    }

    const onChangeText = (value, name) => {
        const textInput = { ...data, [name]: value }
        setData(textInput)
        console.log(textInput)
        onChange(textInput, path)
    }


    return <>

        <CheckBoxComponent
            onChange={checked => onChangeIsAutomatic(checked)}
            label={wirelessSettingsParams.checkBoxLabel[1]}
            disabled={disabled}
        />
        <Grid
            container
            justify="flex-end"
            className={classes.securityKey}>
            <TextFieldComponent
                label={wirelessSettingsParams.inputLabels[1]}
                disabled={disabled || data.isAutomatic}
                onChangeText={(value) => onChangeText(value, wirelessSettingsParams.inputLabels[0].name)}

            />
        </Grid>
    </>
}

export default ParamsWirelessSettings





