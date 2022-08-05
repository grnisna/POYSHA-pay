import React from 'react';
import { useForm } from "react-hook-form";

const SendMoney = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    
    return (
        <div>
            <h2>Send money</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} />
                {errors.firstName?.type === 'required' && "First name is required"}

                <input {...register("lastName", { required: true })} />
                {errors.lastName && <p>Last name is required</p>}

                <input {...register("mail", { required: "Email Address is required" })} />
                <p>{errors.mail?.message}</p>

                <input type="submit" />
            </form>
        </div>
    );
};

export default SendMoney;