import {useState} from 'react'
import User from '../user/User'
import Message from '../message/Message'
import Input from '../input/Input'
import Button from '../button/Button'
import './chat-box.scss'

const ChatBox = () => {
    const [message, setMessage] = useState('')

    return (
        <div className="chats__chatbox">
                <div className="chats__chatbox__navbar">
                    <div className="chats__chatbox__navbar__user">
                        <User
                            id = 'test2'
                            username = 'longhaothien'
                            urlAvatar = ''
                        />
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
                <div className="chats__chatbox__content">
                    <Message
                        className={'test1' === 'test2' ? 'me' : ''}
                        id='test1'
                        content='Hello'
                    />
                    <Message
                        className={'test2' === 'test2' ? 'me' : ''}
                        id='test2'
                        content='Hello2'
                    />
                    <Message
                        className={'test2' === 'test2' ? 'me' : ''}
                        id='test2'
                        content='Hello3'
                    />
                    <Message
                        className={'test1' === 'test2' ? 'me' : ''}
                        id='test1'
                        content='Hello4'
                    />
                </div>
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
                        <Button>
                            <p>Send</p>
                        </Button>
                    </div>
                </div>
            </div>
    )
}

export default ChatBox