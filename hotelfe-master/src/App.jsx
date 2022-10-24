import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

// conatiner
import Container from "./components/Container/Container";

// pages
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import HotelList from "./pages/HotelList/HotelList";
import HotelPost from "./pages/HotelPost/HotelPost";
import Booking from './pages/Bookings/Bookings'

import Auth from "./pages/Auth/Auth";
import AuthRegister from "./pages/Auth/AuthRegister";


//widgets
import NavbarWidget from "./widgets/NavbarWidget/NavbarWidget";
import CrmWidget from "./widgets/CrmWidget/CrmWidget";
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <NavbarWidget />
      <Switch>
        {isLoggedIn &&<Route path="/" component={HotelList} exact />}
        {!isLoggedIn &&<Route path="/" component={Auth} exact />}
        {!isLoggedIn && <Route path="/auth/signup" component={AuthRegister} />}
        {isLoggedIn && <Route path="/user/profile" component={Profile} />}
        {isLoggedIn && <Route path="/booking/list" component={HotelList} />}
        {isLoggedIn && <Route path="/booking/post" component={HotelPost} />}
        {isLoggedIn && <Route path="/booking/get" component={Booking} />}
        <Route path="/auth" component={Auth} />
      </Switch>
      
    </>
  );
};

export default App;
