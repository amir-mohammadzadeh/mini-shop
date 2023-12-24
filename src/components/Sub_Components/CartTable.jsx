import './CartTable.css'
import { useContext } from 'react'
import CountInput from './CountInput'
import { AppContext } from '../../ContextStateManager'

const CartTable = () => {
    const { userCart, setUserCart } = useContext(AppContext)

    const onPluse = (id) => {
        setUserCart(userCart.map(item =>
            item.productID == id ? { ...item, count: item.count + 1 } : item
        ))
    }

    const onMinus = (id) => {
        setUserCart(userCart.map(item =>
            item.productID == id ? { ...item, count: item.count - 1 } : item
        ))
    }
    const onRemove = (id) => {
        setUserCart(userCart.filter(item => item.productID != id))
    }

    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th>image</th>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>&#10005;</th>
                </tr>
            </thead>
            <tbody>
                {userCart.map(item =>
                    <tr key={item.id}>

                        <td className='cell-1 '>
                            <img src={item.image} alt="" />
                        </td>

                        <td className='cell-2 '>{item.name.substring(0 , 25)}</td>

                        <td className='cell-3 '>
                            <CountInput value={item.count} onPluse={() => onPluse(item.productID)} onMinus={() => onMinus(item.productID)} />
                        </td>

                        <td className='cell-4 '>${item.price}</td>

                        <td className='cell-5 '>
                            <span onClick={() => onRemove(item.productID)}>
                                <i className="bi bi-trash"></i>
                            </span>
                        </td>

                        <td className='cell-6'>
                            <span className='name'>
                                {item.name.substring(0 , 20)}
                            </span>
                            <span className='priceg'>
                                ${item.price}
                            </span>
                            <div className='count-content'>
                                <span className='remove-btn' onClick={() => onRemove(item.productID)}>
                                    <i className="bi bi-trash"></i>
                                </span>
                                <CountInput value={item.count} onPluse={() => onPluse(item.productID)} onMinus={() => onMinus(item.productID)} />
                            </div>
                        </td>
                    </tr>
                )}

            </tbody>
        </table>
    )
}

export default CartTable