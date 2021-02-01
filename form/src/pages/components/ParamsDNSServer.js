import React, { useState } from 'react'
import TextFieldComponent from '../../components/TextFieldComponent'
import RadioComponent from '../../components/RadioComponent'
import Grid from '@material-ui/core/Grid';
import { dnsLabels } from '../../constans/labelTexts'

const ParamsDNSServer = ({ onChange, settings, path, disabled, /*errors*/ }) => {
    const defaultValue = dnsLabels.radioButtonLabels[0].value

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

    return <>

        <RadioComponent
            onChange={automatic => onChangeIsAutomatic(automatic)}
            params={dnsLabels.radioButtonLabels}
            disabled={disabled}
            defaultValue={defaultValue}
        />

        <Grid container
            direction="column"
            justify="center"
            alignItems="flex-end">
            {
                dnsLabels.inputLabels.map((item, index) => {
                    console.log(item)
                    return <TextFieldComponent
                        label={item.label}
                        key={index}
                        disabled={disabled || data.isAutomatic}
                        onChangeText={(value) => onChangeText(value, item.name)}
                    />
                })
            }
        </Grid>
    </>
}

export default ParamsDNSServer






























