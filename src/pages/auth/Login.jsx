import { useState } from "react";
import "./Login.scss";
import LoginForm from "./components/LoginForm";
import Providers from "./components/Providers";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes
} from "firebase/auth";
import { auth, db } from "../../firebase";
import Logo from "../../assets/havva-logo-green.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SignupForm from "./components/SignupForm";
import { doc, setDoc } from "firebase/firestore";

const getFirebaseErrorMessage = (code) => {
  switch (code) {
    case AuthErrorCodes.EMAIL_EXISTS:
      return "The email address is already in use by another account.";
    case AuthErrorCodes.INVALID_EMAIL:
      return "The email address is not valid.";
    case AuthErrorCodes.WEAK_PASSWORD:
      return "The password is too weak. Please enter a stronger password.";
    default:
      return "An unknown error occurred. Please try again.";
  }
};

const Login = () => {
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [regError, setRegError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [regErrMessage, setRegErrMessage] = useState("");

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(false);
      reset();
      window.location.href = "/chat";
    } catch (error) {
      setErrMessage("Incorrect Credentials")
      setError(true);
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
      setRegError(false)
      reset();
      window.location.href = "/chat";
    } catch (error) {
      const errorMessage = getFirebaseErrorMessage(error.code);
      setRegError(true);
      setRegErrMessage(errorMessage);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form shadow-lg">
          <div className="login-form-content">
            <Link to="/">
              <img
                src={Logo}
                alt="Havva-logo"
                className="w-20 lg:w-32 object-cover aspect-square object-center"
              />
            </Link>
            <p className="text-sm text-center">
              {mode === "signin" ?
                'Please enter your Login details.'
                : (
                  'Please enter your details to get started.'
                )}
            </p>

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
            {mode === "signin" ? (
              <>
                <p className={`text-red-400 mt-3 text-center max-w-[90%] mx-auto ${error ? 'block' : 'hidden'}`}>{errMessage}</p>
                <p className="text-sm mt-3">
                  Don't Have an account?{" "}
                  <span onClick={() => setMode('signup')} className="text-secondary cursor-pointer" to={"/signup"}>
                    Sign Up <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </span>
                </p>
              </>
            ) : (
              <>
                <p className={`text-red-400 mt-3 text-center max-w-[90%] mx-auto ${regError ? 'block' : 'hidden'}`}>{regErrMessage}</p>
                <p className="text-sm mt-3">
                  Already have an account?{" "}
                  <span onClick={() => setMode('signin')} className="text-secondary cursor-pointer" to={"/signup"}>
                    Sign In <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
