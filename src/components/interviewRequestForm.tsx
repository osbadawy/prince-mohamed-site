"use client";

import { useState } from "react";

export function InterviewRequestForm() {
  const [form, setForm] = useState({
    email: "",
    organisation: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: connect to API route or email service
  };

  return (
    <div className="flex justify-center items-center py-20 px-4 bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-lg space-y-6 border border-neutral-200"
      >
        <h2 className="text-3xl font-bold text-neutral-800">
          Request an Interview
        </h2>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        {/* Organisation */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Organisation Name
          </label>
          <input
            type="text"
            name="organisation"
            value={form.organisation}
            onChange={handleChange}
            placeholder="Your organisation"
            className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Interview Request Details
          </label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Please describe the purpose, timeline, and preferred format of the interview."
            className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}