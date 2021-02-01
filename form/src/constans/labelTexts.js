const ipLabels = {
    inputLabels: [
        { name: 'ipAddress', label: 'IP address*' },
        { name: 'dnsAddress', label: 'Subnet Mask*' },
        { name: 'defaultGateway', label: 'Default Gateway' }],
    radioButtonLabels: [
        { label: 'Obtain an IP address automatically (DHCP/BootP)', value: '1' },
        { label: 'Use the following IP address', value: '' },
    ]
}

const dnsLabels = {
    inputLabels: [
        { name: 'preferredDns', label: 'Preferred DNS server*' },
        { name: 'alternativeDns', label: 'Alternative DNS server' }

    ],
    radioButtonLabels: [
        { label: 'Obtain DNS server address automatically', value: '1' },
        { label: 'Use the following DNS server address', value: '' },
    ]
}

const wirelessSettingsParams = {
    inputLabels: [{ name: 'securityKey', label: 'Wireless Network Name*' }, 'Security Key*'],
    checkBoxLabel: ['Enable wifi:', 'Enable Wireless Security']
}

const buttonLabels = ['save', 'cancel']

const validationData = {
    ipAdress: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
    dnsAdress: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
    preferredDns: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
    securityKey: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    securityName: /^[^!#;+\]\/"\t][^+\]\/"\t]{0,30}[^ !#;+\]\/"\t]$|^[^ !#;+\]\/"\t]$/
}

const errorValidation = {
    // ipAdressethernetSettings: 'wrong ip address',
    // ipAdress: 'wrong ip address',
    // dnsAdress: 'wrong ip address',
    // preferredDns: 'wrong ip address',
    // securityKey: 'wrong ip address',
    // securityName: 'wrong ip address',
}

export { ipLabels, dnsLabels, wirelessSettingsParams, buttonLabels, validationData, errorValidation }

