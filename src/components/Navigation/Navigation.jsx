import { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox'
import SideMenu from '../SideMenu/SideMenu'
import NavLinks from '../Sub_Components/NavLinks'
import UserMenu from '../Sub_Components/UserMenu'
import { AppContext } from '../../ContextStateManager'

const Navigation1 = () => {
    const navigate = useNavigate()
    const {isLogin , userCart} = useContext(AppContext)
    const [openSearchBox, setOpenSearchBox] = useState(false)
    const [openSideMenu, setOpenSideMenu] = useState(false)
    const [openUserMenu, setOpenUserMenu] = useState(false)

    const goToLogin = ()=>{
        navigate('/login')
    }
    
    return (
        <>
            <nav className='bg-[#19283b] text-gray-100 box-border w-full h-20 pt-0 px-8 xl:px-24 '>
                <div className="container flex items-center mx-auto gap-4 h-full ">
                    <div className="">
                        <h1>Amir</h1>
                    </div>

                    <NavLinks position='navbar' />

                    <div className="flex flex-row-reverse flex-grow justify-end items-center gap-8 mx-4 lg:flex-row lg:flex-grow-0 ">

                        <span className='cursor-pointer ' onClick={() => setOpenSearchBox(!openSearchBox)}>
                            <i className="bi bi-search"></i>
                        </span>

                        <div className="relative cursor-pointer ">
                            <NavLink to={'/shopping-cart'} >
                                <i className="bi bi-cart3" ></i>
                                {userCart.length > 0 &&
                                    <CountHolder value={userCart.length} />
                                }
                            </NavLink>
                        </div>

                        <div className="relative cursor-pointer hidden sm:inline ">
                            <i className="bi bi-heart" ></i>
                            <CountHolder value={0} />
                        </div>

                    </div>

                    <div className="relative hidden lg:block  text-xl bg-slate-500h ">
                        {!isLogin ? (
                            <button className="btn me-0 rounded-lg border-teal-500 border-2" onClick={goToLogin}>
                                Login
                            </button>
                        ) : (
                            <button
                                className=" btn me-0 px-2 py-0 leading-10 rounded-full border-teal-600 border-2"
                                onClick={()=> setOpenUserMenu(!openUserMenu)}
                            >
                                <i className="bi bi-person-fill-check" ></i>
                            </button>
                        )}

                        {openUserMenu && <UserMenu position='navbar' onClose={()=> setOpenUserMenu(false)} />}

                    </div>

                    <div className="border px-2 text-lg rounded-md cursor-pointer lg:hidden" onClick={() => setOpenSideMenu(true)}>
                        <i className="bi bi-list" ></i>
                    </div>


                </div>
            </nav>
            {openSideMenu && <SideMenu isLogin={isLogin} onClose={() => setOpenSideMenu(false)} />}
            {openSearchBox && <SearchBox onClose={() => setOpenSearchBox(!openSearchBox)} />}

        </>
    )
}

export default Navigation1

const CountHolder = ({ value }) => {
    return (
        <span className='absolute -bottom-2 left-3 md:left-5 bg-[#859cc880] rounded-full 
        w-6 h-6 text-base flex justify-center items-center '>
            {value}
        </span>
    )
}