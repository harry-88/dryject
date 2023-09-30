"use client";

import React, { useContext } from "react";
import { UserContext } from "@/src/context/user.context";
import Image from "next/image";
import LoginImage from "../../../../public/login.jpg";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  email: null;
  password: null;
}

const Login = () => {
  const { dispatch } = useContext(UserContext);
  const { push } = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>();

  const onSubmit = handleSubmit(({ email, password }) => {
    fetch("http://localhost:9000/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;
        fetch(`http://localhost:9000/user/${email}`, {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => response.json())
          .then((user) => {
            dispatch({
              type: "LOGGEDIN",
              email: user.email,
              accessToken: accessToken,
              role: user.role,
            });
            push("/");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div>
      <Image
        src={LoginImage}
        alt="Login Image"
        fill={true}
        className="absolute -z-10"
      />
      <div className="h-[100vh] w-[100vw] flex items-center justify-center">
        <form
          onSubmit={onSubmit}
          className="flex flex-col bg-white space-y-6 px-10 py-10"
        >
          <p className="">Sign In</p>
          <input
            type="text"
            placeholder="email"
            className=" border border-black"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              minLength: {
                value: 3,
                message: "Incorrect syntax",
              },
            })}
          />
          {errors.email && (
            <span className="error-label">{errors.email.message}</span>
          )}
          <input
            type="password"
            placeholder="password"
            className=" border border-black"
            {...register("password", {
              required: {
                value: true,
                message: "Please enter your password",
              },
            })}
          />
          <div className="flex flex-row space-x-10">
            <button type="submit">Login</button>
            <button>Forgot password?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
