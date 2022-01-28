import React, { useEffect } from 'react';
import { useParams,useNavigate } from "react-router";


import { useSelector } from 'react-redux'

export default function Recetaid() {
    const navigate = useNavigate();
    
   const token=localStorage.getItem('token')
   
    useEffect(()=>{
        if(token==null){

            navigate("/", { replace: true })
        
          }

    },[])
    
    const id = useParams()
    let valor = []
    const api = useSelector(store => store.api)
    const data = api.api.data.results.filter(receta => receta.id == id.id)
    console.log(data)
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
