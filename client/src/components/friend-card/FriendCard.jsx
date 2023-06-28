import { useEffect, useState } from 'react'
import User from '../../components/user/User'
import Button from '../button/Button'
import {useSelector} from 'react-redux'
import { getChat, getUser } from '../../api'
import './friend-card.scss'
import { useNavigate } from 'react-router-dom'

const FriendCard = ({ id }) => {
    const { userToken, userInfo } = useSelector(state => state.auth)
    const { chats } = useSelector(state => state.chats)
    const [user, setUser] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
        try {
            const user = await getUser({ id, token: userToken });
            setUser(user);
        } catch (error) {
            console.log(error.message);
        }}
        fetchData();
        
    }, []);
    const handleChat = async () => {
        const chatId = chats.map(chat => chat.users.includes(user.id) ? chat._id : null)
        if (chatId) {
            navigate(`/chats/${chatId}`)
        } else {
            chatId =  await getChat({firstId: userInfo.id, secondId: user.id, token: userToken})
            navigate(`/chats/${chatId}`)
        }
      };
    return (
        <div className="friends__list__user">
            <User
                id = {user.id}
                username = {user.username}
                urlAvatar = {user.urlAvatar}
            />
            <Button
                className="btn__chat"
                onClick={handleChat}
            >
                Chat
            </Button>
        </div>
    )
}

export default FriendCard