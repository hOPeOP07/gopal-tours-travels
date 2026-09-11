"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type EnquiryService = "hotel" | "tour" | "flight";

type EnquiryFormProps = {
  service?: EnquiryService;
  tourName?: string;
  tourSlug?: string;
};

export default function EnquiryForm({
  service = "hotel",
  tourName,
  tourSlug,
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const serviceTitle =
    service === "hotel"
      ? "Hotel Enquiry"
      : service === "flight"
        ? "Flight Enquiry"
        : "Tour Enquiry";

  const formTitle =
    service === "hotel"
      ? "Tell us what"
      : service === "flight"
        ? "Tell us where"
        : "Tell us about";

  const formItalicTitle =
    service === "hotel"
      ? "you need."
      : service === "flight"
        ? "you want to fly."
        : "your journey.";

  const description =
    service === "hotel"
      ? "Share a few details and our travel team will find the right hotel or luxury property for your stay."
      : service === "flight"
        ? "Share your travel details and our team will help arrange the right flight options for your journey."
        : "Share a few details and our travel team will help shape this journey around you.";

  const submitLabel =
    service === "hotel"
      ? "Send Hotel Enquiry"
      : service === "flight"
        ? "Send Flight Enquiry"
        : "Send Tour Enquiry";

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        
          const form = e.currentTarget;
          const formData = new FormData(form);

          console.log("Extra Requests =", formData.get("extraRequests"));
        
          try {
            if (service === "hotel") {
              const { error } = await supabase.from("hotel_enquiries").insert({
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                destination: formData.get("destination"),
                check_in: formData.get("checkIn"),
                check_out: formData.get("checkOut"),
                adults: Number(formData.get("adults")),
                children: Number(formData.get("children")),
                budget: formData.get("budget"),
                extra_requests: formData.get("extraRequests")?.toString() || null,
              });
        
              if (error) throw error;
            } else if (service === "tour") {
              const { error } = await supabase.from("tour_enquiries").insert({
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                tour_name: tourName,
                tour_slug: tourSlug,
                travel_date: formData.get("travelDate"),
                travellers: Number(formData.get("travellers")),
                adults: Number(formData.get("adults")),
                children: Number(formData.get("children")),
                requirements: formData.get("requirements"),
              });
        
              if (error) throw error;
            } else {
              const { error } = await supabase.from("flight_enquiries").insert({
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                from_city: formData.get("from"),
                to_city: formData.get("to"),
                departure_date: formData.get("departureDate"),
                return_date: formData.get("returnDate"),
                travellers: Number(formData.get("travellers")),
                travel_class: formData.get("travelClass"),
                special_requests: formData.get("specialRequests"),
              });
        
              if (error) throw error;
            }
        
            setSubmitted(true);
            form.reset();
            setSubmitted(true);
            form.reset();
        
          } catch (error) {
            console.log("SUPABASE ERROR:", error);
            alert(JSON.stringify(error, null, 2));
          }
        };
  if (submitted) {
    return (
      <section className="bg-[#f4efe6] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
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
    <section className="relative overflow-hidden bg-[#f4efe6] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
      <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#d59a55]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#b8793f]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a6335]">
              {serviceTitle}
            </p>

            <span className="h-px w-10 bg-[#b8793f]" />
          </div>

          <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#211a16] sm:text-6xl lg:text-7xl">
            {formTitle}
            <span className="block font-serif italic font-normal text-[#b8793f]">
              {formItalicTitle}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#211a16]/60">
            {description}
          </p>

          {tourName && (
            <div className="mx-auto mt-6 max-w-md border border-[#211914]/10 bg-white/35 px-5 py-4">
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#9a6335]">
                Selected Tour
              </p>

              <p className="mt-2 text-lg font-medium tracking-[-0.02em] text-[#211914]">
                {tourName}
              </p>
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-[1000px] border border-[#211a16]/10 bg-white/45 p-6 text-[#211a16] shadow-[0_25px_70px_rgba(65,45,32,0.08)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="mb-10 border-b border-[#211914]/10 pb-7">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9a6335]">
              Your Details
            </p>

            <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
              How can we contact you?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                Your Name
              </span>

              <input
                name="name"
                type="text"
                required
                placeholder="Full name"
                className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                Phone Number
              </span>

              <input
                name="phone"
                type="tel"
                required
                placeholder="+91"
                className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                Email
              </span>

              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
              />
            </label>
          </div>

          {service === "tour" && (
            <>
              <div className="mb-10 mt-12 border-b border-[#211914]/10 pb-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9a6335]">
                  Journey Details
                </p>

                <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                  Tell us about your trip.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Preferred Travel Date
                  </span>

                  <input
                    name="travelDate"
                    type="date"
                    required
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>


                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Adults
                  </span>

                  <input
                    name="adults"
                    type="number"
                    min="1"
                    defaultValue="2"
                    required
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Children
                  </span>

                  <input
                    name="children"
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Additional Requirements
                  </span>

                  <textarea
                    name="requirements"
                    rows={5}
                    placeholder="Hotel preferences, activities, transport, dietary requirements or anything else..."
                    className="w-full resize-none border border-[#211914]/10 bg-white/35 p-4 text-sm leading-6 outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
                  />
                </label>
              </div>
            </>
          )}

          {service === "hotel" && (
            <>
              <div className="mb-10 mt-12 border-b border-[#211914]/10 pb-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9a6335]">
                  Stay Details
                </p>

                <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                  Tell us about your stay.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block md:col-span-2">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Destination
                  </span>

                  <input
                    name="destination"
                    type="text"
                    required
                    placeholder="Where would you like to stay?"
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Check-in
                  </span>

                  <input
                    name="checkIn"
                    type="date"
                    required
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Check-out
                  </span>

                  <input
                    name="checkOut"
                    type="date"
                    required
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Adults
                  </span>

                  <input
                    name="adults"
                    type="number"
                    min="1"
                    defaultValue="2"
                    required
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Children
                  </span>

                  <input
                    name="children"
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Total Budget for 1 Night
                  </span>

                  <input
                    name="budget"
                    type="text"
                    required
                    placeholder="Example: ₹15,000 per night"
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Extra Requests
                  </span>

                  <textarea
                    name="extraRequests"
                    rows={5}
                    placeholder="Room preferences, special occasions, meal preferences, accessibility requirements or anything else..."
                    className="w-full resize-none border border-[#211914]/10 bg-white/35 p-4 text-sm leading-6 outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
                  />
                </label>
              </div>
            </>
          )}

          {service === "flight" && (
            <>
              <div className="mb-10 mt-12 border-b border-[#211914]/10 pb-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9a6335]">
                  Flight Details
                </p>

                <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                  Tell us about your flight.
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    From
                  </span>

                  <input
                    name="from"
                    type="text"
                    required
                    placeholder="Departure city or airport"
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    To
                  </span>

                  <input
                    name="to"
                    type="text"
                    required
                    placeholder="Arrival city or airport"
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Departure Date
                  </span>

                  <input
                    name="departureDate"
                    type="date"
                    required
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Return Date
                  </span>

                  <input
                    name="returnDate"
                    type="date"
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Travellers
                  </span>

                  <input
                    name="travellers"
                    type="number"
                    min="1"
                    defaultValue="1"
                    required
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Travel Class
                  </span>

                  <select
                    name="travelClass"
                    defaultValue="Economy"
                    className="w-full border-b border-[#211914]/15 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#b8793f]"
                  >
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business</option>
                    <option>First</option>
                  </select>
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.22em] text-[#211914]/60">
                    Special Requests
                  </span>

                  <textarea
                    name="specialRequests"
                    rows={5}
                    placeholder="Airline preference, connecting flight preferences, assistance requirements or anything else..."
                    className="w-full resize-none border border-[#211914]/10 bg-white/35 p-4 text-sm leading-6 outline-none transition placeholder:text-[#211914]/40 focus:border-[#b8793f]"
                  />
                </label>
              </div>
            </>
          )}

          <input type="hidden" name="service" value={service} />

          {tourName && (
            <input type="hidden" name="tourName" value={tourName} />
          )}

          {tourSlug && (
            <input type="hidden" name="tourSlug" value={tourSlug} />
          )}

          <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[#211914]/10 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-md text-[9px] uppercase leading-5 tracking-[0.15em] text-[#211914]/50">
              Our team will review your enquiry and contact you directly.
            </p>

            <button
              type="submit"
              className="group inline-flex items-center gap-8 bg-[#d59a55] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] shadow-[0_5px_0_#8c5e2f,0_12px_28px_rgba(65,45,32,0.18)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e] hover:shadow-[0_7px_0_#8c5e2f,0_18px_34px_rgba(65,45,32,0.24)] active:translate-y-[3px] active:shadow-[0_2px_0_#8c5e2f,0_7px_15px_rgba(65,45,32,0.16)]"
            >
              {submitLabel}

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