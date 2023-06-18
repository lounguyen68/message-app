import './chats.scss'
import User from '../../components/user/User'
import Navbar from '../../components/navbar/Navbar'
import { useSelector } from 'react-redux'
import ChatList from '../../components/chat-list/ChatList'
import ChatBox from '../../components/chat-box/ChatBox'

const Chats = () => {
    const { userInfo } = useSelector(state => state.auth)
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