import { createBrowserRouter } from "react-router-dom"
import Chats from '../pages/Chats/Chats'
import Friends from '../pages/friends/Friends'

const router = createBrowserRouter([
    {
      path: "/chats",
      Component() {
        return <Chats/>;
      },
    },
    {
      path: "/friends",
      Component() {
        return <Friends/>;
      },
    }
  ]);
export default router;