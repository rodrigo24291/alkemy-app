import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useDispatch, useSelector} from 'react-redux'
import { obtenerApi } from '../reducer/ApiReducer';


export default function Buscar() {

    const dispatch = useDispatch()


    return <>

        <Formik
            initialValues={{ busqueda: '' }}
            validate={values => {
                const errors = {};
                if (!values.busqueda) {
                    errors.busqueda = 'Debes completar el campo';
                } else if (values.busqueda.length <= 2) {
                    errors.busqueda = 'Debe tener mas de dos caracteres';
                }

                return errors;
            }}
            onSubmit={(values) => {

                dispatch(obtenerApi(values.busqueda))
            }
            }

        >
            {({ errors }) => (


                <Form>
                    <Field type="text" name="busqueda" />
                    <ErrorMessage name="busqueda" component={() => (<div className='text-danger'>{errors.busqueda}</div>)} />
                    <input type="submit" className='mt-4' value="Buscar" />
                </Form>


            )}

        </Formik>




    </>;
}
