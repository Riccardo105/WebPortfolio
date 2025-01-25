import React from "react";

export default function ContactMeForm() {
  return (
    <div className=" flex flex-col items-center justify-center mt-10">
      <form className=" w-full flex flex-col items-start justify-start ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className=" w-full h-12 p-2 my-2 border-2 border-gray-300 rounded-lg xl:w-1/2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className=" w-full h-12 p-2 my-2 border-2 border-gray-300 rounded-lg xl:w-1/2"
        />
        <textarea
          name="message"
          placeholder="Message"
          className=" w-full h-32 p-2 my-2 border-2 border-gray-300 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className=" w-full h-12 p-2 my-2 bg-slate-500 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
