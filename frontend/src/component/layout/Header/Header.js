import React, { Fragment } from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

const options = {
  burgerColorHover: "#eb4034",
  logo,
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
};

const Header = () => {
  return (
    <Fragment>
      <ReactNavbar {...options}>
      </ReactNavbar>
    </Fragment>
  );
};

export default Header;
