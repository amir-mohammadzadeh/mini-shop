import './CartPage.css'
import { useContext, useEffect, useState } from 'react'
import CartTable from '../Sub_Components/CartTable'
import { AppContext } from '../../ContextStateManager'
import { Link, useNavigate } from 'react-router-dom'
const CartPage = () => {
    const navigate = useNavigate()
    const { userCart } = useContext(AppContext)
    const [totals , setTotals] = useState({})
    
    useEffect(() => {
        setTotals(()=>{
            let [p , c] = [0 , 0]
            userCart.forEach(item => {
                p += (Number(item.count) * Number(item.price) )
                c += Number(item.count)
            })
            return { price: p , items: c }
        })

    }, [userCart])
    
    const onCheckoutClick=()=>{
        userCart.length ? navigate('/payment')
        : alert('Your shopping cart is empty!')
    }

    return (
        <main>
            <h2 className="main-header">Shopping Cart</h2>
            <div className="container main-container">
                <section className="cart">
                    <div className="table-content">
                        <CartTable />
                    </div>
                </section>
                <section>
                    <div className="summery-content ">
                        <div className="code-box">
                            <label htmlFor="giftCode"> Discount Code :</label>
                            <input id='giftCode' type="text" placeholder='Gift or coupen code' />
                            <span className='checkBTn'>
                                &#10003;
                            </span>
                        </div>
                        <hr className='line' />
                        <div className="txt-content">

                            <div className="d-f">
                                <span> Items: </span>
                                <span> {totals.items} </span>
                            </div>
                            <div className="d-f">
                                <span>Subtotal:</span>
                                <span>{totals.price}</span>
                            </div>
                            <div className="d-f total-price">
                                <span>Total:</span>
                                <span>{totals.price}</span>
                            </div>
                        </div>
                        <hr className='line' />

                        <div className="buttons-box">
                            <button className='button-1' onClick={onCheckoutClick} >
                                Checkout
                            </button>
                            <Link to={-1} className='button-2' >
                                <i className="bi bi-arrow-left"></i>
                                Back to shope
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default CartPage