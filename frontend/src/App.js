import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LogiSignUp from "./component/User/LogiSignUp";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";

import { loadStripe } from "@stripe/stripe-js";

import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./component/Route/ProtectedRoutes";
import ElementsLayout from "./component/Route/ElementsLayout ";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState(process.env.STRIPE_API_KEY);

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <Suspense>
      <BrowserRouter>
        <Header />
        {isAuthenticated && <UserOptions user={user} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/login" element={<LogiSignUp />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/password/forgot" element={<ForgotPassword />} />
          <Route
            exact
            path="/password/reset/:token"
            element={<ResetPassword />}
          />

          <Route element={<ProtectedRoutes />}>
            <Route path="/account" element={<Profile />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/me/update" element={<UpdateProfile />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/password/update" element={<UpdatePassword />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/shipping" element={<Shipping />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/order/confirm" element={<ConfirmOrder />} />
          </Route>
          <Route path="/account" element={<Profile />} />
          {stripeApiKey && (
            <Route
              element={<ElementsLayout stripe={loadStripe(stripeApiKey)} />}
            >
              <Route path="/process/payment" element={<Payment />} />
            </Route>
          )}
          <Route element={<ProtectedRoutes />}>
            <Route path="/success" element={<OrderSuccess />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/orders" element={<MyOrders />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/order/:id" element={<OrderDetails />} />
          </Route>
          <Route element={<ProtectedRoutes isAdmin={true} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<ProtectedRoutes isAdmin={true} />}>
            <Route path="/admin/products" element={<ProductList />} />
          </Route>
          <Route element={<ProtectedRoutes isAdmin={true} />}>
            <Route path="/admin/product" element={<NewProduct />} />
          </Route>
          <Route element={<ProtectedRoutes isAdmin={true} />}>
            <Route path="/admin/product/:id" element={<UpdateProduct />} />
          </Route>
          <Route element={<ProtectedRoutes isAdmin={true} />}>
            <Route path="/admin/orders" element={<OrderList />} />
          </Route>
          <Route element={<ProtectedRoutes isAdmin={true} />}>
            <Route path="/admin/order/:id" element={<ProcessOrder />} />
          </Route>
          <Route element={<ProtectedRoutes isAdmin={true} />}>
            <Route path="/admin/users" element={<UsersList />} />
          </Route>
          <Route element={<ProtectedRoutes isAdmin={true} />}>
            <Route path="/admin/user/:id" element={<UpdateUser />} />
          </Route>
          <Route element={<ProtectedRoutes isAdmin={true} />}>
            <Route path="/admin/reviews" element={<ProductReviews />} />
          </Route>
          {/* <Route exact path="/cart" element={<Cart />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
