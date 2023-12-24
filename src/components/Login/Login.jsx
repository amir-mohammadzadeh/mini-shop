import { useContext, useEffect, useState } from 'react'
import { getUsersList } from '../../DataBase/GetData'
import { AppContext } from '../../ContextStateManager'
import { useNavigate } from 'react-router'
import Loadding from '../Loadder/Loadding'

const Login = () => {
    const navigate = useNavigate()
    const {setIsLogin , setUser} = useContext(AppContext)
    const [userList, setUserList] = useState([])

    useEffect(() => {
        getUsersList().then(list => {
            setUserList(list)
        })
    }, [])

    const onLoginHandel =(id)=>{
        const userinfo =userList.find(i => i.id == id)
        setIsLogin(true)
        setUser(userinfo)
        navigate('/')
    }

    return (
        <main className=' flex justify-center'>
            <div className="cantainer text-center my-10" >
                <div className="font-semibold mb-4" >
                    Sorry, Login page isn't aviable
                </div>
                <div className="mb-6 px-6 max-w-3xl">
                    <p>
                        متاسفانه این قسمت در حال حاضر آماده نیست ولی شما میتوانید از اکانت های آماده که در ادامه قرار دارد استفاده کرده و لاگین کنید
                    </p>
                </div>
                <ul className="flex gap-4 justify-center flex-col sm1:flex-row w-4/5 mx-auto">
                    {!userList.length && <Loadding />}

                    {userList.map(user =>
                        <li 
                            onClick={()=>onLoginHandel(user.id)}
                            key={user.id}
                            className="btn border px-8 duration-300 shadow-inner sm1:shadow-xl
                                     hover:border-blue-700 hover:bg-cyan-50"
                        >
                            {user.username}
                        </li>

                    )}
                </ul>
            </div>
        </main>
    )
}

export default Login