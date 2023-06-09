import './chats.scss'
import User from '../../components/user/User'
import Navbar from '../../components/navbar/Navbar'

const Chats = () => {
  return (
    <div className="container">
      <Navbar/>
      <div className="chats">
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
          urlAvatar = 'https://asset.cloudinary.com/messavatars/3a6378d3702a522a87eece3705d5a499'
        />
      </div>
    </div>
  )
}

export default Chats