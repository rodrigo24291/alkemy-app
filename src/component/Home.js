import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Card from './Card';

import Buscar from './Buscar'
import Alert from './Alert';
export default function Home() {
    const navigate = useNavigate();
    
    const token=localStorage.getItem('token')
   
     useEffect(()=>{
         if(token==null){
 
             navigate("/", { replace: true })
         
           }
 
     },[])

const [alerta, setalerta] = useState({
    estado:false,
    mensaje:''
});

const istmounted=useRef(true)

if(alerta.estado ){

setTimeout(() => {
if(istmounted.current){
    setalerta({
        
        estado:false,
        mensaje:''
    })
}
    
}, 3000);
}
useEffect(() => {
  
  return () => {
  istmounted.current=false  
  };
}, []);

    const api = useSelector(store => store.api)
  return <>

        <Navbar />

        <div className='container-fluid inicio'>

            <div className='container contenedor-inicio'>
                <div className='inicio_busqueda'>
                {alerta.mensaje!=='' &&  <div className="alert" > <Alert mensaje={alerta}  /> </div>}        
                    <h3 className='inicio_busqueda-title'>Tus comidas</h3>
                    <span className='inicio_busqueda-line'></span>
                    <div className='row'>
                        <div className='col-12 col-md-8 col-lg-4'>
                    <div className='inicio_busqueda_contenedorinputs'>
                        <p className='inicio_busqueda_contenedorinputs-title'>Encuentra tus comidas</p>
                        <Buscar/>
                    </div>
                </div>
                </div>
                </div>
                {api.api.length !== 0 ?
                    <div className='container'>
                        <div className='row'>
                            {
                                api.api.data.results.map(datas => (
                                    <div key={datas.id} className='col-12 col-md-4 col-lg-3'>
                                        <Card data={datas} setalerta={setalerta} alerta={alerta} />
                                    </div>
                                ))}
                        </div>
                    </div>
                    :
                    <h4 className='text-center text-white py-3'>No hay comidad seleccionada</h4>

                }
            </div>



        </div>

    </>;
}
