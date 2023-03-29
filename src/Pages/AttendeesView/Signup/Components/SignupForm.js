// import { Box, LinearProgress, Link } from "@mui/material";
// import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';
// import { Button, Container, Form, InputGroup, Row, Stack } from 'react-bootstrap';
// import * as TiIcons from 'react-icons/ti';
// import zxcvbn from 'zxcvbn';
// import { HorizontalChip } from '../../Login/Components/HorizontalChip';
// import '../Signup.scss';
// import './SignupMethods';
// import SignupMethods from './SignupMethods';
// import { Formik } from 'formik'
// import { object, string } from 'yup';

// const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

// const schema = object().shape({
//     firstName: string().required(),
//     lastName: string().required(),
//     email: string().required(),
//     password: string().required()
// });

// function getPasswordState(password) {
//     const result = zxcvbn(password).score
//     switch (result) {
//         case 0:
//             return [0, "#e02e46", "Your password must be at least 8 characters"];
//         case 1:
//             return [1, "#e02e46", "Your password is weak"];
//         case 2:
//             return [2, "#f05537", "Your password is moderate"];
//         case 3:
//             return [3, "#16a85a", "Your password is strong"];
//         case 4:
//             return [4, "#16a85a", "Your password is very strong"]
//         default: return "";
//     }
// }


// function LinearProgressWithLabel(props) {
//     const [progressBar, setProgressBar] = useState({
//         value: 0,
//         colorHex: "#1a90ff",
//         labelString: 'Your password must be at least 8 characters',
//     });
//     useEffect(() => {
//         const result = getPasswordState(props.password);
//         setProgressBar(state => ({
//             ...state, ...progressBar,
//             value: result[0],
//             colorHex: result[1],
//             labelString: result[2]
//         }));
//     }, [props.password]);
//     return (
//         <Box sx={{ alignItems: 'center' }}>
//             <Box sx={{ width: '100%', mr: 1 }}>
//                 <LinearProgress variant="determinate"
//                     value={progressBar.value * 25}
//                     sx={{
//                         '& .MuiLinearProgress-bar1Determinate': {
//                             backgroundColor: progressBar.colorHex,
//                         }
//                     }}
//                 />
//             </Box>
//             <Box sx={{ minWidth: 35, fontSize: "0.8rem", pt: 2 }}>
//                 {
//                     progressBar.labelString
//                 }
//             </Box>
//         </Box>
//     );
// }
// LinearProgressWithLabel.propTypes = {
//     /**
//      * The value of the progress indicator for the determinate and buffer variants.
//      * Value between 0 and 100.
//      */
//     value: PropTypes.number.isRequired,
// };

// /** 
// * @param {name: Name of this element after creation} props 
// * @returns Sign up form containing email, password forms & log in submit button
// */


// export const SignupForm = (props) => {

//     const [showSignUpInfo, setShowSignUpInfo] = useState(false);
//     const [email, setEmail] = useState('');
//     const [emailConfirm, setEmailConfirm] = useState('');
//     const [password, setPassword] = useState('');
//     const [validated, setValidated] = useState(false);
//     const formStyle = {
//         display: showSignUpInfo ? "block" : "none"
//     }
//     const confirmEmail = (event) => {
//         if (emailConfirm === email) {
//             setValidated(true);
//             console.log('assdasd')
//         } else {
//             setValidated(false);
//             console.log('assdasdasdafs')
//         }

//     };
//     const SignUpInfoForms = (
//         <>

