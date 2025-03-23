import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <button className={"button-27"} onClick={() => loginWithRedirect()}>Log In</button>
}

export default LoginButton;