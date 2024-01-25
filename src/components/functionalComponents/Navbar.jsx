import "../../css/Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <ol>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/exper">EXPerience</Link></li>
            <li><Link to="/LOGIN">Login</Link></li>
        </ol>
    )
}
export default Navbar;