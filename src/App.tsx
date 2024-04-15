import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Captured from './pages/Captured'
import Home from "./pages/Home"

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/captured',
      element: <Captured />
    }
  ])

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
