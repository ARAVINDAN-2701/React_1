import "../../css/Navbar.css"
import { Link } from "react-router-dom";
const Footbar = () =>{
    return(
        <ol className="foot">
            <li>&copy; Aravindan</li>
            <li href="@mailto:aravindan2701@gmail.com">aravindan2701@gmail.com</li>
            <li><Link to="https://www.linkedin.com/in/aravindan27/">LinkedIn</Link></li>
            <li><Link to="https://github.com/ARAVINDAN-2701">GitHub</Link></li>
            <li><Link to="https://vercel.com/aravindans-projects">Vercel</Link></li>
        </ol>
    )
}
export default Footbar;