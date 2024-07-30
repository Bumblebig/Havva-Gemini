import Prompt from "./components/Prompt";
import ChatDisplay from "./components/chatDisplay";
import Sidebar from "./components/Sidebar";
import sideflip from "../../assets/sideflip.svg";
import { useSharedNavState } from "../../context/SharedNavState";
const Chat = function () {
    const { toggleNav } = useSharedNavState();
    return (
        <section className="py-0 flex items-start relative w-full transition-all h-svh bg-white overflow-y-hidden">
            <img src={sideflip} alt="side-flip" className="cursor-pointer lg:hidden absolute top-5 left-2" onClick={toggleNav} />
            <Sidebar />
            <div className="w-full h-full pt-12 lg:pt-0 pb-[90px] md:max-w-[950px] md:mx-auto overflow-y-scroll">
                <ChatDisplay />
                <Prompt />
            </div>
        </section>
    )
}

export default Chat;