import Header from "./Header";
import "./CollegeSelect.css"
import hannamUniversity from "../assets/hannamUniversity.jpg";

const CollegeSelect = () => {
    return(
    <div className="CollegeSelect">
        <Header/>
        <img className="hannamUniversity" src={hannamUniversity} alt="" />
    </div>
    )
}

export default CollegeSelect;