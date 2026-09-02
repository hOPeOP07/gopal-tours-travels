"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { airports, type Airport } from "@/data/airports";


type TripType = "round-trip" | "one-way";

type PassengerCounts = {
  adults: number;
  children: number;
  infants: number;
};

type AirportFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  airports: Airport[];
  onChange: (value: string) => void;
  onSelect: (airport: Airport) => void;
};

function AirportField({
  label,
  value,
  placeholder,
  airports: airportOptions,
  onChange,
  onSelect,
}: AirportFieldProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-[#211914] p-5">
      <label className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(true);
        }}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-white/30"
      />

      {isOpen && airportOptions.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-30 max-h-72 overflow-y-auto border border-white/10 bg-[#211914] shadow-2xl">
          {airportOptions.map((airport) => (
            <button
              key={airport.iata_code}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                onSelect(airport);
                setIsOpen(false);
              }}
              className="block w-full border-b border-white/5 px-5 py-3 text-left hover:bg-white/10"
            >
              <span className="block text-sm font-medium text-white">
                {airport.municipality || airport.name}
              </span>

              <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-white/40">
                {airport.name} · {airport.iso_country} · {airport.iata_code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FlightSearch() {
  const [tripType, setTripType] = useState<TripType>("round-trip");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");

  const [selectedFrom, setSelectedFrom] = useState<Airport | null>(null);
  const [selectedTo, setSelectedTo] = useState<Airport | null>(null);

  const [travelClass, setTravelClass] = useState("Economy");

  const [passengers, setPassengers] = useState<PassengerCounts>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [specialRequests, setSpecialRequests] = useState("");

  const filteredFromAirports = useMemo(() => {
    const q = fromQuery.trim().toLowerCase();

    if (!q) return airports.slice(0, 12);

    return airports
      .filter((a) =>
        `${a.name} ${a.municipality} ${a.iso_country} ${a.iata_code}`
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 12);
  }, [fromQuery]);

  const filteredToAirports = useMemo(() => {
    const q = toQuery.trim().toLowerCase();

    if (!q) return airports.slice(0, 12);

    return airports
      .filter((a) =>
        `${a.name} ${a.municipality} ${a.iso_country} ${a.iata_code}`
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 12);
  }, [toQuery]);

  const totalPassengers =
    passengers.adults + passengers.children + passengers.infants;

  const updatePassenger = (
    type: keyof PassengerCounts,
    direction: "increase" | "decrease"
  ) => {
    setPassengers((prev) => {
      const min = type === "adults" ? 1 : 0;

      return {
        ...prev,
        [type]:
          direction === "increase"
            ? prev[type] + 1
            : Math.max(min, prev[type] - 1),
      };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { error } = await supabase.from("flight_enquiries").insert({
      name,
      email,
      phone,
      trip_type: tripType,
      from_city: selectedFrom?.municipality || fromQuery,
      to_city: selectedTo?.municipality || toQuery,
      departure_date: departure,
      return_date: tripType === "round-trip" ? returnDate : null,
      travel_class: travelClass,
      travellers: passengers.adults + passengers.children + passengers.infants,
      special_requests: specialRequests,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Flight enquiry submitted successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setFromQuery("");
    setToQuery("");
    setSelectedFrom(null);
    setSelectedTo(null);
    setTripType("round-trip");
    setDeparture("");
    setReturnDate("");
    setTravelClass("Economy");
    setSpecialRequests("");
    setPassengers({ adults: 1, children: 0, infants: 0 });
  };

    
  

  return (
    <section className="relative overflow-hidden bg-[#211914] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
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
                Flight Enquiry
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
            Tell us where you want to fly, when you want to travel and how we
            can make the journey work for you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-14 border border-white/10 bg-white/[0.045] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-7"
        >
          <div className="mb-6 grid gap-px bg-white/10 md:grid-cols-3">
            <label className="bg-[#211914] p-5">
              <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                Full Name
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
            </label>

            <label className="bg-[#211914] p-5">
              <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                Email
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
            </label>

            <label className="bg-[#211914] p-5">
              <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                Phone
              </span>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
            </label>
          </div>
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
              Global Flight Enquiry
            </span>
          </div>

          <div className="mt-5 grid gap-px bg-white/10 md:grid-cols-2">
            <AirportField
              label="From"
              value={fromQuery}
              placeholder="Search city or airport"
              airports={filteredFromAirports}
              onChange={(value) => {
                setFromQuery(value);
                setSelectedFrom(null);
              }}
              onSelect={(airport) => {
                setSelectedFrom(airport);
                setFromQuery(
                  `${airport.municipality} · ${airport.name} (${airport.iata_code})`
                );
              }}
            />

            <AirportField
              label="To"
              value={toQuery}
              placeholder="Search city or airport"
              airports={filteredToAirports}
              onChange={(value) => {
                setToQuery(value);
                setSelectedTo(null);
              }}
              onSelect={(airport) => {
                setSelectedTo(airport);
                setToQuery(
                  `${airport.municipality} · ${airport.name} (${airport.iata_code})`
                );
              }}
            />
          </div>

          <div className="mt-px grid gap-px bg-white/10 md:grid-cols-2">
            <label className="bg-[#211914] p-5">
              <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                Departure
              </span>
              <input
                name="departure"
                type="date"
                required
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none [color-scheme:dark]"
              />
            </label>

            <label className="bg-[#211914] p-5">
              <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                Return
              </span>
              <input
                name="returnDate"
                type="date"
                disabled={tripType === "one-way"}
                required={tripType === "round-trip"}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none disabled:opacity-25 [color-scheme:dark]"
              />
            </label>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border border-white/10 bg-[#211914] p-5">
              <span className="mb-4 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                Travel Class
              </span>

              <div className="grid grid-cols-2 gap-2">
                {[
                  "Economy",
                  "Premium Economy",
                  "Business",
                  "First",
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTravelClass(option)}
                    className={`px-3 py-3 text-[8px] font-bold uppercase tracking-[0.12em] transition ${
                      travelClass === option
                        ? "bg-[#d59a55] text-[#211914]"
                        : "border border-white/10 text-white/45 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-[#211914] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
                  Passengers
                </span>

                <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                  {totalPassengers}{" "}
                  {totalPassengers === 1 ? "Passenger" : "Passengers"}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: "Adults",
                    description: "12+ years",
                    type: "adults" as const,
                  },
                  {
                    label: "Children",
                    description: "2–11 years",
                    type: "children" as const,
                  },
                  {
                    label: "Infants",
                    description: "Under 2",
                    type: "infants" as const,
                  },
                ].map((passenger) => (
                  <div key={passenger.type}>
                    <p className="text-sm font-medium text-white">
                      {passenger.label}
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-white/30">
                      {passenger.description}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          updatePassenger(passenger.type, "decrease")
                        }
                        disabled={
                          passengers[passenger.type] <=
                          (passenger.type === "adults" ? 1 : 0)
                        }
                        className="flex h-8 w-8 items-center justify-center border border-white/15 text-sm hover:border-[#d59a55] hover:bg-[#d59a55] hover:text-[#211914] disabled:opacity-25"
                      >
                        −
                      </button>

                      <span className="w-5 text-center text-sm">
                        {passengers[passenger.type]}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updatePassenger(passenger.type, "increase")
                        }
                        className="flex h-8 w-8 items-center justify-center border border-white/15 text-sm hover:border-[#d59a55] hover:bg-[#d59a55] hover:text-[#211914]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <label className="mt-5 block border border-white/10 bg-[#211914] p-5">
            <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/35">
              Special Requests
            </span>

            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              rows={4}
              placeholder="Airline preference, wheelchair assistance, meal requirements, connecting flights or anything else..."
              className="w-full resize-none bg-transparent text-sm leading-6 text-white outline-none placeholder:text-white/25"
            />
          </label>

          <div className="mt-6 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
              Your enquiry will be reviewed by our travel team.
            </p>

            <button
              type="submit"
              className="inline-flex items-center gap-8 bg-[#d59a55] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] hover:bg-[#e2ae6e]"
            >
              Send Flight Enquiry
              <span className="text-lg">→</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}