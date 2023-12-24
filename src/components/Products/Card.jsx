import { useNavigate } from 'react-router'

const ProductCard = ({ id, title, price, description, image }) => {
  const navigate = useNavigate()

  const cardClickHandel = () => {
    navigate(`/productDetailes/${id}`)
  }

  return (
    <div
      className='bg-white box-border w-auto overflow-hidden rounded-lg 
                shadow-5.2 duration-300 hover:scale-105  items-center  flex flex-col p-4 '
    >
      <div className="w-auto h-48 aspect-square rounded-md">
        <img src={image} alt="" className='h-full w-full object-contain object-center' />
      </div>
      <div className="flex flex-col justify-between p-4 cursor-pointer flex-grow" onClick={cardClickHandel}>

        <div className="text-base font-semibold md:text-lg break-words leading-[1.8em] max-h-[3.4em] overflow-hidden">
          {title}
        </div>
        <p className="text-sm text-gray-600 mt-2 md:mt-0 md:text-base leading-[1.8em] max-h-[3.4em] overflow-hidden">
          {description}
        </p>
        <div className="text-xl lg:text-2xl bg-blue-300 mt-4 md:mt-8 text-center rounded-md ">
          ${price}
        </div>
      </div>
    </div>
  )
}

export default ProductCard