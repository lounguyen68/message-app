import { useState } from 'react'
import './chats.scss'
import User from '../../components/user/User'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Navbar from '../../components/navbar/Navbar'
import Message from '../../components/message/Message'
import { useSelector } from 'react-redux'

const Chats = () => {
    const { userInfo } = useSelector(state => state.auth)

    const [message, setMessage] = useState('')

    return (
        <div className="container">
        <Navbar/>
        <div className="chats">
            <div className="chats__menu">
                <div className="chats__menu__user">
                    <User
                        id = {userInfo.id}
                        username = {userInfo.username}
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                </div>
                <div className="chats__menu__list">
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://ik.imagekit.io/lounguyen68/default-image.jpg'
                    />
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = ''
                    />
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = ''
                    />
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = ''
                    />
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = ''
                    />
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = ''
                    />
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = ''
                    />
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = ''
                    />
                </div>
            </div>
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
        </div>
        </div>
    )
}

export default Chats