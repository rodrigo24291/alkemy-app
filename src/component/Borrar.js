import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { borrarcomidas } from '../reducer/ComidasReducer';

export default function Borrar({id}) {
  const dispatch=useDispatch()
  let ids=id
    const handeldelete=({})=>{
      console.log(ids)
 dispatch(borrarcomidas(ids))
    }
  return <>
  
  <button className='btn btn-danger  w-100 my-3' onClick={handeldelete}>Borrar</button>

  
  </>;
}
