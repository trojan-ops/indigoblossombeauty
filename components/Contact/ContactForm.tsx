"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | "loading" | null;
  }>({ message: "", type: null });

  // Input validation logic checks
  const isFullNameValid = formData.fullname.length >= 3 && formData.fullname.length <= 75;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPhoneValid = formData.phone.length >= 7 && formData.phone.length <= 15;
  const isSubjectValid = formData.subject.length >= 6 && formData.subject.length <= 70;
  const isMessageValid = formData.message.length >= 30 && formData.message.length <= 500;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Optional: Double check validation before submitting
    if (!isFullNameValid || !isEmailValid || !isPhoneValid || !isSubjectValid || !isMessageValid) {
      setStatus({
        message: "Please ensure all fields meet the requirements.",
        type: "error",
      });
      return;
    }

    setStatus({ message: "Sending message...", type: "loading" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Use Next.js public environment variable or insert your Web3Forms access key directly
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY",
          from_name: "Indigo Blossom Beauty Website",
          ...formData,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          message: data.message || "Thank you! Your message has been sent successfully.",
          type: "success",
        });
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          message: data.message || "Something went wrong! Please try calling us at 0407 243 573.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        message: "Network error - Please try again or email us directly.",
        type: "error",
      });
    }

    setTimeout(() => {
      setStatus((prev) => (prev.type === "loading" ? prev : { message: "", type: null }));
    }, 5000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-zinc-900 p-8 rounded-xl shadow-2xl text-white border border-zinc-800"
      >
        <h2 className="text-3xl font-bold text-pink-500 text-center">Get in Touch</h2>
        <p className="text-zinc-400 text-center text-sm -mt-4">
          Have questions about our treatments at Indigo Blossom Beauty? Drop us a line below.
        </p>

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullname-input" className="text-sm font-medium text-zinc-300">
            Full Name
          </label>
          <input
            id="fullname-input"
            name="fullname"
            type="text"
            value={formData.fullname}
            onChange={handleChange}
            className={`p-3 rounded-md transition-colors outline-none border ${
              formData.fullname === ""
                ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                : isFullNameValid
                  ? "bg-zinc-800 border-green-500 text-green-300"
                  : "bg-zinc-800 border-red-500 text-red-300"
            }`}
            placeholder="Jane Doe"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email-input" className="text-sm font-medium text-zinc-300">
            Email
          </label>
          <input
            id="email-input"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`p-3 rounded-md transition-colors outline-none border ${
              formData.email === ""
                ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                : isEmailValid
                  ? "bg-zinc-800 border-green-500 text-green-300"
                  : "bg-zinc-800 border-red-500 text-red-300"
            }`}
            placeholder="jane@example.com"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone-input" className="text-sm font-medium text-zinc-300">
            Phone Number
          </label>
          <input
            id="phone-input"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`p-3 rounded-md transition-colors outline-none border ${
              formData.phone === ""
                ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                : isPhoneValid
                  ? "bg-zinc-800 border-green-500 text-green-300"
                  : "bg-zinc-800 border-red-500 text-red-300"
            }`}
            placeholder="0400000000"
            required
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label htmlFor="subject-input" className="text-sm font-medium text-zinc-300">
            Subject
          </label>
          <input
            id="subject-input"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={`p-3 rounded-md transition-colors outline-none border ${
              formData.subject === ""
                ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                : isSubjectValid
                  ? "bg-zinc-800 border-green-500 text-green-300"
                  : "bg-zinc-800 border-red-500 text-red-300"
            }`}
            placeholder="Appointment Inquiry"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message-input" className="text-sm font-medium text-zinc-300">
            Message
          </label>
          <textarea
            id="message-input"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`p-3 rounded-md transition-colors outline-none border resize-none ${
              formData.message === ""
                ? "bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                : isMessageValid
                  ? "bg-zinc-800 border-green-500 text-green-300"
                  : "bg-zinc-800 border-red-500 text-red-300"
            }`}
            placeholder="Type your message here (min 30 characters)..."
            required
          />
          <span className="text-xs text-zinc-500 text-right">
            {formData.message.length}/500 characters (min 30)
          </span>
        </div>

        <button
          type="submit"
          disabled={status.type === "loading"}
          className="bg-pink-600 hover:bg-pink-700 disabled:bg-pink-800 text-white font-medium py-3 rounded-md transition shadow-md cursor-pointer"
        >
          {status.type === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status.message && (
          <p
            id="contact-result"
            className={`text-center font-medium p-3 rounded-md text-sm ${
              status.type === "success"
                ? "bg-green-950/60 text-green-400 border border-green-800"
                : status.type === "error"
                  ? "bg-red-950/60 text-red-400 border border-red-800"
                  : "bg-zinc-800 text-zinc-300"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
