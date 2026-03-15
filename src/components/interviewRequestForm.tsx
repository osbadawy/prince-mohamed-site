"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function InterviewRequestForm() {
  const t = useTranslations("Interview.InterviewRequestForm");

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
          {t("title")}
        </h2>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            {t("emailLabel")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        {/* Organisation */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            {t("organisationLabel")}
          </label>
          <input
            type="text"
            name="organisation"
            value={form.organisation}
            onChange={handleChange}
            placeholder={t("organisationPlaceholder")}
            className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            {t("messageLabel")}
          </label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder={t("messagePlaceholder")}
            className="px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800 transition"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}
