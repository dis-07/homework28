import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <p>
                404 page Not found
            </p>
            <NavLink className='back' to='/'> back </NavLink>
        </div>
    )
}

export default NotFound;