import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";

import DrawerComponent from "../drawer/DrawerComponent";

import logo from "../../images/razer-ths-logo.svg";
import cart_icon from "../../images/cart_icon.svg";
import mobile_burger from "../../images/mobile-menu.svg";
import { Context } from "../../context";
import { useCart } from "react-use-cart";

const Navbar = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { mobile, setMobile } = React.useContext(Context);
  const { items } = useCart();
  return (
    <>
      <div className="fixed-nav" style={{ borderBottom: "1px solid #4bed00" }}>
        <div className="navbar-container">
          <div
            className="navbar-burger"
            onClick={() => {
              setMobile(true);
              document.body.style.overflowY = "hidden";
            }}
          >
            <img src={mobile_burger} alt="" />
          </div>
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="navbar-links">
            <NavLink to="/pc">PC</NavLink>
            <NavLink to="/mobile">Mobile</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/store">Store</NavLink>
            {!localStorage.getItem("access") ? (
              <>
                <NavLink className="user" to="/sign-up">
                  Sign up
                </NavLink>
                <NavLink  className="log_out" to="/sign-in">
                  Log in
                </NavLink>
              </>
            ) : (
              <a className="log_out"
                onClick={() => {
                  window.localStorage.removeItem("access");
                  window.location.reload();
                }}
              >
                Log out
              </a>
            )}
          </div>
          <div className="navbar-cart">
            <NavLink className="storelink" to="/storeCard">
              <img src={cart_icon} alt="" />
              <span>{items.length}</span>
            </NavLink>
          </div>
        </div>
      </div>

      <Drawer
        open={mobile}
        onClose={() => setMobile(false)}
        direction="left"
        duration={0}
        className="drawer-container"
      >
        <DrawerComponent />
      </Drawer>
    </>
  );
};

export default Navbar;
