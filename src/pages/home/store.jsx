import React, { useState, useEffect } from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { getItem, setItem } from '../../services/LocalStoragefuncs';
import Header from '../../components/header';
import './index.scss'

const Store = () => {
    // Estado para armazenar os dados dos produtos
    const [data, setData] = useState([]);
    // Estado para armazenar os itens no carrinho, inicialmente obtidos do local storage
    const [cart, setCart] = useState(getItem('carrinhoItem') || [])

    // Efeito para buscar os dados da API assim que o componente é montado
    useEffect(() =>{
        const fetchApi = async () => {
            try {
                const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular'
                const response = await fetch(url);
                const objJson = await response.json()
                setData(objJson.results)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchApi();
    },[])

    // Função para adicionar ou remover um item do carrinho
    const handleClick = (obj) => {
        // Verifica se o item já está no carrinho
        const element = cart.find((e) => e.id === obj.id)
        if (element) {
            // Remove o item do carrinho se já estiver presente
            const arrFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrFilter)
            setItem('carrinhoItem', arrFilter)
        } else {
            // Adiciona o item ao carrinho se não estiver presente
            setCart([...cart, obj])
            setItem('carrinhoItem',[...cart, obj])
        }
    }

    // Renderiza o componente
    return (
        <div className='store'>
            <Header/>       
            <div className='store__item'>
                {/* Mapeia os dados dos produtos e renderiza cada um */}
                { 
                    data.map((e) => (
                        <div key={e.id} className='store__card'>
                            {/* Título do produto */}
                            <h4>{e.title}</h4>
                            {/* Imagem do produto */}
                            <img src={e.thumbnail} alt={e.title} />
                            {/* Preço do produto */}
                            <p><b>R$:{e.price}</b></p>
                            {/* Botão para adicionar/remover produto do carrinho */}
                            <button onClick={() => handleClick(e)}>
                                {
                                    // Verifica se o produto está no carrinho para exibir o ícone adequado
                                    cart.some((itemCart) => itemCart.id === e.id) ? (
                                        <FaCartShopping/>
                                    ) : (
                                        <FaCartPlus/>
                                    )
                                }
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Store;
