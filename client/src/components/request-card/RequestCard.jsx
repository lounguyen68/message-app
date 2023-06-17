import { useEffect, useState } from 'react'
import './request-card.scss';
import avatarDefault from '../../assets/avatar_default.png'
import Button from '../../components/button/Button'
import {useSelector} from 'react-redux'
import { getUser } from '../../api'

const RequestCard = ({id}) => {
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

    const handleAccepted = () => {}
    const handleDeleted = () => {}

    return (
        <div className="friend-card">
            <div className="friend-card__avatar">
                <img src={user && user.urlAvatar ? user.urlAvatar : avatarDefault} alt="" />
            </div>
            <div className="friend-card__username">
                {user.username}
            </div>
            <Button
                className="btn__acp"
                onClick={handleAccepted}
            >
                Accept
            </Button>
            <Button
                className="btn__del"
                onClick={handleDeleted}
            >
                Delete
            </Button>
        </div>
    )
}

export default RequestCard