//         </>
//     )

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (email && email.length && email.match(isValidEmail)) {
//             setShowSignUpInfo(state => state = true)
//             console.log("good email")
//         } else {
//             setShowSignUpInfo(state => state = false)
//             console.log("bad email")
//         }
//     };


//     return (<Container data-testid={props.data_testid} fluid className='m-0 p-0' style={{ minWidth: "200px" }}>
//         <Formik
//             onSubmit={console.log}
//             validationSchema={schema}
//             initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: ''
//             }}

//         >
//             {({
//                 handleSubmit,
//                 handleChange,
//                 handleBlur,
//                 values,
//                 touched,
//                 isValid,
//                 errors,
//             }) => (
//                 <Form noValidate onSubmit={handleSubmit}>

//                     <InputGroup hasValidation>
//                         <Form.Group className="mb-3" controlId="formLoginEmail">
//                             <Form.Control disabled={showSignUpInfo} type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email address"
//                             />
//                         </Form.Group>
//                         <Button>
//                             <TiIcons.TiPencil />
//                         </Button>
//                     </InputGroup>
//                     <div style={formStyle}>
//                         <Form.Group >
//                             <Form.Control type="email" placeholder="Confirm Email"
//                                 onBlur={confirmEmail}
//                                 onChange={(e) => setEmailConfirm(e.target.value)}
//                                 value={emailConfirm}
//                             />
//                             <Form.Control.Feedback type="invalid">Email address doesn't match. Please try again</Form.Control.Feedback>
//                         </Form.Group>
//                         <Stack direction="horizontal" gap={3} className="mb-3 mt-3">
//                             <Form.Group>
//                                 <Form.Control type="text" placeholder="First Name"

//                                     name="firstName"
//                                     value={values.firstName}
//                                     onChange={handleChange}
//                                     isValid={touched.firstName && !errors.firstName}

//                                 />
//                             </Form.Group>
//                             <Form.Group>
//                                 <Form.Control type="text" placeholder="Last Name"
//                                     name="lastName"
//                                     value={values.lastName}
//                                     onChange={handleChange}
//                                     isValid={touched.lastName && !errors.lastName}
//                                 />
//                             </Form.Group>
//                         </Stack>
//                         <Form.Group className='mb-3'>
//                             <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password"
//                                 name="password"
//                             />
//                         </Form.Group>
//                         <LinearProgressWithLabel password={password} />
//                     </div>
//                     {/* {showSignUpInfo ? SignUpInfoForms : <></>} */}

//                     <Button as="input" className='mt-5 mb-2' type="submit" value={showSignUpInfo ? "Create account" : "Continue"} variant="flat btn-flat" />{' '}
//                 </Form>
//             )}
//         </Formik>

//         {showSignUpInfo ? <></> : <><HorizontalChip /> <SignupMethods /></>}
//         <Row className="pt-5 pb-0" >
//             <Link href="/login" underline="always" style={{ width: "auto" }}>
//                 {'Log in'}
//             </Link>
//         </Row>
//     </Container>);
// }


// export default (SignupForm);

import React from 'react';
import { useFormik } from 'formik';
import { Box, IconButton, LinearProgress, Link } from "@mui/material";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Button, Container, Form, InputGroup, Row, Stack } from 'react-bootstrap';
import * as TiIcons from 'react-icons/ti';
import zxcvbn from 'zxcvbn';
import { HorizontalChip } from '../../Login/Components/HorizontalChip';
import '../Signup.scss';
import './SignupMethods';
import SignupMethods from './SignupMethods';
import { Formik } from 'formik'
import { object, string } from 'yup';

const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


function getPasswordState(password) {
    const result = zxcvbn(password).score
    switch (result) {
        case 0:
            return [0, "#e02e46", "Your password must be at least 8 characters"];
        case 1:
            return [1, "#e02e46", "Your password is weak"];
        case 2:
            return [2, "#f05537", "Your password is moderate"];
        case 3:
            return [3, "#16a85a", "Your password is strong"];
        case 4:
            return [4, "#16a85a", "Your password is very strong"]
        default: return "";
    }
}


