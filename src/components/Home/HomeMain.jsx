import { useContext, useEffect } from 'react'
import ProductList from '../Products/ProductList'
import { AppContext } from '../../ContextStateManager'

const HomeMain = () => {
  const {setFilters} = useContext(AppContext)

  useEffect(()=>{
    setFilters({category:'', sort: '' , search:''})
  },[])

  return (
    <>
      <ProductList />
    </>
  )
}

export default HomeMain