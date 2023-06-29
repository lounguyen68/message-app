import { useEffect, useState } from 'react'
import './request-card.scss';
import avatarDefault from '../../assets/avatar_default.png'
import Button from '../../components/button/Button'
import {useSelector} from 'react-redux'
import { acceptRequest, getUser } from '../../api'
import { useNavigate } from 'react-router-dom'

const RequestCard = ({id}) => {
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

    const handleAccepted = () => {
        acceptRequest({senderId: id, accepterId: userInfo.id, token: userToken})
    }
    const handleDeleted = () => {}

    return (
        <div className="request-card">
            <div className="request-card__avatar">
                <img src={user && user.urlAvatar !== 'test' ? user.urlAvatar : avatarDefault} alt="" />
            </div>
            <div className="request-card__username">
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