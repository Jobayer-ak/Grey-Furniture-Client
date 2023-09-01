import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllCollection from "../page/AllCollection";
import ElevatingDesk from "../page/ElevatingDesk";
import About from "../page/About";
import Contact from "../page/Contact";
import NotFound from "../page/NotFound";
import LineCollection from "../page/LineCollection";

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
        path: "/elevating-desk",
        element: <ElevatingDesk/>
    },
    {
        path: "/line-collection",
        element: <LineCollection/>
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