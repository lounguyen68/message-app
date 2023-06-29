import React, { useEffect } from 'react'
import './search-list.scss'
import { useSelector, useDispatch } from 'react-redux'
import { searchUsers } from '../../store/search/searchActions'
import SearchCard from '../search-card/SearchCard'


const SearchList = ({keyword}) => {
    const { users } = useSelector(state => state.search)
    const { userInfo, userToken } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    useEffect(() => {
      if (keyword) {
        dispatch(searchUsers({token: userToken, keyword}))
      }
    }, [keyword])

    return (
        <div className="search__list">
                        {
                            users.map((user) =>{
                                if (user._id !== userInfo.id && !user.friends.includes(userInfo.id))
                                    return <SearchCard user={user} key={user._id}/>
                            })
                        }
        </div>
    )
}

export default SearchList