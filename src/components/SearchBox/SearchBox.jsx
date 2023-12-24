import './SearchBox.css'
import { useContext, useState } from 'react'
import { useRef, } from 'react'
import { AppContext } from '../../ContextStateManager'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const SearchBox = ({ onClose }) => {
    const { productsList, setFilters, filters } = useContext(AppContext)
    const [results, setResults] = useState([])
    const searchBox_REF = useRef(null)
    const search_input = useRef(null)
    const navigate = useNavigate()

    const close_SearchBox = (event) => {
        if (searchBox_REF.current && !searchBox_REF.current.contains(event.target)) {
            onClose()
        }
    }

    const onChangeHandler = (event) => {
        event.target.value == ''
            ? setResults([])
            : setResults(productsList.filter(product => product.title.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    const onSearch = () => {
        const input = search_input.current.value
        navigate(`/products/?search=${input}`)
        setFilters({ ...filters, search: input })
        onClose()
    }

    return (
        <section className='search-container' onClick={close_SearchBox}>
            <div className='search-box' ref={searchBox_REF}>
                <div className="headerr">
                    <span onClick={onSearch}>
                        <i className="bi bi-search" ></i>
                    </span>
                    <input ref={search_input} type="search" className='search-input' placeholder='Search...' onChange={onChangeHandler} />
                </div>

                <ul className="results">
                    {results && results.map((result, i) =>
                        <li
                            onClick={onClose}
                            key={i}
                            className="result">
                            <Link to={`/productDetailes/${result.id}`} className='block'>
                                {result.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default SearchBox