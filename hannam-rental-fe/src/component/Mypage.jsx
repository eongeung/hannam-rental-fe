import './Mypage.css';
import Header from "./Header"
import user from "../assets/user.jpg"
import umbrella from "../assets/umbrella.jpg"

const Mypage  = () => {
    const today = new Date();
    const rentalDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    
    const returnDay = new Date(today);
    returnDay.setDate(today.getDate() + 4);
    const returnDate = `${returnDay.getFullYear()}년 ${returnDay.getMonth() + 1}월 ${returnDay.getDate()}일`;

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
                    <p>제품명: 우산 </p>
                    <p>대여일: {rentalDate} </p>
                    <p>반납일: {returnDate} </p>
                    <p>대여학과: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mypage;