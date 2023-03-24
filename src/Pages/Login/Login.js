import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import GoogleLogin from "../Shared/GoogleLogin";

const Login = () => {
  const { auth, logInUser, resetPassword } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Log In User
  const handleLogIn = (data) => {
    logInUser(data.email, data.password)
      .then((result) => {
        toast.success(`Welcome Back ${result.user.displayName}!`);
        setAuthToken(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Reset Password
  const handleForgotPassword = () => {
    resetPassword(userEmail)
      .then((result) => {
        toast.success("Check Your Email");
        setAuthToken(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="flex justify-center py-20">
        <div className="rounded-3xl border bg-transparent w-[30rem] flex flex-col gap-12 p-12">
          <h3 className="text-2xl text-primary font-semibold text-center">
            LogIn To Your Account
          </h3>
          <GoogleLogin />
          <form
            onSubmit={handleSubmit(handleLogIn)}
            className="flex flex-col gap-8"
          >
            <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 before:transition before:duration-300">
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
                onBlur={(event) => setUserEmail(event.target.value)}
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent pb-3  border-b border-gray-300 outline-none transition p-2"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-600 -mt-4">
                {errors.email.message}
              </p>
            )}

            <div className="flex flex-col gap-4">
              <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 before:transition before:duration-300">
                <input
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password Must Be 6 Characters",
                    },
                  })}
                  type="password"
                  placeholder="Your Password"
                  className="w-full bg-transparent pb-3  border-b border-gray-300 outline-none transition p-2"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
              <button
                onClick={handleForgotPassword}
                className="-mr-4 px-4 self-end"
              >
                <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                  Forgot password ?
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <button
                type="submit"
                className="w-full rounded-md bg-sky-500 text-white h-11 flex items-center justify-center px-6 hover:text-gray-100 bg-gradient-to-r from-blue-500 to-cyan-500"
              >
                <span className="text-base font-semibold">Log In</span>
              </button>

              <Link to="/signUp" className="py-4">
                <span className="text-sm tracking-wide text-sky-600">
                  Create New Account?
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
