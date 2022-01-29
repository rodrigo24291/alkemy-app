import React, { useEffect, useRef, useState } from 'react';
import {Toast} from 'react-bootstrap'

export default function Alert({mensaje}) {
  const [show, setShow] = useState(true);

const da=mensaje
  
  return <>
  
  <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    <strong className="me-auto">{da.titulo}</strong>
  </Toast.Header>
  <Toast.Body>{da.mensaje}</Toast.Body>
</Toast>
  
  </>;
}