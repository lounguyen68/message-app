import {useState} from 'react'
import './search.scss'
import Navbar from '../../components/navbar/Navbar'
import Input from '../../components/input/Input'
const Search = () => {
    const [searchInput, setSearchInput] = useState('')

    return (
        <div className="container">
            <Navbar/>
            <div className="search">
                <div className="search__input">
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
                <div className="search__list">
                    
                </div>
            </div>
        </div>
    )
}

export default Search