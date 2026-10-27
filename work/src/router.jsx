import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
])

export default myRouter