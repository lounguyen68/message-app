import './App.scss'
import { RouterProvider } from "react-router-dom"
import router from './routes/router';

function App() {

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App
