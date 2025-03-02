import './Mypage.css';
import Header from "./Header"
import user from "../assets/user.jpg"
import umbrella from "../assets/umbrella.jpg"

const Mypage  = () => {
    return(
        <div className="mypage">
            <Header/>
            <div className='profile'>
                <img className ="userImage" src={user}/>
                <h4 className='name'>이름</h4>
            </div>
            <div className='sideBarMenu'>
                대여목록
                <div className='rentalList'>
                    <img className ="rentalImage" src={umbrella}/>
                    <div className='rentalInfo'>
                    <p>제품명: </p>
                    <p>대여일: </p>
                    <p>반납일: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mypage;