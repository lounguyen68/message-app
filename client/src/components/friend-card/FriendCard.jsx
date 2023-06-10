import './friend-card.scss';
import avatarDefault from '../../assets/avatar_default.png'

const FriendCard = (props) => {
  return (
    <div className="friend-card">
      <div className="friend-card__avatar">
        <img src={props.urlAvatar ? props.urlAvatar : avatarDefault} alt="" />
      </div>
      <div className="friend-card__username">
        {props.username}
      </div>
      {props.children}
    </div>
  )
}

export default FriendCard