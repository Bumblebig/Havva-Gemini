import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Navs = function ({ path, icon, title }) {
    return (
        <Link to={path} title={title}>
            <FontAwesomeIcon icon={icon} className="w-6 h-6 text-primary" />
        </Link>
    )
}

export default Navs;