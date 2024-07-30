import TextInput from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";


const LoginForm = ({ email, setEmail, password, setPassword, handleLogin }) => {

  return (
    <form>
      <div className="email">
        <TextInput
          id={"email"}
          name={"email"}
          onChange={setEmail}
          placeholder={"Enter your email"}
          value={email}
          type="email"
          variant="default"
        />
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

      <Button
        onClick={(e) => {
          e.preventDefault()
          handleLogin();
        } 
      }
        size={"lg"}
        variant={"btn-primary"}
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
