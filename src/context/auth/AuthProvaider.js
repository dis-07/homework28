import { useState } from "react";
import AuthContext from "./AuthContext";
import { login } from "../../api";


const userFormStorege = localStorage.getItem('userInfo');

const AuthProvaider = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(!!userFormStorege);
    const [userInfo, setUserInfo ] = useState(() => {
        if(userFormStorege) {
            return JSON.parse(userFormStorege)
        }
        return null;
    });

    const loginUser = async (credentials) => {
        const user = await login(credentials);
        setUserInfo(user);
        setLoggedIn(true);
        localStorage.setItem('userInfo', JSON.stringify(user));
    }

    const logOutUser = () => {
        setUserInfo(null);
        setLoggedIn(false);
        localStorage.removeItem('userInfo');
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, userInfo, loginUser, logOutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvaider;