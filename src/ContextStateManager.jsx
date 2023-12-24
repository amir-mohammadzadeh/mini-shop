import { createContext, useEffect, useState } from 'react'
import { getDataFromAPI, getDatas } from './DataBase/GetData';

export const AppContext = createContext();

const ContextStateManager = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [User, setUser] = useState({})
  const [productsList, setProductsList] = useState([])
  const [userCart, setUserCart] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [filters, setFilters] = useState({category:'', sort: '' , search:''})

  useEffect(() => {
    
    getDataFromAPI().then(products =>{
        setProductsList(products)
    })
    getDatas('products/categories').then(category =>{
      setCategoryList(category)
    })

  }, [])

  return (
    <AppContext.Provider value={{
      isLogin,
      setIsLogin,
      User,
      setUser,
      productsList,
      setProductsList,
      userCart,
      setUserCart,
      categoryList, 
      filters, 
      setFilters
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextStateManager