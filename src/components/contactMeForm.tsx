"use client";
import React, { useEffect, useState } from "react";

export default function ContactMeForm() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [showResult, setShowResult] = useState(false);

  const resultColor = {
    idle: "text-slate-600",
    sending: "text-slate-800 ",
    success: "text-emerald-600",
    error: "text-red-600",
  }[status];

  useEffect(() => {
    if (showResult) {
      const timer = setTimeout(() => setShowResult(false), 5000);
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
    setResult("Sending your message...");
    setStatus("sending");
    setShowResult(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "90c6e2f4-99c7-41e1-ac1d-1f057cc7baf7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setStatus("success");
        (event.target as ContactForm).reset();
      } else {
        setResult(data.message || "Something went wrong.");
        setStatus("error");
      }
    } catch (e) {
      setResult("System error. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={onSubmit} className="w-full space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <textarea
          name="message"
          placeholder="How can I help you?"
          required
          rows={5}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400 resize-none"
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-2/3 md:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all duration-200 disabled:bg-slate-400 disabled:cursor-not-allowed text-sm md:text-base"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* Result Message Container */}
      <div className="h-8 mt-2 text-center">
        {showResult && (
          <p
            className={`text-sm font-medium transition-all duration-300 ${resultColor}`}
          >
            {result}
          </p>
        )}
      </div>
    </div>
  );
}
