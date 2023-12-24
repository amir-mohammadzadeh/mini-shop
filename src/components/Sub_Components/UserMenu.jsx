import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../ContextStateManager';

const list_class = "leading-10 px-1 border-b border-slate-500 cursor-pointer hover:bg-[#314763] ";

const UserMenu = ({ position, onClose }) => {
    const { setIsLogin, User } = useContext(AppContext)
    const menu_ref = useRef(null)

    let container, button, list, hide;
    position == 'navbar' ? (
        container = 'open-animation absolute top-14 right-0 w-auto  min-w-[14rem]  z-10 bg-[#283a51] rounded-b-lg overflow-hidden',
        list = 'px-2',
        button = " py-2 border-t text-rose-300 duration-200 hover:text-red-600",
        hide = false
    ) : (
        container = '',
        list = 'px-4 py-2 border-t mt-3 text-start ',
        button = "mt-1 bg-rose-800 py-1 w-11/12 mx-auto rounded-sm ",
        hide = true
    )
    useEffect(() => {

        const outside_clickHandler = (event) => {
            if (menu_ref.current && !menu_ref.current.previousSibling.contains(event.target) && !menu_ref.current.contains(event.target)) {
                onClose()
            }
        }
        position == 'navbar' && document.addEventListener('mousedown', outside_clickHandler);

        return () => document.removeEventListener('mousedown', outside_clickHandler)
    }, [])

    const logout = () => {
        onClose()
        setIsLogin(false)
    }

    return (
        <section ref={menu_ref} className={container} >
            <div className="relative h-full flex flex-col">
                {!hide &&
                    <div className=" py-2 px-2 border-b mb-1 ">
                        <i className="bi bi-person-circle me-2"></i>
                        {User.name.firstname + ' ' + User.name.lastname}
                    </div>
                }
                <ul className={list}>
                    <li className={list_class}>Edit Account </li>
                    <li className={list_class}>My Payments</li>
                    <li className={list_class}>Saved</li>
                </ul>
                <button className={button} onClick={logout}>
                    Logout
                </button>
            </div>
        </section>
    )
}

export default UserMenu