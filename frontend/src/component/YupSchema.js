import * as yup from "yup";

const UserSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("email is required"),
    password: yup.string().required("password is required"),
})

export default UserSchema