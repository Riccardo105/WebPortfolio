"use client";
import React, { useEffect, useState } from "react";

export default function ContactMeForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [showResult, setShowResult] = useState(false);

  // message colour setter
  const resultColor = {
    idle: "text-black",
    sending: "text-black",
    success: "text-green-600",
    error: "text-red-600",
  }[status];

  // timer for hiding the message
  useEffect(() => {
    if (showResult) {
      const timer = setTimeout(() => {
        setShowResult(false);
      }, 5000);

      // Clear the timer if the component unmounts or showResult changes
      return () => clearTimeout(timer);
    }
  }, [showResult]);

  interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface ContactForm extends HTMLFormElement {
    readonly elements: FormElements;
  }

  const onSubmit = async (event: React.FormEvent<ContactForm>) => {
    event.preventDefault();
    setResult("Sending...");
    setStatus("sending");
    setShowResult(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "90c6e2f4-99c7-41e1-ac1d-1f057cc7baf7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setStatus("success");
      (event.target as ContactForm).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setStatus("error");
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center mt-10">
      <form
        onSubmit={onSubmit}
        className=" w-full flex flex-col items-start justify-start "
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className=" w-full h-12 p-2 my-2 border-2 border-gray-300 text-black rounded-lg xl:w-1/2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className=" w-full h-12 p-2 my-2 border-2 border-gray-300 text-black rounded-lg xl:w-1/2"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className=" w-full h-32 p-2 my-2 border-2 border-gray-300 text-black rounded-lg"
        ></textarea>
        <button
          type="submit"
          className=" w-full h-12 p-2 my-2 bg-white border-black border-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      {showResult && (
        <span className={`w-fit mt-2 ${resultColor}`}>{result}</span>
      )}
    </div>
  );
}
