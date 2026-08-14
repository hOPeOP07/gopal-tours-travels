"use client";

import { useState } from "react";

const airports = [
  "Delhi (DEL)",
  "Mumbai (BOM)",
  "Bengaluru (BLR)",
  "Hyderabad (HYD)",
  "Kolkata (CCU)",
  "Chennai (MAA)",
  "Goa (GOI)",
  "Srinagar (SXR)",
];

export default function FlightSearch() {
  const [tripType, setTripType] = useState<"round-trip" | "one-way">(
    "round-trip",
  );

  return (
    <section
      id="flight-search"
      className="relative overflow-hidden bg-[#211914] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#d59a55] blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#8c5e2f] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d8a15e]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                Fly With Us
              </p>
            </div>

            <h2 className="max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Your next
              <span className="block font-serif italic font-normal text-[#d8a15e]">
                departure.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/55 lg:ml-auto">
            Search your route, choose your dates and let us help shape the
            journey around it.
          </p>
        </div>

        <div className="mt-14 border border-white/10 bg-white/[0.045] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTripType("round-trip")}
                className={`px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] transition ${
                  tripType === "round-trip"
                    ? "bg-[#d59a55] text-[#211914]"
                    : "text-white/55 hover:text-white"
                }`}
              >
                Round Trip
              </button>

              <button
                type="button"
                onClick={() => setTripType("one-way")}
                className={`px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] transition ${
                  tripType === "one-way"
                    ? "bg-[#d59a55] text-[#211914]"
                    : "text-white/55 hover:text-white"
                }`}
              >
                One Way
              </button>
            </div>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
              Domestic & International
            </span>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            <label className="bg-[#211914] p-5">
              <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                From
              </span>

              <select
                defaultValue="Delhi (DEL)"
                className="w-full bg-transparent text-sm font-medium text-white outline-none"
              >
                {airports.map((airport) => (
                  <option
                    key={airport}
                    value={airport}
                    className="bg-[#211914] text-white"
                  >
                    {airport}
                  </option>
                ))}
              </select>
            </label>

            <label className="bg-[#211914] p-5">
              <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                To
              </span>

              <select
                defaultValue="Mumbai (BOM)"
                className="w-full bg-transparent text-sm font-medium text-white outline-none"
              >
                {airports.map((airport) => (
                  <option
                    key={airport}
                    value={airport}
                    className="bg-[#211914] text-white"
                  >
                    {airport}
                  </option>
                ))}
              </select>
            </label>

            <label className="bg-[#211914] p-5">
              <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                Departure
              </span>

              <input
                type="date"
                className="w-full bg-transparent text-sm font-medium text-white outline-none [color-scheme:dark]"
              />
            </label>

            <label className="bg-[#211914] p-5">
              <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                Return
              </span>

              <input
                type="date"
                disabled={tripType === "one-way"}
                className="w-full bg-transparent text-sm font-medium text-white outline-none disabled:cursor-not-allowed disabled:opacity-25 [color-scheme:dark]"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-col items-stretch justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] text-white/40">
              <span>Economy</span>
              <span>1 Adult</span>
              <span>Direct flights preferred</span>
            </div>

            <button
              type="button"
              className="group inline-flex items-center justify-center gap-8 bg-[#d59a55] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] shadow-[0_5px_0_#8c5e2f,0_12px_28px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e] hover:shadow-[0_7px_0_#8c5e2f,0_18px_34px_rgba(0,0,0,0.3)] active:translate-y-[3px] active:shadow-[0_2px_0_#8c5e2f,0_7px_15px_rgba(0,0,0,0.2)]"
            >
              Search Flights
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}