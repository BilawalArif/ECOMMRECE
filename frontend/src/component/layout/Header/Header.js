import React, { Fragment } from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoUrl: "/",
  logoAnimationTime: 0.4,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  nav1Transition: 0.5,
  nav2Transition: "nav1Transition + 0.5",
  nav3Transition: "nav2Transition + 0.5",
  nav4Transition: "nav3Transition + 0.5",
  link1AnimationTime: 0.5,
  link2AnimationTime: link1AnimationTime,
  link3AnimationTime: link2AnimationTime,
  link4AnimationTime: link3AnimationTime,
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIcon: true,
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconUrl: "/search",
  ProfileIconElement: AiOutlineUser,
  searchIcon: true,
  searchIconColor: "rgba(35, 35, 35,0.8)",
  SearchIconElement: BsSearch,
  cartIcon: true,
  cartIconColor: "rgba(35, 35, 35,0.8)",
  CartIconElement: BsCart,
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  searchIconTransition: 0.5,
  cartIconTransition: 0.5,
  profileIconTransition: 0.5,
  searchIconAnimationTime: 0.5,
  cartIconAnimationTime: searchIconAnimationTime + 0.3,
  profileIconAnimationTime: cartIconAnimationTime + 0.3,
};

const Header = () => {
  return (
    <Fragment>
      <ReactNavbar {...options}></ReactNavbar>
    </Fragment>
  );
};

export default Header;
