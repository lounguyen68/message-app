import { useEffect, useState } from 'react'
import ChatCard from '../chat-card/ChatCard'

const ChatBoxNavbar = ({chat}) => {
    return (
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
    )
}

export default ChatBoxNavbar