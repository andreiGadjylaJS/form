import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import ParamsIPAddress from './components/ParamsIPAddress'
import ParamsDNSServer from './components/ParamsDNSServer'

const EthernetSettings = ({ ethernetSettings, onChange, pathEthernet, parentValueEthernetSettings, ip, errors }) => {
    const [settings, setSettings] = useState(ethernetSettings)


    // useEffect(() => {
    //     setSettings(prevState => ({ ...prevState, ...ethernetSettings }))
    // }, [ethernetSettings])


    const onChangeEthernetSettings = (data, path) => {
        const dataSettings = { ...settings, [path]: data }
        setSettings(dataSettings)
        onChange(dataSettings, pathEthernet)
    }
    console.log(settings)
    return <>
        <ParamsIPAddress
            onChange={(settings) => onChangeEthernetSettings(settings, 'ip')} //
            settings={settings.ip}
            parentValueSettings={settings.ip}
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







