import React from 'react';
import {Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { agregarcomidas } from '../reducer/ComidasReducer';



export default function Card({data,setalerta,alerta}) {
    const dispatch = useDispatch()
    const comidas = useSelector(store => store.Comidas)

const handelclick=()=>{
if(!data.vegan && comidas.carnivora.length<1 || !data.vegan && comidas.carnivora[0].id !==data.id)
 {
  dispatch(agregarcomidas(data))
  setalerta({
    estado:true,
    mensaje:'Comida carnivora agregada',
    titulo:'Exito!'
    
  })

}

else if(data.vegan && comidas.vegana.length<1 || data.vegan && comidas.vegana[0].id !==data.id)
 {
  dispatch(agregarcomidas(data))
  setalerta({
    estado:true,
    mensaje:'Comida vegana agregada',
    titulo:'Exito!'
  })
}
if( data.vegan && comidas.vegana.length==2){
  setalerta({
    estado:true,
    mensaje:'Comida vegana llena',
    titulo:'Error'
  })
}


if( !data.vegan && comidas.carnivora.length==2){
  setalerta({
    estado:true,
    mensaje:'Comida carnivora llena',
    titulo:'Error'
  })
}
}

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
    </div> 
    
    <button className='btn btn-success w-100 my-3' onClick={handelclick}>AGREGAR</button>
    <Link className='btn btn-primary w-100' to={`/Receta/${data.id}`}>VER MAS</Link>
  </div>
</div>
  
  
  </>;
}
