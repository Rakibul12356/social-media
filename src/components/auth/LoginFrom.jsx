import React from 'react';
import { useForm } from 'react-hook-form';
import Field from '../common/Field';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';

const LoginFrom = () => {
    const navigate = useNavigate()
    const { setAuth } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,

    } = useForm()
    const submitForm = async (formData) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, formData);
            if (response.status === 200) {
                const { token, user } = response.data;
                const authToken = token.token;
                const refreshToken = token.refreshToken;

                setAuth({ user,authToken,refreshToken});
                navigate("/");
            }
        } catch (error) {
            console.log(error)
            setError("root.random",{
                type:"random",
            message:`User with email ${formData.email} is not found`}
            )
        }

    }
    return (
        <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]" onSubmit={handleSubmit(submitForm)}>
            <Field label="Email " error={errors.email}>
                <input
                    {...register("email", { required: "Email Id is Required" })}
                    className={`auth-input ${errors.email ? "border-red-500" : "border-gray-200"
                        }`}
                    name='email'
                    id='email'
                    type="email" />
            </Field>
            <Field label="Password" error={errors.password}>
                <input
                    {...register("password", {
                        required: "Password is Required",
                        minLength: {
                            value: 8,
                            message: "Your password must be at least 8 characters long"
                        }
                    })}
                    className={`auth-input ${errors.password ? "border-red-500" : "border-gray-200"
                        }`}
                    name='password'
                    id='password'
                    type="password" />
            </Field>
            <p>{errors?.root?.random?.message}</p>
            <Field>
                <button className="auth-input mt-3 bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                    type="submit">
                    Login
                </button>
            </Field>
        </form>
    );
};

export default LoginFrom;