import {NavLink} from "react-router-dom";

import LoginButton from "./LoginButton";

const Header = () => {

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
                        <LoginButton/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;