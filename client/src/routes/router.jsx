import { createBrowserRouter } from "react-router-dom"
import Chats from '../pages/chats/Chats'
import Friends from '../pages/friends/Friends'
import Home from "../pages/home/Home"
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

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
      element: <Friends/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
  ],{
    basename: '/'
  });
export default router;