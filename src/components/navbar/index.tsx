import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IuSlice } from "../../redux/slice/slice";

export default function NavBar() {
    let u = useSelector(
        (state: { uSlice: IuSlice }) => state.uSlice.users
    );

    return (
        <div className="h-16 bg-teal-400 grid grid-cols-10">
            <div className="col-start-1 row-start-1 col-span-2 text-lg font-bold bg-white m-auto"> Network Call Practice</div>
            <div className="col-start-3 row-start-1 m-auto font-bold">
                <Link to="/">Users</Link>
            </div>
            <div className="col-start-4 row-start-1 m-auto font-bold">
                <Link to="/register">Register</Link>
            </div>
            <div className="col-start-8 row-start-1 m-auto font-bold">Users: {u.length}</div>
        </div>
    );
};