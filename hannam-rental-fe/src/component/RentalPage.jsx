import Header from "./Header";
import umbrella from "../assets/umbrella.jpg"
import "./RentalPage.css"
import { useLocation, useNavigate } from "react-router-dom";

const RentalPage = () => {
    const nav = useNavigate();
    const location = useLocation();
    const { text } = location.state || {};
    
    return(
        <div className="RentalPage">
            <Header/>
            <div className="college">
                <h1>{text}</h1>
            </div>
            
            <div
            className="productList"
            onClick={()=>nav(`/application`)}
            >
                <img className = "productImg" src={umbrella} alt="" />
                <div className="product">
                    <h3>우산</h3>
                    <p>대여 가능 수량: 4개</p>
                </div>
            </div>
        </div>
    )
}

export default RentalPage;