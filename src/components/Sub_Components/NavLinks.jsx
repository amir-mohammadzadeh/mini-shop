import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Category_List from './Category_List';

const NavLinks = ({ position , close=null}) => {

    const [openCategory, setOpenCategory] = useState(false)
    let container, item, dropdown, icon;

    position == 'sidemenu' ? (
        container = 'py-4',
        item = 'leading-10 mb-1 hover:bg-[#213146]',
        dropdown = ' relative flex justify-between items-center',
        icon = <i className={openCategory ? "bi bi-caret-right-fill duration-200 rotate-90" : 
                                            "bi bi-caret-right-fill duration-200 rotate-0"} ></i>
    ) : (
        container = 'flex-grow hidden lg:flex items-center gap-8 ms-4 pt-4r text-xl ',
        item = '',
        dropdown = ' relative flex gap-2 ',
        icon = <i className={openCategory ? "bi bi-caret-down-fill text-base self-end duration-200 rotate-180" :
                                            "bi bi-caret-down-fill text-base self-end duration-200 rotate-0"} ></i>
    )
    const closeSideMenu = ()=>{
        position == 'sidemenu' && close()
    }

    return (
        <>
            <ul className={container}>
                <li className={item}>
                    <NavLink to='/mini-shop/' className='block' onClick={closeSideMenu}>
                        Home
                    </NavLink>
                </li>
                <li className={item + dropdown} onClick={() => setOpenCategory(!openCategory)}>
                    <div to='/' className='block flex-grow cursor-pointer' >
                        Category
                    </div>
                    {icon}
                    {openCategory && <Category_List position={position} onClose={() => setOpenCategory(false)} />}
                </li>
                <li className={item}>
                    <NavLink to='/about' className='block'  onClick={closeSideMenu} >
                        About
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavLinks