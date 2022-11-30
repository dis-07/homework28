import { useContext } from "react";

import AuthContext from "./AuthContext";

const UserInfo =  () => {

    const {userInfo} = useContext(AuthContext);

    return (
        <div>
            <h3>Info</h3>
            <img src={`${userInfo.image}`}/>
            <ul>
                <li>
                    id: {userInfo.id}
                </li>
                <li>
                    Full name: {userInfo.userName} {userInfo.LastName}
                </li>
                <li>
                    email: {userInfo.email}
                </li>
                <li>
                    gender: {userInfo.gender}
                </li>
            </ul>
        </div>
    )
}

export default UserInfo;