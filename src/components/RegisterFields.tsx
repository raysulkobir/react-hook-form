import React from 'react';
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
            <label>Gender Selection</label>
            <select {...register("gender", {required: true})} >
                <option value="">Select</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            {errors.gender && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
};

export default RegisterFields;
