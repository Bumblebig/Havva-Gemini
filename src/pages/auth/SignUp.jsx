import ModeSwitch from "./components/ModeSwitch";
import { useState } from "react";
import "./Login.scss";
import LoginForm from "./components/LoginForm";
import Providers from "./components/Providers";
import SignupForm from "./components/SignupForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import Logo from "../../assets/havva-logo-green.png";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setEmail("");
    setPassword("");
  };


  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      reset();
      window.location.href = "/chat";
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          name: "",
          email: user.email,
        });
      }

      console.log(user)

      reset();
      window.location.href = "/";
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form shadow-lg">
          <div className="login-form-content">
          <Link to="/"><img src={Logo} alt="Havva-logo" className="w-20 lg:w-14" /></Link>
            <div className="content-text w-fit block">
              {mode === "signin" ? (
                <>
                  <h1
                    className={
                      "text-center text-3xl text-primary font-semibold"
                    }
                  >
                    Welcome Back!
                  </h1>
                  <p className={"text-center"}>
                    Please enter your Login details.
                  </p>
                </>
              ) : (
                <>
                  <h1
                    className={
                      "text-center text-3xl text-primary font-semibold"
                    }
                  >
                    Welcome!
                  </h1>
                  <p className={"text-center"}>
                    Please enter your details to get started.
                  </p>
                </>
              )}
              <ModeSwitch mode={mode} setMode={setMode} />
            </div>
            {mode === "signin" ? (
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            ) : (
              <SignupForm
                email={email}
                setEmail={setEmail}
                handleSignUp={handleSignUp}
                password={password}
                setPassword={setPassword}
              />
            )}
            <Providers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
