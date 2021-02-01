import React, { useState } from 'react'
import ParamsDNSServer from './components/ParamsDNSServer'
import ParamsIPAddress from './components/ParamsIPAddress'
import Grid from '@material-ui/core/Grid'
import CheckBoxComponent from '../components/CheckBoxComponent'
import { wirelessSettingsParams } from '../constans/labelTexts'
import ParamsWirelessSettings from './components/ParamsWirelessSettings'
import SelectList from '../components/SelectList'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    select: {
        marginBottom: 8
    }
}));

const WirelessSettings = ({ wirelessSettings, errors, onChange }) => {
    const classes = useStyles()
    const [settings, setSettings] = useState(wirelessSettings)

    const onChangeWirelessSettings = (data, path) => {
        const dataSettings = { ...settings, [path]: data }
        setSettings(dataSettings)
        onChange(dataSettings)
    }

    const onChangeWiFiEnabling = (disable) => {
        const dataSettings = { ...settings, isEnableWifi: !disable }
        setSettings(dataSettings)
        onChange(dataSettings)
    }

    return <>

        <CheckBoxComponent
            label={wirelessSettingsParams.checkBoxLabel[0]}
            onChange={(checked) => { onChangeWiFiEnabling(checked) }}
        />
        <Grid
            container
            justify="flex-end"
            className={classes.select}
        >
            <SelectList
                disabled={settings.isEnableWifi}
                onChange={(value) => onChangeWirelessSettings(value, "networkName")}
            />
        </Grid>



        <ParamsWirelessSettings
            onChange={(data) => onChangeWirelessSettings(data, "securityWifi")}
            settings={settings.securityWifi}
            disabled={settings.isEnableWifi}
        // errors={errors}
        />

        <ParamsIPAddress
            onChange={(settings) => onChangeWirelessSettings(settings, "ip")}
            settings={settings.ip}
            // errors={errors}
            disabled={settings.isEnableWifi}
        />

        <ParamsDNSServer
            onChange={(settings) => onChangeWirelessSettings(settings, "dns")}
            settings={settings.dns}
            // errors={errors}
            disabled={settings.isEnableWifi}
        />

    </>
}

export default WirelessSettings
























































































































































































































