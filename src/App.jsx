import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Logo from "../public/logo.png";
import Usericon from "../public/circle-user.svg";
import Carticon from "../public/shopping-cart-add.svg";
import Locationicon from "../public/location.png"

import Shopaddress from "./components/shopaddress/Shopaddress";
import Map from "./components/map/Map";

import Shoplocation from "../shoplocation.json"

function App() {
  const [userIcon, setUserIcon] = useState("hideMenu");

  const showMenuUser = () => {
    if (userIcon == "hideMenu") {
      setUserIcon("showMenu");
    } else {
      setUserIcon("hideMenu");
    }
  };

  return (
    <>
      <div className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src={Logo}
            alt="this logo"
            style={{ width: "50px", height: "50px" }}
          />
          <h1>Coffe shop</h1>
        </div>
        <input type="text" placeholder="Bạn cần tìm loại nước uống nào ?" />
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span><img src={Locationicon} alt="locationicon" /><Link to="/location-store" element={<Shopaddress/>}>Tìm cửa hàng</Link></span>
          <div className="cart-icon" style={{ width: "30px", height: "30px" }}>
            <img
              src={Carticon}
              alt="user icon"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
            />
            <p
              style={{
                border: "1px solid",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
                fontWeight: "bold",
                fontSize: "10px",
              }}
            >
              1
            </p>
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <img
              src={Usericon}
              alt="user icon"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={showMenuUser}
            />
            <div
              className={userIcon}
              style={{
                width: "120px",
                height: "200px",
                backgroundColor: "rgba(173, 97, 50)",
              }}
            >
              <dl>
                <dt>Trang chủ</dt>
                <dt>Đăng nhập</dt>
                <dt>Đăng xuất</dt>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/location-store" element={<Shopaddress Shoplocation={Shoplocation}/>} />
      </Routes>
    </>
  );
}

export default App;
