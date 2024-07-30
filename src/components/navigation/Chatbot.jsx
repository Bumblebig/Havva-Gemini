import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Chatbot = function () {
    const location = useLocation();

    const shouldHide = location.pathname === "/login" || location.pathname === "/chat";

    if (shouldHide) {
        return null;
    }

    return (
        <Link to="/chat" className="fixed block w-max right-2 bottom-9 md:bottom-6 bg-secondary text-white rounded-full p-2 md:p-4">
            <FontAwesomeIcon icon={faRobot} className="w-8 h-8 md:w-11 md:h-11 block" />
        </Link>
    );
};

export default Chatbot;
