import './SideMenu.css'
import { useState, useEffect, useRef, useContext } from 'react'
import NavLinks from '../Sub_Components/NavLinks'
import UserMenu from '../Sub_Components/UserMenu'
import { AppContext } from '../../ContextStateManager'
import { Link } from 'react-router-dom'

const SideMenu = ({ isLogin, onClose }) => {
  const { User } = useContext(AppContext)
  const menu_ref = useRef(null)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [closeAnimation, setCloseAnimation] = useState('menu-open')

  const closeSideMenu = () => {
    setCloseAnimation(() => {
      setTimeout(() => {
        onClose()
      }, 400)
      return 'menu-close'
    })
  }
  useEffect(() => {
    const outside_clickHandler = (event) => {
      if (menu_ref.current && !menu_ref.current.contains(event.target)) {
        closeSideMenu()
      }
    }
    document.addEventListener('mousedown', outside_clickHandler)
    return () => document.removeEventListener('mousedown', outside_clickHandler)
  }, [])

  return (
    <div ref={menu_ref} className={'SideMenu ' + closeAnimation}>
      <div className="sidemenu-content">
        <div className="close-btn" onClick={closeSideMenu}>
          &#10005;
        </div>

        <div className="login-button">
          {isLogin ? (
            <div className="user-content" onClick={() => setOpenUserMenu(!openUserMenu)}>
              <i className="bi bi-person-circle"></i>
              <span>{User.username}</span>
              <i className={openUserMenu ? "bi bi-caret-right-fill rotate-90 duration-200 " : 'bi bi-caret-right-fill rotate-0 duration-200 '} ></i>
            </div>
          ) : (
            <Link to='/login' className='s-button'>
              Login / Sign up
            </Link>
          )}
          {openUserMenu && <UserMenu position='sidmenu' onClose={() => setOpenUserMenu(!openUserMenu)} />}
        </div>

        <div className="cart-button">
          <Link to='/shopping-cart' >
            <i className="bi bi-cart3"></i>
            Shopping Cart
          </Link>
        </div>

        <NavLinks position='sidemenu' />

      </div>
    </div>
  )
}

export default SideMenu