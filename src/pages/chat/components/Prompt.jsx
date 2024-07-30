import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import { auth, db } from "../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Prompt = function () {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input) {
      if (!loading) {
        setLoading(true);
        try {
          const response = await axios.post(
            "https://aidot.onrender.com/api/chatbot",
            { message: input }
          );
          const botResponse = response.data.response;
          let checkResponse = "";
          if (botResponse != "") checkResponse = botResponse;
          else checkResponse = "An error occured, please try again";

          const user = auth.currentUser;
          if (user) {
            await addDoc(collection(db, "Messages"), {
              userID: user.uid,
              status: "send",
              content: input,
              timestamp: serverTimestamp(),
            });

            await addDoc(collection(db, "Messages"), {
              userID: user.uid,
              status: "receive",
              content: checkResponse,
              timestamp: serverTimestamp(),
            });
          }

          setInput("");
        } catch (error) {
          console.error("Error sending message:", error);
          const user = auth.currentUser;
          if (user) {
            await addDoc(collection(db, "Messages"), {
              userID: user.uid,
              status: "send",
              content: input,
              timestamp: serverTimestamp(),
            });

            await addDoc(collection(db, "Messages"), {
              userID: user.uid,
              status: "receive",
              content: "Internal error, Please try again",
              timestamp: serverTimestamp(),
            });
          }
        } finally {
          setLoading(false);
        }
      } else {
        console.log("Please wait...");
      }
    }
  };
  return (
    <form
      className="w-full bg-gray-100 rounded-t-lg flex flex-col fixed bottom-0 left-0 px-4 py-4 md:max-w-[1000px] md:mx-auto md:left-1/2 md:translate-x-[-50%]"
      onSubmit={handleSend}
    >
      <p className={`absolute w-max top-[-50px] left-1/2 translate-x-[-50%] z-[300] p-2 rounded text-gray-800 ${loading ? 'block' : 'hidden'}`}><TailSpin
        visible={true}
        height="35"
        width="35"
        color="#002626"
        ariaLabel="tail-spin-loading"
        radius="3"
        wrapperClass="absolute top-1/2 left-1/2" /></p>
      <input
        className="w-full h-12 bg-gray-100 border-none block px-4 py-1 focus:border-none focus:outline-none"
        placeholder="Enter prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={`py-2 px-3 rounded bg-gray-300 self-end ${loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}><FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5 text-primary" /></button>
    </form>
  );
};

export default Prompt;
