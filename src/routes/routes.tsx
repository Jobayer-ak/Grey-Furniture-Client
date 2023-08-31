import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllCollection from "../page/AllCollection";
import ElevatingDesk from "../page/ElevatingDesk";
import About from "../page/About";
import Contact from "../page/Contact";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        
    },
    {
        path: "/all-collections",
        element: <AllCollection/>
    },
    {
        path: "/elevatingdesk",
        element: <ElevatingDesk/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default routes;