import './Profile.css'
import userimg from '../../../public/userimg.png'

const Profile = ({info}) => {
  return (
    <div className='profile'>
        <div className='img' style={{width: "30%"}}>
            <img src={userimg} alt="user" style={{width: "100%",height: "300px"}}/>
        </div>
        <div className='content' style={{width: "60%"}}>
            <p>Họ tên: </p>
            <p>Năm sinh: </p>
            <p>CCCD: </p>
            <p>Name : {info.username}</p>
            <p>Password: {info.password}</p>
            <p>Email: </p>
            <p>Sđt: </p>
            <p>Level: </p>
        </div>
    </div>
  )
}

export default Profile

