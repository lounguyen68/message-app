import Navbar from '../../components/navbar/Navbar'
import User from '../../components/user/User'
import Button from '../../components/button/Button'
import FriendCard from '../../components/friend-card/FriendCard'
import './friends.scss'

const handleAccepted = () => {}
const handleDeleted = () => {}
const handleChat = () => {}


const Friends = () => {
  return (
    <div className="container">
        <Navbar/>
        <div className="friends">
            <div className="friends__header">
                <h3>Your Friends</h3>    
            </div>
            <div className="friends__list">
                <div className="friends__list__user">
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                    <Button
                        className="btn__chat"
                        onClick={handleChat}
                    >
                        Chat
                    </Button>
                </div>
                <div className="friends__list__user">
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                    <Button
                        className="btn__chat"
                        onClick={handleChat}
                    >
                        Chat
                    </Button>
                </div>
                <div className="friends__list__user">
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                    <Button
                        className="btn__chat"
                        onClick={handleChat}
                    >
                        Chat
                    </Button>
                </div>
                <div className="friends__list__user">
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                    <Button
                        className="btn__chat"
                        onClick={handleChat}
                    >
                        Chat
                    </Button>
                </div>
                <div className="friends__list__user">
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                    <Button
                        className="btn__chat"
                        onClick={handleChat}
                    >
                        Chat
                    </Button>
                </div>
                <div className="friends__list__user">
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                    <Button
                        className="btn__chat"
                        onClick={handleChat}
                    >
                        Chat
                    </Button>
                </div>
                <div className="friends__list__user">
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                    <Button
                        className="btn__chat"
                        onClick={handleChat}
                    >
                        Chat
                    </Button>
                </div>
                <div className="friends__list__user">
                    <User
                        id = 'test'
                        username = 'admin'
                        urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                    />
                    <Button
                        className="btn__chat"
                        onClick={handleChat}
                    >
                        Chat
                    </Button>
                </div>
            </div>
        </div>
        <div className="friends-request">
            <div className="friends-request__header">
                <h3>Requests</h3>    
            </div>
            <div className="friends-request__list">
                <FriendCard
                    id = 'test'
                    username = 'aido'
                    urlAvatar = ''
                >
                    <Button
                        className="btn__acp"
                        onClick={handleAccepted}
                    >
                        Accept
                    </Button>
                    <Button
                        className="btn__del"
                        onClick={handleDeleted}
                    >
                        Delete
                    </Button>
                </FriendCard>
                <FriendCard
                    id = 'test'
                    username = 'long'
                    urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                >
                    <Button
                        className="btn__acp"
                        onClick={handleAccepted}
                    >
                        Accept
                    </Button>
                    <Button
                        className="btn__del"
                        onClick={handleDeleted}
                    >
                        Delete
                    </Button>
                </FriendCard>
                <FriendCard
                    id = 'test'
                    username = 'long'
                    urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                >
                    <Button
                        className="btn__acp"
                        onClick={handleAccepted}
                    >
                        Accept
                    </Button>
                    <Button
                        className="btn__del"
                        onClick={handleDeleted}
                    >
                        Delete
                    </Button>
                </FriendCard>
                <FriendCard
                    id = 'test'
                    username = 'long'
                    urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                >
                    <Button
                        className="btn__acp"
                        onClick={handleAccepted}
                    >
                        Accept
                    </Button>
                    <Button
                        className="btn__del"
                        onClick={handleDeleted}
                    >
                        Delete
                    </Button>
                </FriendCard>
                <FriendCard
                    id = 'test'
                    username = 'long'
                    urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                >
                    <Button
                        className="btn__acp"
                        onClick={handleAccepted}
                    >
                        Accept
                    </Button>
                    <Button
                        className="btn__del"
                        onClick={handleDeleted}
                    >
                        Delete
                    </Button>
                </FriendCard>
                <FriendCard
                    id = 'test'
                    username = 'long'
                    urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                >
                    <Button
                        className="btn__acp"
                        onClick={handleAccepted}
                    >
                        Accept
                    </Button>
                    <Button
                        className="btn__del"
                        onClick={handleDeleted}
                    >
                        Delete
                    </Button>
                </FriendCard>
                <FriendCard
                    id = 'test'
                    username = 'long'
                    urlAvatar = 'https://res.cloudinary.com/messavatars/image/upload/v1685460798/messAvatar/anhFB_nnwwjf.jpg'
                >
                    <Button
                        className="btn__acp"
                        onClick={handleAccepted}
                    >
                        Accept
                    </Button>
                    <Button
                        className="btn__del"
                        onClick={handleDeleted}
                    >
                        Delete
                    </Button>
                </FriendCard>
            </div>
        </div>
    </div>
  )
}

export default Friends