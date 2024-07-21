import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authlogin } from "../../Store/authSlice";
import Logo from "../logo";
import Button from "../Headers/Button";
import Input from "../Headers/Input";
import authService from "../../services/authentication";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

/**
 * Handles the login functionality.
 * @param {Object} data - The login data containing email and password.
 * @returns {void}
 */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authlogin } from "../../Store/authSlice";
import Logo from "../logo";
import Button from "../Headers/Button";
import Input from "../Headers/Input";
import authService from "../../services/authentication";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

/**
 * Handles the login functionality.
 * @param {Object} data - The login data containing email and password.
 * @returns {void}
 */
function login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => { 
    setError("");
    try {
      const session = await authService.login(data); 
      if (session) { 
        const userdata = await authService.getCurrentUser(); 

        if (userdata) { 
          dispatch(authlogin(userdata)); 
          navigate("/");         }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flec items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 p-10 border border-black/10 `}
      >
        <div className="flex mb-2 justify-center ">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100px" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && (
          <div className="bg-red-100 border border-red-200 text-red-700 p-2 mt-4 rounded-md">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
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
            <Button type="submit" className="w-full">Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;