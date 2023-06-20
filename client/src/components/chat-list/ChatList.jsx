import { useSelector } from 'react-redux';
import './chat-list.scss';
import ChatCard from '../chat-card/ChatCard';

const ChatList = () => {
    const { chats } = useSelector(state => state.chats)    
    
    return (
        <div className="chats__menu__list">
            {chats.map((chat) =>{
                return <ChatCard key={chat._id} id={chat._id} users={chat.users}/>
            }
            )}
        </div>
    )
}

export default ChatList