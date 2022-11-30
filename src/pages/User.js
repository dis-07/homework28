import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {getUsersId} from "../api";

const User = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getUsersId(userId).then((data) => {
            setUser(data);
            setLoading(false);
        })
    }, [userId])

    if(isLoading) {
        return <p>Loadin...</p>
    }

    return (
        <div>
            <h2>
                firstName:
                {user.firstName}
            </h2>
            <h3>
                lastName:
                {user.lastName}
            </h3>
            <img src={user.image} />
            <p>
                age:
                {user.age}
            </p>
            <p>
                gender:
                {user.gender}
            </p>
            <ul>
                <li>
                    username:
                    {user.username}
                </li>
                <li>
                    email:
                    {user.email}
                </li>
                <li>
                    birthDate:
                    {user.birthDate}
                </li>
                <li>
                    phone:
                    {user.phone}
                </li>
                <li>
                    password:
                    {user.password}
                </li>
            </ul>
            <Link to='/users' className="link"> back to users</Link>
        </div>
    )
}

export default User;