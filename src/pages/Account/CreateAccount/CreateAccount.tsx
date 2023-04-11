import { Grid } from "@mui/material";
import Button from '@material-ui/core/Button';
import { PhotoList } from '../../../components/PhotoList/PhotoList'
import { useNavigate } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { styled } from '@mui/material'//
import '../../../assets/sass/validation.scss'
import { useAppDispatch } from 'hooks';
import { createUser } from '../../../redux/User/reducer';
import { connectedPeople } from "../../../redux/action";

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

const CreateAccount = () => {

    window.pageType = "CreateAccount"
    let navigate = useNavigate();

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

    const SignInSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
        email: Yup.string().email().required("Email is required"),
    });

    const initialValues = {
        name: "",
        email: ""
    };

    const dispatch = useAppDispatch();
    const submitForm = (values: any) => {
        console.log(`values : ${values.name}`);
        const user = {
            userId: values.name,
            name: values.name,
            avatar: "/assets/img/avatar/me.jpg",
            photos: connectedPeople,
        }
        dispatch(createUser(user))
      
        navigate('/dashboard')
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={submitForm}
        >
            {(formik) => {
                const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty
                } = formik;

                return (
                    <form onSubmit={handleSubmit}>
                        <div className="container" style={{ textAlign: "center" }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={5} >
                                    <div style={{ paddingTop: "50px" }}>
                                        <h1 style={{ paddingBottom: "50px" }}>Create an account</h1>
                                        <div style={{ paddingBottom: "50px" }}><TextField
                                            id="outlined-helperText"
                                            name='name'
                                            label="Name"
                                            variant="outlined"
                                            placeholder="Your Name"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            style={{ width: "300px" }}
                                            onChange={handleChange}
                                            onBlur={handleBlur}

                                        />
                                            {errors.name && touched.name && (
                                                <span className="error" style={{ display: "block" }}>{errors.name}</span>
                                            )}
                                        </div>
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
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.email && touched.email ? "input-error" : ""}
                                        />
                                            {errors.email && touched.email && (
                                                <span className="error" style={{ display: "block" }}>{errors.email}</span>
                                            )}
                                        </div>
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
                                            defaultValue=""
                                            variant="outlined"
                                            style={{ width: "300px" }}
                                        /></div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} lg={7}>
                                    <Grid style={{ marginTop: "50px", padding: "150px" }}>
                                        <Grid style={{ textAlign: "left", paddingLeft: "100px" }}><h5>Profile photos</h5></Grid>
                                        <PhotoList />
                                        <Grid style={{ textAlign: "left", paddingLeft: "100px", paddingTop: "10px" }}><p>You need at least 2 photos to continue</p></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid style={{ marginBottom: "50px" }}>
                                <Button variant="contained" color="primary" className={!(dirty && isValid) ? "disabled-btn" : ""} disabled={!(dirty && isValid)} type="submit" style={{ width: '200px', height: "50px" }}>Continue</Button>
                            </Grid>
                        </div>
                    </form>
                );
            }}
        </Formik>
    );
}
const RadioControl = styled(FormControlLabel)`
    margin: 0px;
    width: 95px;
`;

export default CreateAccount;