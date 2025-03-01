import "./RentalApplication.css"
import Header from "./Header"
import umbrella from "../assets/umbrella.jpg"
import Button from "./Button"

const RentalApplication = () => {
    const today = new Date();
    const rentalDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    
    const returnDay = new Date(today);
    returnDay.setDate(today.getDate() + 4);
    const returnDate = `${returnDay.getFullYear()}년 ${returnDay.getMonth() + 1}월 ${returnDay.getDate()}일`;

    
    return(
        <div className="RentalApplication">
            <Header/>
            <div className="college">
                <h1>스마트융합대학</h1>
            </div>
            <div className="productInfo">
                <img className = "umbrella" src={umbrella} alt="" />
                <h1>우산</h1>
                <p>대여일: {rentalDate} </p>
                <p>반납일: {returnDate}</p>
            </div>

            <Button
            className = {"apply"}
            text={"대여 신청하기"}
            onClick={()=>{alert("신청하시겠습니까?")}} 
            />
        </div>
    )
}

export default RentalApplication;