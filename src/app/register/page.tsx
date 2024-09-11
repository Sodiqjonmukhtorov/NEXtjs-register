"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit = (data: Inputs) => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/login");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            type="text"
            className="w-full border border-gray-300 p-4 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            className="w-full border border-gray-300 p-4 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            className="w-full border border-gray-300 p-4 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <button
            type="submit"
            className="w-full p-4 text-white font-semibold bg-gradient-to-r from-green-400 to-blue-500 rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
