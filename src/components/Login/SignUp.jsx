import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authlogin } from "../../Store/authSlice";
import Logo from "../logo";
import Button from "../Headers/Button";
import Input from "../Headers/Input";
import authService from "../../services/authentication";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";


function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const signUp = async (data) => {
        setError("");
        try {
            const createUser = await authService.createAccount(data);
            if (createUser) {
                const userdata = await authService.getCurrentUser(createUser);
                if(userdata){
                    dispatch(authlogin(userdata));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message)
            
        }
    }

  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
            </span>
        </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Sign In
            </Link>
            </p>
            {error && (
            <div className="bg-red-100 border border-red-200 text-red-700 p-2 mt-4 rounded-md">
                {error}
            </div>
            )}
            <form onSubmit={handleSubmit(signUp)}>
        <div className="space-y-5">
        <Input 
        label="Full Name"
        Placeholder="Enter your full name"
        type="text"
        {...register("name",{required:true})}
        />
                    <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              name="email"
              {...register("email", {
                required: true,
                validate: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
                  message: "Invalid email address",
                },
              })}
            />
            <br />
            <Input
              label="Password: "
              placeholder="Enter your password"
              type="password"
              name="password"
              {...register("password", { required: true })}
            />
            <br/>
            <Button type="submit" className="w-full">Sign Up</Button>
        </div>
            </form>
        </div>
    </div>
  )
}
export default SignUp