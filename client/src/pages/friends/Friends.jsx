import { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './friends.scss'
import FriendList from '../../components/friend-list/FriendList'
import RequestList from '../../components/request-list/RequestList'
import { useSelector, useDispatch } from 'react-redux'
import { getFriends } from '../../store/friends/friendsActions'



const Friends = () => {
    // const { friends, friendRequests } = useSelector(state => state.friends)
    const { userToken } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFriends({token: userToken}))
    }, [])

    return (
        <div className="container">
            <Navbar/>
            <div className="container__friend">
                <div className="friends">
                    <div className="friends__header">
                        <h3>Your Friends</h3>    
                    </div>
                    <FriendList/>
                </div>
                <div className="friends-request">
                    <div className="friends-request__header">
                        <h3>Requests</h3>    
                    </div>
                    <RequestList/>
                </div>
            </div>
        </div>
    )
}

export default Friends