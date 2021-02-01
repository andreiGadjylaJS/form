import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import ParamsIPAddress from './components/ParamsIPAddress'
import ParamsDNSServer from './components/ParamsDNSServer'

const EthernetSettings = ({ ethernetSettings, onChange, pathEthernet, errors }) => {
    const [settings, setSettings] = useState(ethernetSettings)

    const onChangeEthernetSettings = (data, path) => {
        const dataSettings = { ...settings, [path]: data }
        setSettings(dataSettings)
        onChange(dataSettings, pathEthernet)
    }

    return <>
        <ParamsIPAddress
            onChange={(settings) => onChangeEthernetSettings(settings, 'ip')} //
            settings={settings.ip}
        // errors={errors} 
        />

        <ParamsDNSServer
            onChange={(settings) => onChangeEthernetSettings(settings, 'dns')} // 
            settings={settings.dns}
        // errors={errors}
        />


    </>
}

export default EthernetSettings







