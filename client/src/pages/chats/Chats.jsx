import './chats.scss'
import User from '../../components/user/User'
import Navbar from '../../components/navbar/Navbar'

const Chats = () => {
  return (
    <div className="container">
      <Navbar/>
      <div className="chats">
        <div className="chats__menu">
            <div className="chats__menu__user">
                <User
                    id = 'test'
                    username = 'admin'
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
                <div className="bug"></div>
            </div>
        </div>
        <div className="chats__chatbox">
            chatbox
        </div>
      </div>
    </div>
  )
}

export default Chats