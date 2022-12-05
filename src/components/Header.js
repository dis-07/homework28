/* eslint-disable jsx-a11y/alt-text */
import {NavLink} from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../context/auth/AuthContext";

import LoginForm from "../components/LoginForm";

const Header = () => {
    
    const {isLoggedIn, userInfo} = useContext(AuthContext);

    return (
        <header className="header">
            <NavLink className={({isActive}) => (isActive ? "active" : "")} to='/'>
                Home
            </NavLink>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to='users' className={({isActive}) => (isActive ? "active" : "")}>
                            Users
                        </NavLink>
                    </li>
                    <li className="li">
                        <NavLink to='hotels' className={({isActive}) => (isActive ? "active" : "")}>
                            Hotels
                        </NavLink>
                    </li>
                    <li className="li">
                        <LoginForm/>
                    </li>
                    {isLoggedIn ? <li className="li">{<img className="image" src={userInfo.image}/>}</li> : ''}
                </ul>
            </nav>
        </header>
    )
}

export default Header;