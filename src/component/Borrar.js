import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { borrarcomidas } from '../reducer/ComidasReducer';

export default function Borrar({id,setalert}) {
  const dispatch=useDispatch()
  let ids=id
    const handeldelete=({})=>{
 dispatch(borrarcomidas(ids))
 setalert({
  estado:true,
  mensaje:'Comida Borrada',
  titulo:'Exito!'

 })
    }
  return <>
  
  <button className='btn btn-danger  w-100 my-3' onClick={handeldelete}>Borrar</button>

  
  </>;
}
