import { useContext, useEffect, useState } from 'react'
import ProductCard from './Card'
import { AppContext } from '../../ContextStateManager'
import Filter from '../Filter/Filter'
import Loadding from '../Loadder/Loadding'

const ProductList = () => {
    const { productsList, filters, categoryList } = useContext(AppContext)
    const [productRecords, setProductRecords] = useState([...productsList])

    useEffect(() => {
        setProductRecords([...productsList])
    }, [productsList])

    useEffect(() => {
        filters.category != ''
            ? categoryList.includes(filters.category) &&
            setProductRecords(productsList.filter(product => product.category == filters.category))
            : setProductRecords([...productsList])

        let records;
        switch (filters.sort) {
            case 'Expesive':
                records = productRecords.sort((a, b) => {
                    if (a.price > b.price) return -1
                    if (a.price < b.price) return 1
                    return 0
                })
                setProductRecords([...records])
                break
            case 'Cheapest':
                records = productRecords.sort((a, b) => {
                    if (a.price < b.price) return -1
                    if (a.price > b.price) return 1
                    return 0
                })
                setProductRecords([...records])
                break
            case 'Popular':
                records = productRecords.sort((a, b) => {
                    if (a.rating.rate > b.rating.rate) return -1
                    if (a.rating.rate < b.rating.rate) return 1
                    return 0
                })
                setProductRecords([...records])
                break

            default:
                break
        }

        filters.search != '' &&
            setProductRecords(productsList.filter(product => product.title.toLowerCase().includes(filters.search.toLowerCase())))

    }, [filters])

    return (
        <>
            {productRecords.length > 0 && <Filter />}

            {filters.search != '' && <Header value={filters.search} />}

            <main className='container mx-auto px-8'>
                <div className=" grid gap-3 md:gap-4 lg:gap-8 mt-8 justify-center grid-cols-auto-17 sm1:grid-cols-auto-14 lg:grid-cols-auto-17 ">
                    {productRecords.length > 0 && productRecords.map(pro =>
                        <ProductCard key={pro.id} {...pro} onAdd={onclick} />
                        )}
                </div>
                {productRecords.length == 0 && <Loadding />}
                
            </main>
        </>
    )
}

export default ProductList

const Header = ({ value }) => {
    return (
        <>
            <div className="container ps-6 md:ps-8 xl:ms-24 mx-auto">Search resule for "<b> {value} </b>" </div>
        </>
    )
}