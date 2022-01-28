import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Card2 from './Card2';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";


export default function Inicio() {
    const navigate = useNavigate();
    
  
    useEffect(()=>{
        
   const token=localStorage.getItem('token')
        if(token==null){

            console.log(token)
            navigate("/", { replace: true })
        
          }

    },[])
    const comidas = useSelector(store => store.Comidas)
console.log(comidas)
    
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
                <div className="row">
                    
{comidas.vegana.map(vega=><div className="col-12 col-md-6 col-lg-3"><Card2 datas={vega}/></div>)}
{comidas.carnivora.map(vega=><div className="col-12 col-md-6 col-lg-3"><Card2 datas={vega} /></div>)}
                </div>
            </div>
        </div>
    </>;
}
