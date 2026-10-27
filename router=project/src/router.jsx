import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/service',
        element: <Service/>
    }
])
export default myRouter 