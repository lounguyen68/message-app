import './search-card.scss';
import { useEffect, useState } from 'react';
import avatarDefault from '../../assets/avatar_default.png';
import Button from '../button/Button';
import { sendRequest } from '../../api';
import { useSelector } from 'react-redux'

const SearchCard = ({user}) => {
    const [request, setRequest] = useState(false)
    const { userToken, userInfo } = useSelector( state => state.auth)
    useEffect(() => {
      let check = false;
      user.friendRequests.forEach(request => {
        if (request.sender === userInfo.id) check = true;
        if (check) {
            setRequest(true);
        }
      })
    }, [request])
    
    const handleRequest = () => {
        sendRequest({senderId: userInfo.id, recipientId: user._id, token: userToken})
        setRequest(true);
    }

    return (
        <div className={`search-card`}>
            <div className="search-card__avatar">
                <img src={user && user.urlAvatar !== 'test' ? user.urlAvatar : avatarDefault} alt="" />
            </div>
            <div className="search-card__username">
                {user.username}
            </div>

            {request
            ?
            <Button
                className="btn__disabled"
            >
                Has Requested
            </Button>
            :
            <Button
                className="btn__req"
                onClick={handleRequest}
            >
                Send Request
            </Button>}
        </div>
    )
}

export default SearchCard