import './chats.scss'
import { useEffect } from 'react'
import User from '../../components/user/User'
import Navbar from '../../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import ChatList from '../../components/chat-list/ChatList'
import ChatBox from '../../components/chat-box/ChatBox'
import { getChats } from '../../store/chats/chatsActions'

const Chats = () => {
    const { userInfo, userToken } = useSelector(state => state.auth)
    
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getChats({token: userToken}))
    }, [])
    
    return (
        <div className="container">
        <Navbar/>
        <div className="chats">
            <div className="chats__menu">
                <div className="chats__menu__user">
                    <User
                        id = {userInfo.id}
                        username = {userInfo.username}
                        urlAvatar = {userInfo.urlAvatar}
                    />
                </div>
                <ChatList/>
            </div>
            <ChatBox/>
        </div>
        </div>
    )
}

export default Chats