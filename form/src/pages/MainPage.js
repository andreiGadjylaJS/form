import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { buttonLabels } from '../constans/labelTexts'
import { makeStyles } from '@material-ui/core/styles';
import ButtonComponent from '../components/ButtonComponent'
import EthernetSettings from './EthernetSettings'
import WirelessSettings from './WirelessSettings'
import cloneDeep from 'lodash/cloneDeep';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 8,
    }
}));

// const validationRules = {
//     'ethernetSettings.ip.settings.ipAddress': (value, ipSettings) => ipSettings.isAutomatic || (!!value && /\d+/.test(value))
// }

const dataSettings = {
    ethernetSettings: {
        ip: {
            isAutomatic: true,
            settings: {
                ipAddress: '',
                //{
                // value: '',
                // validate: (value, ipSettings) => ipSettings.isAutomatic || !!value && /\d+/.test(value)
                // },
                dnsAddress: '',
                defaultGateway: '',
            }
        },
        dns: {
            isAutomatic: true,
            settings: {
                preferredDns: '',
                alternativeDns: ''
            }
        },
    },
    wirelessSettings: {
        isEnableWifi: true,
        networkName: '',
        securityWifi: {
            isAutomatic: true,
            securityKey: '',
        },
        ip: {
            isAutomatic: true,
            settings: {
                ipAddress: '',
                dnsAddress: '',
                defaultGateway: ''
            }
        },
        dns: {
            isAutomatic: true,
            settings: {
                preferredDns: '', //{value, validate}
                alternativeDns: ''
            }
        },
    },
}

const MainPage = () => {
    const classes = useStyles();
    const deepCloneObj = cloneDeep(dataSettings)
    const [paramsSettings, setParamsSettings] = useState(deepCloneObj)

    const onChange = (obj, path) => {
        const newObj = { ...paramsSettings, [path]: obj }
        setParamsSettings(newObj)
    }

    const submitForm = () => {
        const newDataForm = cloneDeep(dataSettings)
        console.log(JSON.stringify(paramsSettings))
        setParamsSettings(newDataForm)
    }
    console.log()
    return (
        <Grid container className={classes.root}>
            <Grid container xs={12} spacing={2}>
                <Grid item xs={6} >
                    <h2>Ethernet Settings</h2>
                    <EthernetSettings
                        ethernetSettings={paramsSettings.ethernetSettings}
                        onChange={obj => onChange(obj, "ethernetSettings")}
                        parentValueEthernetSettings={paramsSettings.ethernetSettings}
                    // errors={errors}
                    />
                </Grid>
                <Grid item xs={6} >
                    <h2>Wireless Settings</h2>
                    <WirelessSettings
                        wirelessSettings={paramsSettings.wirelessSettings}
                        onChange={obj => onChange(obj, "wirelessSettings")}
                    // errors={errors}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {buttonLabels.map((label, index) => {
                    if (label === 'save') {
                        return <ButtonComponent text={label} key={index} submitForm={submitForm} />
                    }
                    return <ButtonComponent text={label} key={index} />
                })}
            </Grid>
        </Grid>

    )
}
export default MainPage














































































































