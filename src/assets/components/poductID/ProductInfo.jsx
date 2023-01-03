import React, { useState } from 'react'

const ProductInfo = ({product}) => {
  const [quantity, setQuantity] = useState(1)

  const handlePlus = ( ) => {
    setQuantity(quantity +1)
  }

  const handleMinus = () => {
    const newValue = quantity -1
    if(newValue >= 1){
      setQuantity(newValue)
    }
  }

  return (
    <article>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <div>
          <h3>price</h3>
          <span>{product?.price}</span>
        </div>
        <div>
          <h3>Quantity</h3>
          <div>
            <div onClick={handleMinus}>-</div>
            <div>{quantity}</div>
            <div onClick={handlePlus}>+</div>
          </div>
        </div>
        <button>Add too cart <i className='bx bx-cart'></i></button>
      </footer>
    </article>
  )
}

export default ProductInfo