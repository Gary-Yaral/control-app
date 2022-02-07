import { useState, useEffect, useCallback } from 'react'
import validateForm from '../../validateForm'
import SignupModal from '../SignupModal/SignupModal'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import './Signup.css';

function Signup() {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState({});
  const [status, setStatus] = useState({});

  return (
    <div className="signup-container">
      <section className='signup-block'>
        <div className="signup-banner">
          <h1>
            Regístrate
          </h1>
          <p>
            Completa el formulario
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
            setModal(true);
            setData({...data, ...values});
        }}>
          {
            ({values, errors}) => (
              <Form className='signup-form'>
                <div>
                  <Field
                    type="text" 
                    name="user_name" 
                    placeholder='Nombre' />
                  <ErrorMessage name="user_name" component= {() => (
                    <label className='error-message'>{errors.user_name}</label>
                  )} />
                </div>
                <div>
                  <Field 
                    type="text" 
                    name="user_lastname" 
                    placeholder='Apellido'/> 
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
                    placeholder='Contraseña'
                    value = {values.user_password}/>
                  <ErrorMessage name="user_password" component= {() => (
                    <label className='error-message'>{errors.user_password}</label>
                  )} />
                </div>
                <div>
                  <Field 
                    type="password" 
                    name="confirm_password" 
                    placeholder='Repetir contraseña' 
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
      <SignupModal modal = {modal} setModal = {setModal} data = {data} setState = {setStatus}/>
    </div>

  )
}

export default Signup;