import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {ErrorMessage, Formik} from "formik";
import * as yup from 'yup'
import {Redirect} from "react-router-dom";

const Login = (props) => {

    if (props.isAuth){
        return <Redirect to='/profile'/>
    }

    const initialValues = {
        email: '',
        password: '',
        rememberMe: false
    }

    const onSubmit = values => {
        console.log(values)
        props.userLogin(values.email, values.password, values.rememberMe)
    }

    const validationSchema = yup.object({
        email: yup.string().email('Email is not valid').required('Email is required'),
        password: yup.string()
            .matches(/^((?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Password is not valid')
            .required('Password is required'),
        rememberMe: yup.boolean()
    })


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {formik => {
                return (
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <ErrorMessage name='email' component={Form.Text}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.password && formik.errors.password ?
                                <Form.Text>{formik.errors.password} </Form.Text> : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Check label="Remember Me"  name='rememberMe' onChange={formik.handleChange}/>
                        </Form.Group>
                        <Button onClick={formik.handleSubmit} disabled={!formik.validateForm}>Submit</Button>
                    </Form>
                )
            }}
        </Formik>
    )

}

export default Login
