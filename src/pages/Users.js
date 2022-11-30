import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getUsers } from "../api";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        getUsers().then((data) => {
            setUsers(data);
            setLoading(false);
        });
    }, [] );

    if(isLoading) {
        return <p>Loading....</p>
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Firs name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {users.map(({id, firstName, lastName, email, phone}) => (
                    <tr key={id}>
                        <td>
                            {firstName}
                        </td>
                        <td>
                            {lastName}
                        </td>
                        <td>
                            {email}
                        </td>
                        <td>
                            {phone}
                        </td>
                        <td>
                            <Link to={`${id}`} className='link'>{firstName}</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        // <ul>
        //     {users.map(({id, firstName}) => (
        //         <li key={id} className='lishka'>
        //             <Link to={`${id}`} className='link'>{firstName}</Link>
        //         </li>
        //     ))}
        // </ul>
    )
}

export default Users;