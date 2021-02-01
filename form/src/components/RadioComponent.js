import React, { useState } from 'react'
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControl, FormControlLabel, } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';


const RadioComponent = ({
    defaultValue,
    params,
    onChange,
    disabled = false
}) => {
    const [value, setValue] = useState(defaultValue); // params[0].value
    const handleChangeRadio = (e) => {
        setValue(e.target.value);
        onChange(e.target.value)
    };

    return <FormControl component="fieldset">
        <RadioGroup value={value} onChange={handleChangeRadio} >
            {
                params.map((item, index) => {
                    return <FormControlLabel
                        control={<Radio />}
                        label={item.label}
                        value={item.value}
                        key={index}
                        disabled={disabled}
                    />
                })
            }
        </RadioGroup>
    </FormControl>
}

export default RadioComponent


// return <FormControl component="fieldset">
//         <RadioGroup value={value} onChange={handleChangeRadio} >
//             <FormControlLabel
//                 control={<Radio />}
//                 label={paramsRadio[0]}
//                 disabled={disabled}
//                 value={'pisy'}
//             />
//             <FormControlLabel
//                 value={'pisun'}
//                 control={<Radio />}
//                 label={paramsRadio[1]}
//                 disabled={disabled}
//             />
//         </RadioGroup>
//     </FormControl>














// import React, { useState } from 'react'
// import RadioGroup from '@material-ui/core/RadioGroup';
// import { FormControl, FormControlLabel, } from '@material-ui/core';
// import Radio from '@material-ui/core/Radio';


// const RadioComponent = ({ paramsRadio,
//     handleChange,
//     name,
//     firstRadioValue,
//     secondRadioValue,
//     disabled
// }) => {
//     const [value, setValue] = useState(firstRadioValue);
//     const handleChangeRadio = (event) => {
//         handleChange(event)
//         setValue(event.target.value);
//     };

//     return <FormControl component="fieldset">
//         <RadioGroup aria-label="gender" name={name} value={value} onChange={handleChangeRadio} >
//             <FormControlLabel value={firstRadioValue}
//                 control={<Radio />}
//                 label={paramsRadio[0]}
//                 type="radio"
//                 disabled={disabled}
//             />
//             <FormControlLabel value={secondRadioValue}
//                 control={<Radio />}
//                 label={paramsRadio[1]}
//                 type="radio"
//                 disabled={disabled}
//             />
//         </RadioGroup>
//     </FormControl>
// }

// export default RadioComponent

