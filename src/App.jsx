import './App.css'
import { useState } from 'react'

import Logo from '../public/logo.png'
import Usericon from '../public/circle-user.svg'
import Carticon from '../public/shopping-cart-add.svg'

import Shopaddress from './components/shopaddress/Shopaddress'



function App() {
  const [userIcon, setUserIcon] = useState("hideMenu")

  const showMenuUser = () => {
    if(userIcon == "hideMenu"){
      setUserIcon("showMenu")
    }else {
      setUserIcon("hideMenu")
    }
  }

  return (
    <>
    <div className='header'>
      <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
        <img src={Logo} alt="this logo" style={{width: '50px', height: '50px'}}/>
        <h1>Coffe shop</h1>
      </div>
      <input type="text" placeholder='Bạn cần tìm loại nước uống nào ?'/>
      <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
        <div className='cart-icon' style={{width: '30px', height: '30px'}}>
          <img src={Carticon} alt="user icon" style={{width: '30px', height: '30px', cursor: "pointer"}}/>
          <p style={{border: '1px solid', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', fontWeight: 'bold'}}>1</p>
        </div>
        <div style={{width: '30px', height: '30px'}}>
          <img src={Usericon} alt="user icon" style={{width: '30px', height: '30px', cursor: "pointer"}} onClick={showMenuUser}/>
          <div className={userIcon} style={{width: '120px', height: '200px', backgroundColor: 'burlywood'}}>
            <dl>
              <dt>Trang chủ</dt>
              <dt>Tìm cửa hàng</dt>
              <dt>Đăng nhập</dt>
              <dt>Đăng xuất</dt>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <Shopaddress/>
    </>
  )
}

export default App
