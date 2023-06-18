import User from '../user/User';
import './chat-list.scss';

const ChatList = () => {
    return (
        <div className="chats__menu__list">
            <User
                id = 'test'
                username = 'long1244'
                urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
            />   
        </div>
    )
}

export default ChatList