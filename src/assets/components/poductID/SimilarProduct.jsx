import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../home/ProductCard'

const SimilarProduct = ({categories, product}) => {
    const [productsByCategory, setProductsByCategory] = useState([])

    useEffect(()=>{
        if(categories && product) {
            const category = categories.filter(category => category.name === product.category)

            const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${category[0].id}`
            axios.get(URL)
            .then(res => {
                const productsFilter = res.data.data.products.filter(prductCategory => prductCategory.id === product.id)
                setProductsByCategory(productsFilter)
            })
            .catch(err => console.log(err))
            }
    },[categories, product])

  return (
    <section>
        {
            productsByCategory.map(productByCategory => <ProductCard product={productByCategory}  key={productByCategory.id}/>)
        }
    </section>
  )
}

export default SimilarProduct