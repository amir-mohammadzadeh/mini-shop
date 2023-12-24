import { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router'
import CountInput from '../Sub_Components/CountInput'
import { AppContext } from '../../ContextStateManager'
import { Link } from 'react-router-dom'


const ProductDetailes = () => {
    const { productsList, userCart, setUserCart } = useContext(AppContext)
    const [order, setOrder] = useState(0)
    const productId = useParams()
    const product = productsList.find(i => i.id == productId.productID)

    useEffect(() => {
        let p = userCart.find(item => item.productID == productId.productID)
        p && setOrder(p.count)
    }, [])

    useEffect(() => {
        let p = userCart.find(item => item.productID == productId.productID)
        p ? setOrder(p.count) : setOrder(0)
    }, [userCart])


    const onAddToCart = () => {
        setOrder(previousOrder => {
            const neworder = {
                id: userCart.length + 1,
                productID: productId.productID,
                count: 1,
                name: product.title,
                price: product.price,
                image: product.image,
            }
            setUserCart([...userCart, neworder])
            return previousOrder + 1
        })
    }

    const onPluse = () => {
        setUserCart(userCart.map(item =>
            item.productID == product.id ? { ...item, count: item.count + 1 } : item
        ))
    }

    const onMinus = () => {
        setUserCart(userCart.map(item =>
            item.productID == product.id ? { ...item, count: item.count - 1 } : item
        ))
    }

    const onRemove = () => {
        setUserCart(userCart.filter(item => item.productID != product.id))
    }

    return (
        <>
            {product == undefined ? (
                <Navigate to='PageNotFound' />
            ) : (
                <main>
                    <div className="container px-5 sm:px-10  xl:px-28 mx-auto my-4 ">
                        <div className="my-6 flex items-center gap-2">
                            <Link to={-1}>
                                <i className="bi bi-arrow-left"></i>
                                Back
                            </Link>
                        </div>
                        <div className="bg-white box-border p-8 shadow-101 rounded-2xl ">
                            <div className="flex flex-col justify-start items-center lg:gap-10 lg:flex-row ">
                                <div className="flex-shrink basis-2/5 h-96 py-2">
                                    <img src={product.image} alt="" className="w-full h-full object-contain object-center" />

                                </div>
                                <div className="relative flex-grow lg:py-12 basis-3/5">
                                    <h3 className='text-base font-bold md:text-lg lg:text-xl my-6'>
                                        {product.title}
                                    </h3>
                                    <p className="text-base text-gray-600 mb-4 ">
                                        {product.description}
                                    </p>

                                    <div className="lg:absolute top-0 right-0 text-xl ">
                                        <i className="bi bi-star-fill text-yellow-500 me-2 " ></i>
                                        {product.rating.rate}
                                        <span className='text-slate-500 border-l-2 ms-2 text-base '> {product.rating.count} </span>
                                    </div>
                                    <div className="text-4xl text-rose-800 font-bold my-8 ">
                                        ${product.price}
                                    </div>
                                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0">

                                        {order == 0 ? (
                                            <button className='btn bg-blue-600 text-white w-full sm:w-48 mx-0' onClick={onAddToCart}>
                                                Add to Cart
                                            </button>
                                        ) : (
                                            <div className='flex flex-row-reverse gap-3 self-start items-center sm:flex-row '>
                                                <div className="cursor-pointer text-xl " onClick={onRemove}>
                                                    <i className="bi bi-trash"></i>
                                                </div>
                                                <div className="w-36 me-4 ">
                                                    <CountInput value={order} onMinus={onMinus} onPluse={onPluse} />
                                                </div>
                                            </div>
                                        )}

                                        <div className="text-2xl self-start">
                                            <button className="btn bg-slate-200 text-lg ">
                                                <i className="bi bi-heart me-2 " ></i>
                                                Favorite
                                            </button>
                                            <span className="cursor-pointer">
                                                <i className="bi bi-share" ></i>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            )}
        </>
    )
}

export default ProductDetailes