import style from './Filter.module.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../ContextStateManager'

const Filter = () => {
    const {filters, setFilters} = useContext(AppContext)
    const [openPanel, setOpenPanel] = useState(false)
    const [filter, setFilter] = useState('Sort by')

    useEffect(()=>{
        filters.sort == '' && setFilter('Sort by')
    },[filters])
    const onSelect = (event) => {
        setOpenPanel(() => {
            setFilter(event.target.textContent)
            return false
        })
        setFilters({...filters , sort: event.target.textContent })
    }
    
    return (
        <section className={['container', style['filter-content']].join(' ')}>
            <div className={style["select"]}>
                <div className={style['select-button']} onClick={() => setOpenPanel(!openPanel)}>
                    <span>{filter}</span>
                    <i className={openPanel ? "bi bi-caret-down-fill rotate-180" : "bi bi-caret-down-fill rotate-0"}></i>
                </div>
                {openPanel &&
                    <Menu onSelect={onSelect} onClose={()=>setOpenPanel(false)} />
                }

            </div>
        </section>
    )
}

export default Filter


const Menu = ({onSelect , onClose }) => {
    const menu_ref = useRef(null)
    useEffect(() => {

        const outside_clickHandler = (event) => {
            if (menu_ref.current && !menu_ref.current.previousSibling.contains(event.target) && !menu_ref.current.contains(event.target)) {
                onClose()
            }
        }
        document.addEventListener('mousedown', outside_clickHandler);
        return () => document.removeEventListener('mousedown', outside_clickHandler)
    }, [])

    return (
        <div ref={menu_ref} className={style["select-content"]}>
            <ul>
                <li className={style["item"]} onClick={onSelect}>Sort by</li>
                <li className={style["item"]} onClick={onSelect}>Expesive</li>
                <li className={style["item"]} onClick={onSelect}>Cheapest</li>
                <li className={style["item"]} onClick={onSelect}>Popular</li>
            </ul>
        </div>
    )
}