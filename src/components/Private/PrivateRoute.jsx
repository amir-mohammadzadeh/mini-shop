import { useContext } from 'react'
import { AppContext } from '../../ContextStateManager'
import { Navigate } from 'react-router'

const PrivateRoute = ({ children }) => {
    const { isLogin } = useContext(AppContext)
    return (
        <>
            {isLogin ?
                children  :
                <Navigate to='/login' />
            }
        </>
    )
}

export default PrivateRoute