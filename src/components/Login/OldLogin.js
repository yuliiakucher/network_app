import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useFormik} from "formik";
import * as yup from 'yup'


const OldLogin = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validationSchema = yup.object({
        email: yup.string().email('Email is not valid').required('Email is required'),
        password: yup.string()
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Password is not valid')
            .required('Password is required')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

console.log(formik.touched)


    return (
        <Form>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    {...formik.getFieldProps('email')}
                />
                <Form.Text>
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </Form.Text>

            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...formik.getFieldProps('password')}
                />
                <Form.Text>
                    {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </Form.Text>

            </Form.Group>

            <Button type='submit' onClick={formik.handleSubmit}>Login</Button>
        </Form>

    )

}

export default OldLogin
