import React from 'react';
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";


enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}
interface IFormInput {
    firstName: String;
    gender: GenderEnum;
}

const RegisterFields = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<IFormInput>();
    const onSubmitCategory: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmitCategory)}>
            <label>First Name</label>
            <input {...register("firstName", {required: true})} />
            {
                console.log("errors.firstName", errors.firstName)
            }
            {errors.firstName && <span>this is field required</span>}
            <label>Gender Selection</label>
            <select {...register("gender")} >
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="submit" />
        </form>
    );
};

export default RegisterFields;
