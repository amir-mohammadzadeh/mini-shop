import { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../ContextStateManager';
//const category_list = ["electronics", "jewelery", "men's clothingd", "women's clothing"];

const Category_List = ({ position, onClose }) => {
    const menu_ref = useRef(null)
    const navigate = useNavigate()
    const { setFilters ,categoryList} = useContext(AppContext)
    let container;
    position == 'navbar' ? container = 'top-12 left-0 w-auto' : container = 'top-10 right-0 w-full';

    useEffect(() => {
        const outside_clickHandler = (event) => {
            if (menu_ref.current && !menu_ref.current.parentElement.contains(event.target) && !menu_ref.current.contains(event.target)) {
                onClose()
            }
        }
        position == 'navbar' && document.addEventListener('mousedown', outside_clickHandler);
        return () => document.removeEventListener('mousedown', outside_clickHandler)
    }, [])

    const setCategory = (tag) => {
        tag == "All" ? (
            navigate('/')
        ) : (
            navigate(`/products/?category=${tag}`),
            setFilters({ search:'', sort:'' , category: tag })
        )
    }

    return (
        <section ref={menu_ref} className={`open-animation absolute min-w-[12rem]  z-10 bg-[#283a51] rounded-b-lg overflow-hidden ${container}`}>
            <div className="py-2">
                <ul>
                    <li
                        onClick={() => setCategory('All')}
                        className="leading-10 cursor-pointer px-4 hover:bg-[#3d587b] border-b border-slate-500"
                    >
                        All
                    </li>
                    {categoryList.map((item, index) =>
                        <li
                            onClick={() => setCategory(item)}
                            key={index}
                            className="leading-10 cursor-pointer px-4 hover:bg-[#3d587b] border-b border-slate-500"
                        >
                            {item}
                        </li>

                    )}
                </ul>
            </div>
        </section>
    )
}

export default Category_List