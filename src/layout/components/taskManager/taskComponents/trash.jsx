import React from 'react';
import NonElement from '../taskContent/nonElement/nonElement';
import { FaTrashAlt } from "react-icons/fa";
import HeaderTask from '../taskContent/headerTask/headerTask';



function Trash(){
    return (
    <>
    <HeaderTask title="Trash"/>
      <NonElement 
          icon = { <FaTrashAlt size="120"/>} 
          title = "You can find deleted tasks here."
          text = "No deleted task yet." />
      </>
    );
   
    
};

export default Trash;