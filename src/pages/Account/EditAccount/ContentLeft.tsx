import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { styled } from '@mui/material'
export const ContentLeft = () => {
    const [interest, setInterest] = useState('women');
    const interestHandle = (event: any) => {
        setInterest(event.target.value);
    };
    
    const Biostring = 'I am a skilled web developer and have a rich experience of fullstack.@Regards.'
    return (
        <>
            <div style={{ paddingTop: "50px" }}>
                <h1 style={{ paddingBottom: "50px" }}>Edit profile</h1>
                <div style={{ paddingBottom: "50px" }}><TextField
                    className='bigradius'
                    id="outlined-multiline-static"
                    label="Bio"
                    multiline
                    rows={4}
                    defaultValue={Biostring.replace(/@/g, "\n")}
                    variant="outlined"
                    style={{ width: "400px" }}
                /></div>
                <div style={{ paddingBottom: "50px" }}><TextField
                    id="outlined-helperText"
                    label="Email address"
                    variant="outlined"
                    placeholder="Your email address here"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ width: "400px" }}
                /></div>
                <div style={{ paddingBottom: "50px" }}><FormControl component="fieldset" style={{ width: "400px" }}>
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
                <div style={{ paddingBottom: "50px" }}>
                    <FormControl component="fieldset" style={{ width: "400px" }}>
                        <FormLabel component="legend" style={{ textAlign: "left", fontSize:"20px" }}>Profile cost</FormLabel>
                        <FormLabel component="legend" style={{ textAlign: "left" }}>Change the amount your profile costs to unlock.</FormLabel>
                        <TextField
                            id="outlined-helperText"
                            label=""
                            variant="outlined"
                            defaultValue='1$'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ width: "400px", textAlign: "right" }}
                        />
                        <p style={{ textAlign: "right", paddingRight: "70px" }}>$0.50USD</p>
                    </FormControl>
                </div>
            </div>
        </>
    )
}
const RadioControl = styled(FormControlLabel)`
    margin: 0px;
    width: 95px;
`;
