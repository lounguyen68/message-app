import './request-list.scss'
import { useSelector } from 'react-redux'
import RequestCard from '../../components/request-card/RequestCard'

const RequestList = () => {
    const { userInfo } = useSelector(state => state.auth)
    const { friendRequests } = useSelector(state => state.friends)
    return (
        <div className="friends-request__list">
        {friendRequests.map(({sender}) =>{
                if (sender === userInfo.id) return;
                return (
                    <RequestCard
                        key={sender}
                        id={sender}
                    />   
                )
        })}  
        </div>
    )
}

export default RequestList