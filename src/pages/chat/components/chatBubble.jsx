import bot from "../../../assets/bot.jpg";
import user from "../../../assets/user-avatar.jpg";
const ChatBubble = function ({ message, status }) {
  return (
    <div
      className={`flex w-full items-start gap-5 py-4 px-4 ${status === 'send' ? "justify-end" : "justify-start"}`}
    >
      <img src={status == 'send' ? user : bot} alt="profile-icon" className={`w-10 rounded-full ${status === 'send' ? "order-2" : "order-1"}`} />
      <div className={`leading-relaxed pt-[7px] lg:text-base ${status === 'send' ? "order-1" : "order-2"}`}>{message}</div>
    </div>
  );
};

export default ChatBubble;
