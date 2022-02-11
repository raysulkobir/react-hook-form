import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    firstName: string;
    age: number;
}

const ApplyValidation = () => {
    const { register, handleSubmit, formState:{errors} } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
               {/*<input {...register("firstName", { required: true, minLength: 20 })} />*/}
               <input {...register("firstName", { pattern: /^[A-Za-z]+$/i })} />
               {errors.firstName && <span>This field is required</span>}
               <input {...register("age", {min: 10, max: 20})}/>
               {errors.age && <span>This 10-18</span>}
               <input type="submit" />
           </form>
        </div>
    );
};

export default ApplyValidation;
