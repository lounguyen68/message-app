import {useEffect, useState} from 'react'
import Message from '../message/Message'
import Input from '../input/Input'
import Button from '../button/Button'
import './chat-box.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages, postMessage } from '../../store/chats/chatsActions'
import ChatCard from '../chat-card/ChatCard'

const ChatBox = () => {
    const { userToken, userInfo } = useSelector(state => state.auth)
    const { loading, messages, chats } = useSelector(state => state.chats)
    const [message, setMessage] = useState('')
    const [messagesList, setMessagesList] = useState(messages)
    const { chatId } = useParams()
    const dispatch = useDispatch()
    let chat = null;
    if(chatId){
        chat = chats.filter(chat => chat._id === chatId)[0]
    }
    useEffect(() => {
        if (chatId) {
            dispatch(getMessages({chatId, token: userToken}))
        }
    }, [chatId, messagesList])

    const handleSendMessage = () => {
        dispatch(postMessage({chatId, senderId: userInfo.id, content: message,token: userToken}))
        setMessage('');
    }

    return (
        chatId 
        ?
        <div className="chats__chatbox">
                <div className="chats__chatbox__navbar">
                    <div className="chats__chatbox__navbar__user">
                        {chat ? <ChatCard id={chat._id}  users={chat.users}/> : null}
                        <div className="chats__chatbox__navbar__user__icons">
                            <div className="chats__chatbox__navbar__user__icon">
                                <i className='bx bxs-phone' ></i>
                            </div>
                            <div className="chats__chatbox__navbar__user__icon">
                                <i className='bx bxs-video' ></i>
                            </div>
                            <div className="chats__chatbox__navbar__user__icon">
                                <i className='bx bxs-info-circle' ></i>
                            </div>
                        </div>
                    </div>
                </div>
                {loading 
                ? <div style={{textAlign: 'center', width: '80%'}}> <p>Loading...</p></div>
                : <div className="chats__chatbox__content">
                    {messages.map((message) => {
                        return (
                            <Message
                                key={message._id}
                                className={message.sender === userInfo.id ? 'me' : ''}
                                id={message._id}
                                content={message.content}
                            />
                        )
                    })}
                </div>}
                <div className="chats__chatbox__sending">
                    <div className="chats__chatbox__sending__input">
                        <Input
                            type="text"
                            placeholder="Message..."
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                        />
                    </div>
                    <div className="chats__chatbox__sending__btn">
                        {loading
                        ?   <Button
                                className="btn__sending"
                            >
                                <p>Sending...</p>
                            </Button>
                        :
                            <Button
                                className="btn__sending"
                                onClick={handleSendMessage}
                            >
                                <p>Send</p>
                            </Button>
                        }
                    </div>
                </div>
        </div>
        :<div style={{textAlign: 'center', width: '80%'}}> <p>Choose a chatbox</p></div>
    )
}

export default ChatBox