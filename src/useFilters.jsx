import { useContext } from 'react'
import { AppContext } from './ContextStateManager';



const useFilters = () => {

    const { productsList, filters, categoryList } = useContext(AppContext)


    filters.category != 'All' ?
        categoryList.includes(filters.category) &&
        setPr(products.filter(product => product.category == filters.category)) :
        setPr([...products])

    let records;
    switch (filters.sort) {
        case 'Expesive':
            records = productslistr.sort((a, b) => {
                if (a.price > b.price) return -1
                if (a.price < b.price) return 1
                return 0
            })
            setPr([...records])
            break
        case 'Cheapest':
            records = productslistr.sort((a, b) => {
                if (a.price < b.price) return -1
                if (a.price > b.price) return 1
                return 0
            })
            setPr([...records])
            break
        case 'Popular':
            records = productslistr.sort((a, b) => {
                if (a.rating.rate > b.rating.rate) return -1
                if (a.rating.rate < b.rating.rate) return 1
                return 0
            })
            setPr([...records])
            break
        default:
            break
    }

}

export default useFilters