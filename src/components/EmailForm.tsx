"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-full bg-white/20 px-8 py-3 text-sm font-semibold text-white">
        ✓ Thanks! We&apos;ll be in touch soon.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white placeholder-blue-300 outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF] sm:w-72"
      />
      <button
        type="submit"
        className="rounded-full bg-[#00ADEF] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0098d4]"
      >
        Get Early Access
      </button>
    </form>
  );
}
