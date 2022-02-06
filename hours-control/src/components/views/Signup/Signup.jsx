import { useState, useEffect, useCallback } from 'react'
import validateForm from '../../validateForm'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import './Signup.css';

function Signup() {

  return (
    <div className="signup-container">
      <section className='signup-block'>
        <div className="signup-banner">
          <h1>
            Sign Up
          </h1>
          <p>
            Create your account below
          </p>
        </div>
        <Formik initialValues= {
          {
            user_name:"",
            user_lastname:"",
            user_email: "",
            user_password:"",
            confirm_password:""
          }
        }

        validate  = {(values) => {
          return validateForm(values);
        }}

        onSubmit = {(values) => {
          console.log('send');
          let formData = new FormData();
          let { 
            user_name, 
            user_lastname, 
            user_email,
            user_password,
            confirm_password 
          } = values;

          formData.append('user_name', user_name);
          formData.append('user_lastname', user_lastname);
          formData.append('user_email', user_email);
          formData.append('user_password', user_password);
          formData.append('confirm_password', confirm_password);
          
          fetch('http://localhost:4000/save-user', {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type':'application/json'
            }
          }).then(res => res.json())
          .then(res => console.log(res))

        }}>
          {
            ({values, touched, errors, handleSubmit, handleChange}) => (
              <Form className='signup-form'>
                <div>
                  <Field
                    type="text" 
                    name="user_name" 
                    placeholder='Name' />
                  <ErrorMessage name="user_name" component= {() => (
                    <label className='error-message'>{errors.user_name}</label>
                  )} />
                </div>
                <div>
                  <Field 
                    type="text" 
                    name="user_lastname" 
                    placeholder='Lastname'/> 
                  <ErrorMessage name="user_lastname" component= {() => (
                    <label className='error-message'>{errors.user_lastname}</label>
                  )} />
                </div>
                <div>
                  <Field
                    type="email" 
                    name="user_email" 
                    placeholder="Email" 
                    value={values.user_email}/>        
                  <ErrorMessage name="user_email" component= {() => (
                    <label className='error-message'>{errors.user_email}</label>
                  )} />
                </div>
                <div>
                  <Field 
                    type="password" 
                    name="user_password" 
                    placeholder='Password'
                    value = {values.user_password}/>
                  <ErrorMessage name="user_password" component= {() => (
                    <label className='error-message'>{errors.user_password}</label>
                  )} />
                </div>
                <div>
                  <Field 
                    type="password" 
                    name="confirm_password" 
                    placeholder='Confirm password' 
                    value= {values.confirm_password} />
                  <ErrorMessage name="confirm_password" component= {() => (
                    <label className='error-message'>{errors.confirm_password}</label>
                  )} />
                </div>
                <input type="submit" value="Sign Up" />
              </Form>
            )
          } 
        </Formik>
      </section>
    </div>

  )
}

export default Signup;