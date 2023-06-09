import './user.scss'

const User = (props) => {
  return (
    <div className={`user ${props.id}`}>
        <div className={`user__img`}>
            <img src={props.urlAvatar} alt="Loading" />
        </div>
        <div className={`user__name`}>
            <p>{props.username}</p>
        </div>
    </div>
  )
}

export default User