function LinearProgressWithLabel(props) {
    const [progressBar, setProgressBar] = useState({
        value: 0,
        colorHex: "#1a90ff",
        labelString: 'Your password must be at least 8 characters',
    });
    useEffect(() => {
        const result = getPasswordState(props.password);
        setProgressBar(state => ({
            ...state, ...progressBar,
            value: result[0],
            colorHex: result[1],
            labelString: result[2]
        }));
    }, [props.password]);
    return (
        <Box sx={{ alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate"
                    value={progressBar.value * 25}
                    sx={{
                        '& .MuiLinearProgress-bar1Determinate': {
                            backgroundColor: progressBar.colorHex,
                        }
                    }}
                />
            </Box>
            <Box sx={{ minWidth: 35, fontSize: "0.8rem", pt: 2 }}>
                {
                    progressBar.labelString
                }
            </Box>
        </Box>
    );
}
LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};
export const SignupForm = (props) => {
    const [showSignUpInfo, setShowSignUpInfo] = useState(false);
    const [password, setPassword] = useState('');

    const formStyle = {
        display: showSignUpInfo ? "block" : "none"
    }

    const validate = values => {
        const errors = {};
        if (!showSignUpInfo)
            return errors

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }


        if (!values.password) {
            errors.password = 'Required';
        } else if (zxcvbn(values.password) < 2) {
            errors.password = 'Password must be at least 8 characters long and have symbols or numbers';
        }

        if (!(values.email === values.emailConfirm)) {
            errors.emailConfirm = 'Emails must match'
        }
        return errors;
    };
    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            emailConfirm: ''
        }, validate,

        onSubmit: values => {
            if (values.email && values.email.length && values.email.match(isValidEmail)) {
                setShowSignUpInfo(state => state = true)
                console.log("good email")
            } else {
                setShowSignUpInfo(state => state = false)
                console.log("bad email")
            }


            alert(JSON.stringify(values, null, 2));
        }, initialTouched: false

    });
    return (
        <Form data-testid={props.data_testid} onSubmit={formik.handleSubmit}>

            <InputGroup>
                <Form.Group className="mb-3" controlId="formLoginEmail" style={{ width: "100%" }}>
                    <Form.Control
                        disabled={showSignUpInfo}
                        type="email"
                        placeholder="Email address"
                        value={formik.values.email}
                        {...formik.getFieldProps('email')}
                    />
                    <Form.Control.Feedback type="invalid">Email address invalid.</Form.Control.Feedback>
                </Form.Group>
                <IconButton style={{
                    display: showSignUpInfo ? "inherit" : "none",
                    position: "absolute",
                    right: "1rem"
                    , top: "0.3rem",
                    backgroundColor: "transparent"
                    
                }}
                    onClick={a => setShowSignUpInfo(false)}
                    type="reset"
                >
                    <TiIcons.TiPencil />
                </IconButton>
            </InputGroup>

            <div style={{ display: showSignUpInfo ? "block" : "none" }}>
                <Form.Group >
                    <Form.Control
                        type="email"
                        placeholder="Confirm Email"
                        id="emailConfirm"
                        {...formik.getFieldProps('emailConfirm')}
                        isInvalid={formik.touched.emailConfirm && formik.errors.emailConfirm}
                        isValid={!formik.touched.emailConfirm && !formik.errors.emailConfirm}
                    />
                    <Form.Control.Feedback type="invalid" >Email address doesn't match. Please try again</Form.Control.Feedback>
                </Form.Group>
                <Stack direction="horizontal" gap={3} className=" mt-3 ">
                    <Form.Group className='pb-4'>
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            id="firstName"
                            {...formik.getFieldProps('firstName')}
                            isValid={!formik.touched.firstName && !formik.errors.firstName}
                            isInvalid={formik.touched.firstName && formik.errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='pb-4'>
                        <Form.Control 
                            type="text"
                            placeholder="Last Name"
                            id="lastName"
                            name="lastName"
                            {...formik.getFieldProps('lastName')}
                            isValid={!formik.touched.lastName && !formik.errors.lastName}
                            isInvalid={formik.touched.lastName && formik.errors.lastName}

                        />
                        <Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
                    </Form.Group>
                </Stack>
                <Form.Group className='mb-3'>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} value={password}
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"

                    />
                </Form.Group>
                <LinearProgressWithLabel password={password} />
            </div>
            {/* {showSignUpInfo ? SignUpInfoForms : <></>} */}

            <Button as="input" className='mt-5 mb-2' type="submit" value={showSignUpInfo ? "Create account" : "Continue"} variant="flat btn-flat" />{' '}

        </Form>
    );
};
export default (SignupForm);
