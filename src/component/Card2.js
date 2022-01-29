import React from 'react';
import Borrar from './Borrar';
import {Link } from "react-router-dom";

export default function Card2({datas,setalert}) {
    const data=datas

  return <>
  
  
  <div className="card my-3" >
    <img src={data.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-danger py-2 border-bottom">{data.title}</h5>
     <div className='card-text'>
      <p><span className='subtitle_plato'>Precio</span>: {data.pricePerServing}$</p>
      <p><span className='subtitle_plato'>Tiempo de preparacion:</span> {data.readyInMinutes}</p>
      <p><span className='subtitle_plato'>Precio:</span> {data.pricePerServing}</p>
      <p><span className='subtitle_plato'>HealthScore:</span> {data.healthScore}</p>
      <p><span className='subtitle_plato'> Tipo de plato:</span> {data.vegan==true ? 'Vegano' : data.vegetarian==true ? 'Vegetariana' : 'Carnivora' }</p>
      <Link className='btn btn-primary w-100' to={`/Receta2/${data.id}`}>VER MAS</Link>
      <Borrar id={data} setalert={setalert} />
      </div> 
    
    </div>
  </div>
  
  </>;
}
