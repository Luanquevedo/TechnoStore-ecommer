import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import './index.scss'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='header__logo'>TechnoStore</h1>
        <div className='header__link'>
            
            <Link to='/' className='header__linkItem'>Home <FaHome /></Link> 
            <Link to='/cart' className='header__linkItem'>Compras <FaCartShopping/></Link> 
        </div>
        
        
    </div>
  )
}

export default Header