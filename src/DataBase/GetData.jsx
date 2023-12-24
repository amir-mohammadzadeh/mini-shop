export const getDataFromAPI = async ()=>{
    const API = 'https://fakestoreapi.com/products'
    const response = await fetch(API)
    const PRODUCTS = await response.json()
    return PRODUCTS
}

export const getUsersList = async()=>{
    const API = 'https://fakestoreapi.com/users?limit=3'
    const response = await fetch(API)
    const Users = await response.json()
    return Users
}

export const getDatas = async(data)=>{
    const API = 'https://fakestoreapi.com/' + data
    const response = await fetch(API)
    const Data = await response.json()
    return Data
}
