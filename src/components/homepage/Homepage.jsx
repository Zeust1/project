import "./Homepage.css";


import BasicModal from "../modal/BasicModal";

import latte from "../../../public/latte.jpg"

const Homepage = () => {
  return (
    <div className="homepage">
        <div className="title">
          <p style={{ fontWeight: "bold" }}>
            Cà phê Espresso của chúng tôi, Latte của bạn
          </p><br />
          <p>
            Cà phê espresso đậm vị và bốc hơi sữa - ngon tuyệt hảo khi thưởng
            thức riêng hay khi thêm đường.
          </p><br />
          <BasicModal/>
        </div>
        <img src={latte} alt="latte" style={{width: "100%", height: "60vh"}}/>
    </div>
  );
};

export default Homepage;
