import React from 'react'
import { getItem, setItem } from '../../services/LocalStoragefuncs'
import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import Header from '../../components/header';
import './index.scss'


const Cart = () => {
    const [data, setData]= useState(getItem('carrinhoItem') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoItem', arrFilter)
    }
  return (
    <div className='cart'>
        <Header/>
        <div className='cart__itens'>

        </div>
        {
            data.map((e) =>(
            <div className='cart__card'>
                <h4>{e.title}</h4>
                <img src={e.thumbnail} />
                <h4>R$:{e.price} </h4>
                <button onClick={() => removeItem(e)}>
                    <FaTrashAlt />
                    </button>
            </div>
        ))
        }
    </div>
  )
}

export default Cart