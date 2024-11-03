import NavBar from "../navbar";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { IUser } from "../../interfaces/iuser";
import { initialize } from "../../redux/slice/slice";

export default function Users() {
    const [users, setUsers] = useState<Array<IUser>>([]);
    const dispatch = useDispatch();

    const getUsers = async function() {
        try {
            const { data } = await axios.get("https://66fd3bd6c3a184a84d1991eb.mockapi.io/api/v1/users");
            setUsers(data);
            dispatch(initialize(data))
        } catch(err) {
            console.log(err);
        };
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="flex place-content-center">
                <table className="border-2 border-black border-collapse">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>E-MAIL</th>
                            <th>PASSWORD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};