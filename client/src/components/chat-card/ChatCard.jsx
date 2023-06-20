import User from '../user/User';
import { getUser } from '../../api';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './chat-card.scss'
import { Link } from 'react-router-dom';

const ChatCard = ({ id, users}) => {
    const { userToken, userInfo } = useSelector(state => state.auth)
    const [user, setUser] = useState({});
    const userId = users[0] !== userInfo.id ? users[0] : users[1]
    useEffect(() => {
        async function fetchData() {
        try {
            const user = await getUser({ id: userId, token: userToken });
            setUser(user);
        } catch (error) {
            console.log(error.message);
        }}
        fetchData();
    }, []);
    return (
        <Link to={`/chats/${id}`}>
            <div className="chat-card" id={id}>
                <User
                    id = {user.id}
                    username = {user.username}
                    urlAvatar = {user.urlAvatar}
                />
            </div>
        </Link>
    )
}

export default ChatCard