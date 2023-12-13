import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Protected from './features/auth/component/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUsersIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected>
      <Home></Home>,
    </Protected>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element:
      <Protected>
        <CartPage></CartPage>,
      </Protected>
  },
  {
    path: "/checkout",
    element:
      <Protected>
        <Checkout></Checkout>,
      </Protected>
  },
  {
    path: "/product-details/:id",
    element:
      <Protected>
        <ProductDetailsPage></ProductDetailsPage>,
      </Protected>
  },
  {
    path: "order-success/:id",
    element:<OrderSuccessPage></OrderSuccessPage>
  },
  {
    path: "*",
    element:<PageNotFound></PageNotFound>
  },
]);

function App() {
  const user = useSelector(selectLoggedInUser)
  const dispatch = useDispatch()
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUsersIdAsync(user.id))
    }
  }, [dispatch,user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
