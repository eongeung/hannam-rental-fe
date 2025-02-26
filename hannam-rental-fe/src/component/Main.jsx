import hannamUniversity from "../assets/hannamUniversity.jpg";
import Header from "./Header"
import Button from "./Button";
import './Main.css';
import { useNavigate } from "react-router-dom";

const Main = () => {
    const nav = useNavigate();
    return (
        <div className="Main">
            <Header/>
            <div className="home">
                <h1 className="title">HANNAM<br/>RENTAL</h1>
                <Button 
                className="mainlogIn"
                text={"로그인하기"}
                onClick={()=>nav(`/login`)}
                />
            </div>
        </div>
    )
}

export default Main;