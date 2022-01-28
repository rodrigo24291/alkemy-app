import React, { useEffect, useRef } from 'react';
import {Toast} from 'react-bootstrap'

export default function Alert({mensaje}) {
const da=mensaje.mensaje 
  
  return <>
  
  <Toast>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    <strong className="me-auto">Error</strong>
  </Toast.Header>
  <Toast.Body>{da}</Toast.Body>
</Toast>
  
  </>;
}