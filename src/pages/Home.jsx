import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../assets/components/home/Categories'
import ProductCard from '../assets/components/home/ProductCard'
import { getAllProducts } from '../assets/store/slices/products.slice'

const Home = () => {
    const [nameProduct, setNameProduct] = useState("")
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState("")

    const products = useSelector(state => state.products)
    
    const dispatch = useDispatch ()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newName = e.target.nameProduct.value
        setNameProduct(newName)
    }

    useEffect(()=> {
        dispatch(getAllProducts())
    }, [])

    useEffect(()=> {
        setFilterProducts(products)
    },[products])

    useEffect(()=>{
        const newProducts = products.filter(product => product.title.includes(nameProduct) && (product.category.id === category || !  category) )
        setFilterProducts(newProducts)
    },[nameProduct, category])

  return (
    <main>
        <form onSubmit={handleSubmit} >
            <div>
                <input type="text" id='nameProduct' placeholder='what are you loking for?' />
                <button><i className='bx bx-search'></i></button>
            </div>
        </form>
        <Categories setCategory={setCategory}/>
        <section>
            {
                filterProducts.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </section>
    </main>
  )
}

export default Home