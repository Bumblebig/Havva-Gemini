import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TextInput from "../../../components/ui/Input"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/ui/Button"

const SignupForm = ({ email, setEmail, password, setPassword, handleSignUp }) => {

  return (
    <form>
      <div className="email">
        <TextInput id={'email'} name={"email"} onChange={setEmail} placeholder={"Enter your email"} value={email} type="email" variant="default" />
      </div>
      <div className="password">
        <TextInput
          id={"password"}
          name={"password"}
          onChange={setPassword}
          placeholder={"Enter your password"}
          value={password}
          type="password"
          variant="default"
        />
      </div>
      <Button onClick={(e) => {
        e.preventDefault();
        handleSignUp();
      }
      }
        size={'lg'}
        variant={'btn-primary'}>Sign Up</Button>
    </form>
  )
}

export default SignupForm