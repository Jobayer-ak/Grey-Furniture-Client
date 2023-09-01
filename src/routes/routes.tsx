import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AllCollection from '../page/AllCollection';
import ElevatingDesk from '../page/ElevatingDesk';
import About from '../page/About';
import Contact from '../page/Contact';
import NotFound from '../page/NotFound';
import LineCollection from '../page/LineCollection';
import Login from '../page/Login';
import SIgnup from '../page/SIgnup';
import Home from '../page/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/all-collections',
        element: <AllCollection />,
      },
      {
        path: '/elevating-desk',
        element: <ElevatingDesk />,
      },
      {
        path: '/line-collection',
        element: <LineCollection />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SIgnup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
