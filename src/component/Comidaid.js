import React, { useEffect } from 'react';

import { useParams,useNavigate } from "react-router";

import { useSelector } from 'react-redux'

export default function Comidaid() {
    const navigate = useNavigate();
    
   const token=localStorage.getItem('token')
  
    useEffect(()=>{
        if(token==null){

            navigate("/", { replace: true })
        
          }

    },[])
    const id = useParams()
    
    let data=null
    
    let valor = []

    
    const comida = useSelector(store => store.Comidas)
    const vegana=comida.vegana.filter(vegan=>vegan.id==id.id)
    const Carnivora=comida.carnivora.filter(carnivor=>carnivor.id==id.id)

    if(vegana.length==1){
        data=vegana
    }
    else{
        data=Carnivora
    }
    return <>
        <>



            <div className='container-fluid inicio '>
                <div className='container '>
                    {data.map(da => (<h2 className='text-center text-white py-4'>{da.title}</h2>))}
                    <div className='row d-flex flex-column justify-content-center align-items-center'>
                        {data.map(datas => (
                            <div className='col-12 col-md-8'>
                                <div className="card" >
                                    <img src={datas.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        {datas.analyzedInstructions.map(ingredientes => {
                                            valor = ingredientes.steps
                                        })}
                                        <div className="card-text">
                                            <h4 className='py-2 ingre_title'>Preparacion</h4>

                                            {valor.map(valores => (<p>{valores.number}) {valores.step} </p>

                                            ))}


                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>


            </div>


        </>;

    </>;
}
