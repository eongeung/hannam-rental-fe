import hannamUniversity from "../assets/hannamUniversity.jpg";
import Header from "./Header"
import './Main.css';

const Main = () => {
    return (
        <div className="Main">
            <Header/>
            <div className="home">
                <h1 className="title">HANNAM<br/>RENTAL<br/></h1>
                <h5 className="mainlogIn">로그인하기</h5>
            </div>
        </div>
    )
}

export default Main;