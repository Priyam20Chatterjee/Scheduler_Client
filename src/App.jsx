// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import LeftNav from "./components/shared/LeftNav.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Tasks from "./pages/Tasks.jsx"
import Calender from "./pages/Calendar.jsx"
import Completed from "./pages/Completed.jsx"

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <Dashboard/>},
    {path: "/tasks", element: <Tasks/>},
    {path: "/calender", element: <Calender/>},
    {path: "/completed", element: <Completed/>}
  ])
  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
