import React from 'react';
import { FaGlobe } from "react-icons/fa";
import "./Header.css"


export default function Header() {
  return (
    <div className='header'>
        <FaGlobe className='globe'/>
        <p className='mytravel'>My Travel Journal</p>
    
        </div>
  )
}
