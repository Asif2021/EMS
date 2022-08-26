import * as yup from "yup";

export class LoginDto {
    email: string;
    password: string;

    static yupSchema() {
        return yup.object({
            email: yup.string().email().required("Please enter your email").nullable(),
            password: yup.string().required("Please enter your password").nullable(),
        });
    }
}