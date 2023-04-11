import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { styled } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';


const BirthStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
}));
const currencies = [
    {
        value: 'United Kingdom',
        label: 'United Kingdom'
    },
    {
        value: 'United States',
        label: 'United States'
    },
    {
        value: 'Russia',
        label: 'Russia'
    }
];

export const ContentLeft = () => {

    const birthClasses = BirthStyles();
    const [currency, setCurrency] = useState('United Kingdom');
    const LocationChange = (event: any) => {
        setCurrency(event.target.value);
    };
    const [gender, setGender] = useState('male');
    const genderHandle = (event: any) => {
        setGender(event.target.value);
    };
    const [interest, setInterest] = useState('women');
    const interestHandle = (event: any) => {
        setInterest(event.target.value);
    };

    return (
        <>
            <div style={{ paddingTop: "50px" }}>
                <h1 style={{ paddingBottom: "50px" }}>Create an account</h1>
                <div style={{ paddingBottom: "50px" }}><TextField
                    id="outlined-helperText"
                    label="File Name"
                    variant="outlined"
                    placeholder="Your Name"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: "300px" }}
                /></div>
                <div style={{ paddingBottom: "50px" }}><TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="1994-09-17"
                    className={birthClasses.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                /></div>
                <div style={{ paddingBottom: "50px" }}><TextField
                    id="outlined-select-currency"
                    select
                    label="Location"
                    value={currency}
                    onChange={LocationChange}
                    style={{ width: "300px" }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField></div>
                <div style={{ paddingBottom: "50px" }}><TextField
                    id="outlined-helperText"
                    name="email"
                    label="Email address"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: "300px" }}
                /></div>
                <div style={{ paddingBottom: "50px" }}><FormControl component="fieldset" style={{ width: "300px" }}>
                    <FormLabel component="legend" style={{ textAlign: "left" }}>Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                        value={gender}
                        onChange={genderHandle}
                    >
                        <RadioControl
                            value="male"
                            control={<Radio />}
                            label="Male"
                        />
                        <RadioControl
                            value="female"
                            control={<Radio />}
                            label="Female"
                        />
                        <RadioControl
                            value="other"
                            control={<Radio />}
                            label="Other"
                        />
                    </RadioGroup>
                </FormControl></div>
                <div style={{ paddingBottom: "50px" }}><FormControl component="fieldset" style={{ width: "300px" }}>
                    <FormLabel component="legend" style={{ textAlign: "left" }}>Interested in</FormLabel>
                    <RadioGroup
                        row
                        aria-label="interest"
                        name="row-radio-buttons-group"
                        value={interest}
                        onChange={interestHandle}
                    >
                        <RadioControl
                            value="men"
                            control={<Radio />}
                            label="Men"
                        />
                        <RadioControl
                            value="women"
                            control={<Radio />}
                            label="Women"
                        />
                        <RadioControl
                            value="everyone"
                            control={<Radio />}
                            label="Everyone"
                        />
                    </RadioGroup>
                </FormControl></div>
                <div style={{ paddingBottom: "50px" }}><TextField
                    className='bigradius'
                    id="outlined-multiline-static"
                    label="Bio"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="outlined"
                    style={{ width: "300px" }}
                /></div>
            </div>
        </>
    )
}
const RadioControl = styled(FormControlLabel)`
    margin: 0px;
    width: 95px;
`;
