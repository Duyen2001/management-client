import { Layout } from "antd";
import "../App.css";
import logo from "../logo.png";
import facebook from "../assets/ico_facebook.svg";
import instagram from "../assets/ico_instagram.svg";
import gmail from "../assets/ico_tiktok.svg";
import p from "../assets/p.png";
// import product from "../../../management-backend-master/models/product";
export const Header = () => {
  return (
    <Layout.Header
      style={{
        lineHeight: "0px",
        height: "80px",
        position: "fixed",
        zIndex: 2,
        width: "100%",
        background: "rgba(255,176,81,1)",
        display: "flex",
        alignItems: "center",
      }}>
      <a href="/home" className="nav-logo">
        <img src={logo} alt="logo" height="70px" />
      </a>
       <a
        href="./homepage"
        target="_blank"
        className="p-logo"
        rel="noreferrer">
  
        <img src={p} alt="logo" height="35px" />
      </a>
      <a
        href="https://www.facebook.com/duyensk15nbk"
        target="_blank"
        rel="noreferrer"
        className="fa-logo">
        <img src={facebook} alt="logo" height="100%" />
      </a>
      <a
        href="https://www.instagram.com/_souris20s/"
        target="_blank"
        className="in-logo"
        rel="noreferrer">
        <img src={instagram} alt="logo" height="100%" />
      </a>
      <a
        href="https://mail.google.com/mail/"
        target="_blank"
        className="gm-logo"
        rel="noreferrer">
        <img src={gmail} alt="logo" height="100%" />
      </a>
    </Layout.Header>
  );
};
