import { useContext } from 'react'
import { AppContext } from '../../ContextStateManager'

const Payment = () => {
    const { User, userCart } = useContext(AppContext)

    let [items, price] = [0, 0]
    userCart.forEach(item => {
        price += (Number(item.count) * Number(item.price))
        items += Number(item.count)
    })

    return (
        <main className='h-80 my-8'>
            <div className="container flex flex-col justify-center items-center">
                <h1 className='mb-8'>
                    Payment state
                </h1>
                <p className='max-w-2xl'>
                    Hi <b>{User.name.firstname + ' ' + User.name.lastname}</b>, you have
                    <b> {items} </b>
                    items in your shopping cart and the amount you have to pay is
                    <b> ${price} </b> <br />
                    Thank you for your purchase.
                </p>
            </div>
        </main>
    )
}

export default Payment