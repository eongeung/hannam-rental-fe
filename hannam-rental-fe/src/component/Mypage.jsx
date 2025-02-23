import './Mypage.css';
import Header from "./Header"
import user from "../assets/user.jpg"

const Mypage  = () => {
    return(
        <div className="mypage">
            <Header/>
            <div className='profile'>
                <img className ="userImage" src={user}/>
                <h4 className='name'>이름</h4>
            </div>
            <div className='menu'>
                대여목록
                <div className='rentalList'>
                    사진<br/>
                    제품명<br/>
                    대여일<br/>
                    반납일<br/>
                </div>
            </div>
        </div>
    )
}

export default Mypage;