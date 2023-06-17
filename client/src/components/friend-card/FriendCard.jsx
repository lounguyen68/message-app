import { useEffect, useState } from 'react'
import User from '../../components/user/User'
import Button from '../button/Button'
import {useSelector} from 'react-redux'
import { getUser } from '../../api'
import './friend-card.scss'

const FriendCard = ({ id }) => {
    const { userToken } = useSelector(state => state.auth)
    const [user, setUser] = useState({});

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

    const handleChat = () => {}
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