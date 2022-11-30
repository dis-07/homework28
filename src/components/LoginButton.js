import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

import { Button } from "@mui/material";

const LoginButton = () => {

    const {isLoggedIn ,logOutUser} = useContext(AuthContext);

    return (
        <>
            {isLoggedIn ? <Button type='button' onClick={logOutUser}>logOut</Button> : <Button href='auth/login' type='button'>Login</Button>}
        </>
    )
}

export default LoginButton;