import { useEffect, useState } from 'react'
import User from '../../components/user/User'
import Button from '../button/Button'
import {useSelector} from 'react-redux'
import { getChat, getUser } from '../../api'
import './friend-card.scss'
import { useNavigate } from 'react-router-dom'

const FriendCard = ({ id }) => {
    const { userToken, userInfo } = useSelector(state => state.auth)
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
        // try { 
        //   console.log('test');
        //   const chatData = await getChat({firstId: userInfo.id, secondId: user.id, token: userInfo.id});
        //   console.log(chatData);
        //   navigate(`/chats/${chatData._id}`);
        // } catch (error) {
        //   console.log(error.message);
        // }
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