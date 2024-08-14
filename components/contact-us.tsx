"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

export const Contactus = () => {
  const schema = z.object({
    name: z.string().min(1, { message: "Required" }),
    message: z.string().min(10, {
      message: "Message must be greater than 10 letter",
    }),
    email: z.string().email({ message: "Invalid email" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await axios.post("/api/contact", data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (res.status === 200) {
        alert("Message Sent");
      }
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data);
      } else if (error.request) {
        alert(error.request);
      } else {
        alert(error.message);
      }
      alert(error.config);
    }
  });

  return (
    <>
      <main className="flex mt-16 flex-col items-center justify-center gap-5">
        <h1 className="text-2xl lg:text-3xl font-bold">Contact Us</h1>
        <form
          onSubmit={onSubmit}
          className="border-2 border-red-500 p-5 flex flex-col gap-5 lg:w-1/3"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Enter your Name</label>
            <input
              className="border-2 border-black rounded-lg p-1"
              type="text"
              id="name"
              {...register("name")}
            />
          </div>
          {errors.name?.message && <p>{errors?.name?.message.toString()}</p>}
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Enter your Email</label>
            <input
              className="border-2 border-black rounded-lg p-1"
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email?.message && <p>{errors.email?.message.toString()}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Enter your Message</label>
            <input
              className="border-2 border-black rounded-lg p-1"
              type="text"
              id="message"
              {...register("message")}
            />
            {errors.message?.message && (
              <p>{errors.message?.message.toString()}</p>
            )}
          </div>
          <button
            className="border-2 border-black bg-black text-white p-3 rounded-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};
