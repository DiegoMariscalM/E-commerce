import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const handleClickProducts = () =>{
        navigate(`/products/:${product.id}`)
    }

    const handleClickAddCart = (e) => {
        e.stopPropagation()
    }

  return (
    <article onClick={handleClickProducts}>
        <header>
            <img src={product.productImgs[0]} alt="" />
        </header>
        <div>
            <h3>{product.title}</h3>
            <h4>Price</h4>
            <span>{product.price}</span>
            <button onClick={handleClickAddCart}>
                <i className='bx bx-cart'></i>
            </button>
        </div>
    </article>
  )
}

export default ProductCard