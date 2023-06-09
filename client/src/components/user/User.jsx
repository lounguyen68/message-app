import './user.scss'
import avatarDefault from '../../assets/avatar_default.png'

const User = (props) => {
  return (
    <div className={`user ${props.id}`}>
        <div className={`user__img`}>
            <img src={props.urlAvatar ? props.urlAvatar : avatarDefault} alt="Loading" />
        </div>
        <div className={`user__name`}>
            <p>{props.username}</p>
        </div>
    </div>
  )
}

export default User