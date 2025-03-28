import { useState } from "react";

import './Modal.css';

function Modal({data,children}) {

  const [isOpen,setIsOpen] = useState(false)

  const handleClick = ()=>{
    setIsOpen((prev)=>!prev)
  }
  return <>
  {isOpen && <div className="container">
    <div className="data"> {data} </div>
    <div className="close-btn"><button onClick={handleClick}>Close</button></div></div>
   }
  <button onClick={handleClick}>{children}</button>
  </>;
}

export default Modal;
