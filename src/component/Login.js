import React, { useEffect, useRef, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

export default function Login(e) {
  
    const ismounted = useRef(true);
    useEffect(() => {
  
        const token=localStorage.getItem('token')
        if(!token==null){
            localStorage.removeItem('token')
        }
      return () => {
        ismounted.current=false
      };
    }, []);
    
const [buton, setbuton] = useState(false);
    const navigate = useNavigate();
    const [cargar, setcargar] = useState(0);
    return <>
        <div className='d-flex flex-column justify-content-center align-items-center inicio'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Debe completar el Email';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Email invalido';
                    }

                    if (!values.password) {
                        errors.password = 'Debe completar el password'
                    }

                    return errors;
                }}

                onSubmit={(values) => {

                    const article = {
                        email: values.email,
                        password: values.password
                    };
setcargar(1)
setbuton(true)
setTimeout(() => {
if(ismounted){    
    axios.post('http://challenge-react.alkemy.org/', article)
    .then(response => {
            navigate("/Inicio", { replace: true })
            localStorage.setItem('token', response.data.token)
            setcargar(0)
            setbuton(false)
    }).catch((err)=>{ Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email o Password Incorrecto',
    })
    setcargar(0)
    setbuton(false)
}
    )}
}, 3000);
                }}



            >
                {({ isSubmitting, errors }) => (
                    <Form>
                        <div className='login shadow'>
                            <div className='container d-flex flex-column align-items-center justify-content-center login_container'>
                                <div className='login_title_container w-100'>
                                    <p className='login_title text-center'>Login</p>
                                    <span className='login_title_line'></span>
                                </div>
                                <div className='container_input d-flex flex-column align-items-center justify-content-between login_container-inputs'>
                                    <div className='input_containter-efect w-100'>
                                        <Field className='input_login' name="email" type="email" placeholder=' ' />
                                        <span className='input_containter-efect_text'> Email</span>

                                        <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
                                    </div>
                                    <div className='input_containter-efect w-100 '>
                                        <Field type="password" className='input_login ' name="password" placeholder=' ' />
                                        <span className='input_containter-efect_text'>Password</span>

                                        <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
                                    </div>
                                    <input type="submit" className='login_submint ' disabled={buton} value="Enviar" />
                                      

                                </div>
                            </div>
                        </div>
          
                    </Form>
                )}

            </Formik>
            {cargar==1 && <Spinner className="mt-3" animation="border" variant="danger" /> } 
        </div>
    </>;
}
