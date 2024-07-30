/* eslint-disable react/prop-types */
const ModeSwitch = ({ mode, setMode }) => {
  return (
    <div className="mode-switch w-80 mt-6 font-body p-1 bg-gray-200 flex align-center overflow-hidden rounded-xl">
      <div
        onClick={() => {setMode("signin")}}
        className={`sign-in flex-1 px-5 py-2.5 text-center cursor-pointer ${
          mode === "signin" && "bg-primary text-white"
        } rounded-xl `}
      >
        Sign In
      </div>
      <div
        onClick={() => {setMode("signup")}}
        className={`sign-in flex-1 px-5 py-2.5 text-center cursor-pointer ${
          mode === "signup" && "bg-primary text-white"
        } rounded-xl `}
      >
        Sign Up
      </div>
    </div>
  );
};

export default ModeSwitch;
