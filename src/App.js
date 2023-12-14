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
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfile from './features/user/components/UserProfile';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync, selectUserInfo } from './features/user/userSlice';
import Logout from './features/auth/component/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

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
    path: "orders",
    element:<UserOrdersPage></UserOrdersPage>
  },
  {
    path: "profile",
    element:<UserProfilePage></UserProfilePage>
  },
  {
    path: "logout",
    element:<Logout></Logout>
  },
  {
    path: "forgot-password",
    element:<ForgotPasswordPage></ForgotPasswordPage>
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
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  }, [dispatch,user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
