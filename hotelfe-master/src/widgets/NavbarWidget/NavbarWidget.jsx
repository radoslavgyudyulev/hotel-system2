import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { toggleSearchBar } from "_actions/ui";

import NavBar from "./components/NavBar/NavBar";
import NavItem from "./components/NavItem/NavItem";
import NavIcon from "./components/NavIcon/NavIcon";
import { localStorageGet } from "utils/localStorage";


import { logout } from "../../_actions/auth";

import like from "assets/icons/like.svg";
import avatar from "assets/icons/avatar.svg";
import menu from "assets/icons/menu.svg";

// const NAV_ITEMS = [
//   {
//     id: 1,
//     navItemName: "HOME",
//     navItemRedirectPath: "",
//     visible: true,
//   },
//   {
//     id: 2,
//     navItemName: "SIGN UP",
//     navItemRedirectPath: "/auth/signup",
//     visible: !isLoggedIn,
//   },
//   {
//     id: 3,
//     navItemName: "LOGIN",
//     navItemRedirectPath: "/auth/login",
//     visible: !isLoggedIn,
//   },
//   {
//     id: 4,
//     navItemName: "PROFILE",
//     navItemRedirectPath: "/user/profile",
//     visible: isLoggedIn,
//   },
// ];

const NavbarWidget = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const role = localStorageGet('roles')

  const dispatch = useDispatch();
  const { push } = useHistory();


  const logOut = () => {
    dispatch(logout());
    push("/");
  };


  return (
    <NavBar>
      {!isLoggedIn && <NavItem redirectPath={"/auth/signin"}>SIGN IN</NavItem>}
      {!isLoggedIn && <NavItem redirectPath={"/auth/signup"}>SIGN UP</NavItem>}
      {isLoggedIn && <NavItem redirectPath={"/booking/list"}>LIST</NavItem>}
      {isLoggedIn && role !== '"user"'  &&
       <NavItem redirectPath={"/booking/post"}>POST</NavItem>}
        {isLoggedIn && role !== '"user"'  &&
       <NavItem redirectPath={"/booking/get"}>BOOKINGS</NavItem>}
      {isLoggedIn && <NavItem onClick={logOut}>LOGOUT</NavItem>}
    </NavBar>
  );
};

export default NavbarWidget;
