import { lazy, Suspense, useEffect, useState } from 'react'
import axios from '../API/AxiosConfig'
const ProductCard = lazy(() => import('../components/shop/ProductCard'))
import ProductCardSkeleton from '../components/shop/ProductCardSkeleton';
import { useLocation, useParams } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const Categories = () => {
    const lenis = useLenis()

    const { cat } = useParams()
    const [products, setproducts] = useState([]);
    const [SelectCat, setSelectCat] = useState("");

    const catData = async () => {
        try {
            const { data } = await axios.get(`/products/category/${cat}`)
            setproducts(data?.products)
            // console.log(data)
        } catch (error) {
            console.log(error)

        }
    }
    const SelectCatData = async () => {
        try {
            const { data } = await axios.get(`/products/category/${SelectCat}`)
            setproducts(data?.products)
            // console.log(data)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        lenis.scrollTo(0,0)
        catData()
    }, [])

    useEffect(() => {
        SelectCatData()
    }, [SelectCat])


    return (
        <div className='w-full mt-10 md:pl-12 md:pr-12 md:pt-5 pt-3 pl-8 pr-8 font-[font-1]'>
            <h1 className='lg:text-9xl text-5xl '>Categories</h1>

            <div className='w-full mt-15'>
                <div className='w-full h-px bg-black'></div>
                <div className='flex items-center p-4 gap-8'>
                    <h1 onClick={() => setSelectCat('womens-dresses')} className={`text-pretty hover:text-gray-500/50 duration-500 transition-all` }>Clothes</h1>
                    <h1 onClick={() => setSelectCat('womens-shoes')} className='text-pretty hover:text-gray-500/50 duration-500 transition-all'>Shoes</h1>
                    <h1 onClick={() => setSelectCat('womens-jewellery')} className='text-pretty hover:text-gray-500/50 duration-500 transition-all'>Accessories</h1>
                </div>
                <div className='w-full h-px bg-black'></div>
            </div>

            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.length == 0 ? 
                    Array.from({length : 3}).map((_, i) => (

                        <ProductCardSkeleton key={i}/>
                    ))
                    :
                    products.map((product) => (
                        <Suspense
                            key={product.id}
                            fallback={
                                <ProductCardSkeleton />
                            }
                        >
                            <ProductCard product={product} />
                        </Suspense>
                    ))
            }
            </div>
        </div>
    )
}

export default Categories