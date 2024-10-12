import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../public/logo.png";
import Usericon from "../public/circle-user.svg";
import Carticon from "../public/shopping-cart-add.svg";
import Locationicon from "../public/location.png";

import Shopaddress from "./components/shopaddress/Shopaddress";
import Homepage from "./page/homepage/Homepage";
import Signinpage from "./page/signinpage/Signinpage";
import Profile from "./page/profile/Profile";
import Signuppage from "./page/signuppage/Signuppage";
import Menu from "./page/Menu/menu"
import CheckoutModal from"../src/components/CheckoutModal/CheckoutModal.jsx";
import CartModal from "./components/CartModal/CartModal.jsx";
import Footer from "./components/Footer/Footer.jsx";


import Shoplocation from "../src/api/shoplocation.json";

function App() {
  const [userLogin, setUserLogin] = useState("");
  const [userIcon, setUserIcon] = useState("hideMenu");
  const location = useLocation().pathname;
// tâm
  const [cartItems, setCartItems] = useState([]); 
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [isDetailOpen, setIsDetailOpen] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
// tâm

  let pTag1 = null;
  let pTag2 = null;

  if (location === "/") {
    pTag1 = (
      <p
        onClick={() => {
          window.scrollTo({ top: 10, behavior: "smooth" });
        }}
      >
        Cà phê
      </p>
    );
    pTag2 = (
      <p
        onClick={() => {
          window.scrollTo({ top: 500, behavior: "smooth" });
        }}
      >
        Về chúng tối
      </p>
    );
  } else {
    pTag1 = <p>Cà phê</p>;
    pTag2 = <p>Về chúng tôi</p>;
  }

  const signout = () => {
    setUserLogin("");
  };
// tâm
  const handleShowDetail = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedProduct(null);
  };


  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.selectedOption === product.selectedOption
      );
  
      if (existingItemIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1, options: [product.selectedOption] }];
      }
    });
  };

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen); 
  };
// tâm
  return (
    <div className="container">
      <div className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src={Logo}
            alt="this logo"
            style={{ width: "50px", height: "50px" }}
          />
          <h1>Coffe shop</h1>
        </div>
        <div className="navigation">
          <Link to="/">Trang chủ</Link>
          {pTag1}
          <Link to="/menu-page">Thực đơn</Link>
          {pTag2}
          {userLogin && <Link to="/profile">Welcome, {userLogin.username}</Link>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span>
            <img src={Locationicon} alt="locationicon" />
            <Link to="/location-store" element={<Shopaddress />}>
              Tìm cửa hàng
            </Link>
          </span>
          <div className="cart-icon" style={{ width: "30px", height: "30px" }}>
            <img
              src={Carticon}
              onClick={toggleCartModal}
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
              {cartItems.length}
            </p>
          </div>
          <div className="iconuer" style={{ width: "30px", height: "30px" }}>
            <img
              src={Usericon}
              alt="user icon"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              className="icon"
            />
            <div
              className="showMenu"
              style={{
                width: "120px",
                height: "100px",
                backdropFilter: "blur(20px)",
              }}
            >
              <dl>
                <dt>
                  <Link to="/">Trang chủ</Link>
                </dt>
                {!userLogin && (
                  <dt>
                    <button className="signout">
                      <Link to="/signin-page">Đăng nhập</Link>
                    </button>
                  </dt>
                )}
                {userLogin && (
                  <dt>
                    <button onClick={signout} className="signout">
                      Đăng xuất
                    </button>
                  </dt>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile info={userLogin}/>} />
        <Route
          path="/location-store"
          element={<Shopaddress Shoplocation={Shoplocation} />}
        />
        <Route
          path="/signin-page"
          element={<Signinpage setUserLogin={setUserLogin} />}
        />
        <Route path="/signup-page" element={<Signuppage/>}/>
        <Route path="/checkout" element={<CheckoutModal />} />
        <Route
          path="/menu-page"
          element={
            <Menu
              onShowDetail={handleShowDetail}
              onAddToCart={handleAddToCart}
            />
          }
        />
      </Routes>
      <CartModal
        open={isCartOpen}
        onClose={toggleCartModal}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
