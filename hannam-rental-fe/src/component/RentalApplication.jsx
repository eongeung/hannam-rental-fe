import "./RentalApplication.css"
import Header from "./Header"
import umbrella from "../assets/umbrella.jpg"
import Button from "./Button"
import { RentalDates } from "../utill/date"

const RentalApplication = () => {
    const {rentalDate, returnDate} = RentalDates();

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