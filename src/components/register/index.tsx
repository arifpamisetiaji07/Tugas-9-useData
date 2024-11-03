import NavBar from "../navbar";
import { Formik, Form, Field, FormikProps } from "formik";
import axios from "axios";
import Schema from "./schema";
import { IUser } from "../../interfaces/iuser";
import { useDispatch } from "react-redux";
import { newUser } from "../../redux/slice/slice";

export default function Register() {
    const dispatch = useDispatch();

    const postUser = async (params: IUser) => {
        try {
            await axios.post("https://66fd3bd6c3a184a84d1991eb.mockapi.io/api/v1/users", {
                name: params.name,
                email: params.email,
                password: params.password,
            });
            dispatch(newUser(params));
        } catch(err) {
            console.log(err);
        };
    };

    return (
        <div>
            <NavBar />
            <div>
            <Formik
                initialValues={{
                    id: 0,
                    name: "",
                    email: "",
                    password: "",
                }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    postUser(values);
                }}>
                    {(props: FormikProps<IUser>) => {
                        const { values, errors, touched, handleChange } = props;

                        return (
                            <div className="flex place-content-center border font-bold">
                                <Form>
                                    <div>
                                        <label htmlFor="name">Name: </label>
                                        <Field type="text" name="name" onChange={handleChange} values={values.name} 
                                        className="rounded border-2 border-black"/>
                                        {touched.name && errors.name ? (
                                            <div className="font-normal text-red-600">{errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email: </label>
                                        <Field type="text" name="email" onChange={handleChange} values={values.email} 
                                        className="rounded border-2 border-black"/>
                                        {touched.email && errors.email ? (
                                            <div className="font-normal text-red-600">{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password: </label>
                                        <Field type="password" name="password" onChange={handleChange} values={values.password} 
                                        className="rounded border-2 border-black"/>
                                        {touched.password && errors.password ? (
                                            <div className="font-normal text-red-600">{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div className="grid m-auto">
                                        <button type="submit" className="rounded bg-sky-300 w-20 m-auto border-2 border-black">Submit</button>
                                    </div>
                                </Form>
                            </div>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};