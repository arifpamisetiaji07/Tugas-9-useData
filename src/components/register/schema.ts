import { object, string } from "yup";

const Schema = object({
    name: string()
        .min(6, "Name must contain at least 6 characters.")
        .required("First name is required."),
    email: string()
        .email("Invalid email format.")
        .required("Email is required."),
    password: string()
        .min(6, "Password must contain at least 6 characters.")
        .matches(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/, "Password must contain at least 1 number, 1 special character, 1 lowercase letter, and 1 uppercase letter.")
        .required("Password is required.")
});

export default Schema;