import React from 'react';
import './App.css';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from './pages/LoginPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  //ONLY FOR TESTING - THEN PAGE WILL BE ADDED
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
