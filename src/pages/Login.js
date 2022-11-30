import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

import LoginForm from "../components/LoginForm";
import UserInfo from "../context/auth/UserInfo";

const Login = () => {

    const {isLoggedIn} = useContext(AuthContext);

    return(
        <>
            {isLoggedIn ? <UserInfo/> : <LoginForm/>}
        </>
    )
}

export default Login;