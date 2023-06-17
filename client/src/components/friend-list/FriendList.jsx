
import { useSelector } from 'react-redux'
import FriendCard from '../friend-card/FriendCard'
import './friend-list.scss'

const FriendList = () => {
    const { friends } = useSelector(state => state.friends)
    return (
        <div className="friends__list">
            {friends.map(id =>{
                return (
                    <FriendCard
                        key={id}
                        id={id}
                    />   
                )
            })}     
        </div>
    )
}

export default FriendList