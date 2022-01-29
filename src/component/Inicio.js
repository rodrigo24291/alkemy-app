import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux'
import Card2 from './Card2';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Alert from './Alert';


export default function Inicio() {
    
    const [alert, setalert] = useState({
    estado:false,
    mensaje:'',
    titulo:''
    });
    const ismonted = useRef(true);
    const navigate = useNavigate();
   

  
    useEffect(()=>{
        
   const token=localStorage.getItem('token')
        if(token==null){

            console.log(token)
            navigate("/", { replace: true })
        
          }

    },[])

    if(alert.estado ){
console.log(ismonted.current)
        setTimeout(() => {
        if(ismonted.current){
            setalert({
                
                estado:false,
                mensaje:'',
                titulo:''
            })
        }
            
        }, 3000);
        }
        
        useEffect(() => {
      
    
            return () => {
              ismonted.current=false
            };
          }, []);
   
    
    const comidas = useSelector(store => store.Comidas)
    
    return <>
        <Navbar />
        <div className='container-fluid inicio'>
            
        
            <div className='incio-comidas container'>
                <h2 className='text-center text-white py-2 border-bottom'>Tus Comidas</h2>
                <div className='row'>
                
                    <div className="mt-2 text-white">El precio: {comidas.precio.toFixed(2)} $ </div>
                    <div className="mt-2 text-white">El promedio de healtscore es:  {comidas.healtscore !==0 ? (comidas.healtscore/comidas.cantidad).toFixed(2):0}</div>
                    <div className="mt-2 text-white">El promedio de preparacion es: {comidas.readyInMinutes !==0 ? (comidas.readyInMinutes/comidas.cantidad) :0 } minutos </div>
                    
                </div>
                {alert.estado ==true && <div className="alert" > <Alert mensaje={alert} /></div>}
                <div className="row">
{comidas.vegana.map(vega=><div key={vega.id} className="col-12 col-md-6 col-lg-3"><Card2 setalert={setalert} datas={vega}/></div>)}
{comidas.carnivora.map(vega=><div key={vega.id} className="col-12 col-md-6 col-lg-3"><Card2 setalert={setalert} datas={vega} /></div>)}
                </div>
            </div>
        </div>
    </>;
}
