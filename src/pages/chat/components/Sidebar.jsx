import { faHouse, faAddressCard, faCube, faRocket, faCircleInfo, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import Navs from "./Navs";
import sideflip from "../../../assets/sideflip.svg";
import { useSharedNavState } from "../../../context/SharedNavState";
const Sidebar = function () {
    const logout = async () => {
        try {
            await auth.signOut();
            window.location.href = "/";
        } catch (error) {
            console.log(error.message)
        }
    }

    const { toggleNav, isMobileNavVisible, turnOffNav } = useSharedNavState();
    const style = isMobileNavVisible ? "w-[70%]" : "w-0";
    return (
        <figure className={`bg-gray-100 ${style} overflow-x-hidden lg:block fixed top-0 left-0 h-svh min-h-svh pt-12 pb-4 lg:w-max lg:static z-[200] transition-all lg:translate-x-0`} onLoad={turnOffNav}>
            <div className="hidden h-full lg:flex flex-col justify-between">
                <div className="flex flex-col gap-8 px-4">
                    <Navs
                        path="/"
                        icon={faHouse}
                        title="Home"
                    />
                    <Navs
                        path="/product"
                        icon={faCube}
                        title="Product"
                    />
                    <Navs
                        path="/features"
                        icon={faRocket}
                        title="Features"
                    />
                    <Navs
                        path="/about-us"
                        icon={faCircleInfo}
                        title="About"
                    />
                    <Navs
                        path="/contact"
                        icon={faAddressCard}
                        title="Contact"
                    />
                </div>
                <div className="border-t-2 border-gray-300 p-4 pb-0">
                    <FontAwesomeIcon icon={faRightFromBracket} className="w-6 h-6 cursor-pointer text-gray-900
                " title="Sign out" onClick={logout} />
                </div>
            </div>

            <div className="lg:hidden h-full pt-8 relative flex flex-col justify-between">
                <img src={sideflip} alt="side-flip" className="absolute top-[-30px] left-4 cursor-pointer" onClick={toggleNav} />
                <div className="flex flex-col gap-9 px-4 mt-4">
                    <Link to="/" className="flex items-center gap-4 cursor-pointer">
                        <Navs
                            path="/"
                            icon={faHouse}
                            title="Home"
                        />
                        <p className="text-primary">Home</p>
                    </Link>

                    <Link to="/product" className="flex items-center gap-4 cursor-pointer">
                        <Navs
                            path="/product"
                            icon={faCube}
                            title="Product"
                        />
                        <p className="text-primary">Product</p>
                    </Link>

                    <Link to="/features" className="flex items-center gap-4 cursor-pointer">
                        <Navs
                            path="/features"
                            icon={faRocket}
                            title="Features"
                        />
                        <p className="text-primary">Features</p>
                    </Link>

                    <Link to="/about-us" className="flex items-center gap-4 cursor-pointer">
                        <Navs
                            path="/about-us"
                            icon={faCircleInfo}
                            title="About"
                        />
                        <p className="text-primary">About</p>
                    </Link>

                    <Link to="/contact" className="flex items-center gap-4 cursor-pointer">
                        <Navs
                            path="/contact"
                            icon={faAddressCard}
                            title="Contact"
                        />
                        <p className="text-primary">Contact</p>
                    </Link>
                </div>
                <div className="border-t-2 border-gray-300 p-4 pb-0">
                    <div className="flex items-center gap-4 cursor-pointer">
                        <FontAwesomeIcon icon={faRightFromBracket} className="w-6 h-6 cursor-pointer text-gray-900" title="Sign out" onClick={logout} />
                        <p className="text-primary">Sign Out</p>
                    </div>
                </div>
            </div>
        </figure>
    )
}

export default Sidebar;