import "../../css/Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <ol className="Nav">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">LOCAL TRIP</Link></li>
            <li><Link to="/exper">DayScholar Bus Trip</Link></li>
           
        </ol>
    )
}
export default Navbar; 