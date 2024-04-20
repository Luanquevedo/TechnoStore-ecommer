import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss';
import Store from './pages/home/store';
import Cart from './pages/cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Store/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
