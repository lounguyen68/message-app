import {useState} from 'react'
import './search.scss'
import Navbar from '../../components/navbar/Navbar'
import Input from '../../components/input/Input'
import SearchList from '../../components/search-list/SearchList'
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
                <SearchList keyword={searchInput}/>
            </div>
        </div>
    )
}

export default Search