"use client";

import { useState } from "react";

const enquiryTypes = [
  "Tour Enquiry",
  "Hotel Enquiry",
  "Flight Enquiry",
  "Custom Trip",
];

export default function EnquiryForm() {
  const [enquiryType, setEnquiryType] = useState("Tour Enquiry");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="enquire"
        className="bg-[#f4efe6] px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
      >
        <div className="mx-auto max-w-[900px] text-center">
          <span className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#d59a55] text-xl text-[#211914]">
            ✓
          </span>

          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a6335]">
            Enquiry Received
          </p>

          <h2 className="text-5xl font-medium tracking-[-0.04em] text-[#211a16] sm:text-6xl">
            Your journey starts
            <span className="block font-serif italic font-normal text-[#b8793f]">
              here.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#211a16]/60">
            Thank you for contacting Gopal Travels. Our travel team will
            review your enquiry and get back to you shortly.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-9 border border-[#211a16]/20 bg-white/50 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211a16] shadow-[0_5px_0_rgba(65,45,32,0.12)] transition-all duration-200 hover:-translate-y-1 hover:border-[#b8793f] hover:bg-[#d59a55] active:translate-y-[2px]"
          >
            Send Another Enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="enquire"
      className="relative overflow-hidden bg-[#f4efe6] px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#d59a55]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#b8793f]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a6335]">
              Let&apos;s Plan
            </p>

            <span className="h-px w-10 bg-[#b8793f]" />
          </div>

          <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#211a16] sm:text-6xl lg:text-7xl">
            Tell us where
            <span className="block font-serif italic font-normal text-[#b8793f]">
              you want to go.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#211a16]/60">
            Share a few details and our travel team will help turn the idea
            into a journey.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-[1000px] border border-[#211a16]/10 bg-white/45 p-6 shadow-[0_25px_70px_rgba(65,45,32,0.08)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211a16]/45">
                Your Name
              </span>

              <input
                name="name"
                type="text"
                required
                placeholder="Full name"
                className="w-full border-b border-[#211a16]/15 bg-transparent px-0 py-3 text-sm text-[#211a16] outline-none transition placeholder:text-[#211a16]/30 focus:border-[#b8793f]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211a16]/45">
                Phone Number
              </span>

              <input
                name="phone"
                type="tel"
                required
                placeholder="+91"
                className="w-full border-b border-[#211a16]/15 bg-transparent px-0 py-3 text-sm text-[#211a16] outline-none transition placeholder:text-[#211a16]/30 focus:border-[#b8793f]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211a16]/45">
                Email
              </span>

              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border-b border-[#211a16]/15 bg-transparent px-0 py-3 text-sm text-[#211a16] outline-none transition placeholder:text-[#211a16]/30 focus:border-[#b8793f]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211a16]/45">
                Enquiry Type
              </span>

              <select
                value={enquiryType}
                onChange={(event) => setEnquiryType(event.target.value)}
                className="w-full border-b border-[#211a16]/15 bg-transparent px-0 py-3 text-sm text-[#211a16] outline-none transition focus:border-[#b8793f]"
              >
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-8 block">
            <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211a16]/45">
              Tell Us More
            </span>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Where would you like to go? Tell us about your dates, preferred destinations, number of travellers, hotel preferences or anything else you have in mind..."
              className="w-full resize-none border border-[#211a16]/10 bg-white/35 p-4 text-sm leading-6 text-[#211a16] outline-none transition placeholder:text-[#211a16]/30 focus:border-[#b8793f]"
            />
          </label>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[#211a16]/10 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-md text-[9px] uppercase leading-5 tracking-[0.15em] text-[#211a16]/40">
              Our team will review your enquiry and contact you directly.
            </p>

            <button
              type="submit"
              className="group inline-flex items-center gap-8 bg-[#d59a55] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] shadow-[0_5px_0_#8c5e2f,0_12px_28px_rgba(65,45,32,0.18)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e] hover:shadow-[0_7px_0_#8c5e2f,0_18px_34px_rgba(65,45,32,0.24)] active:translate-y-[3px] active:shadow-[0_2px_0_#8c5e2f,0_7px_15px_rgba(65,45,32,0.16)]"
            >
              Send Enquiry

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}