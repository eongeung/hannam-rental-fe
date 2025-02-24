import Header from "./Header";
import umbrella from "../assets/umbrella.jpg"
import "./RentalPage.css"

const RentalPage = () => {
    return(
        <div className="RentalPage">
            <Header/>
            <div className="college">
                <h1>스마트융합대학</h1>
            </div>
            
            <div className="productList">
                <img className = "productImg" src={umbrella} alt="" />
                <div className="productInfo">
                    <h3>우산</h3>
                    <p>대여 가능 수량: 4개</p>
                </div>
            </div>
        </div>
    )
}

export default RentalPage;