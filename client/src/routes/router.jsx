import { createBrowserRouter } from "react-router-dom"
import Chats from '../pages/chats/Chats'
import Friends from '../pages/friends/Friends'
import Home from "../pages/home/Home"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: "/chats",
      element: <Chats />
    },
    {
      path: "/friends",
      element: <Friends />
    }
  ],{
    basename: '/'
  });
export default router;