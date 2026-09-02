import Link from "next/link";

import DiscoverIndia from "@/components/home/DiscoverIndia";
import Hero from "@/components/home/Hero";
import TourShowcase from "@/components/tours/TourShowcase";
import HotelShowcase from "@/components/hotels/HotelShowcase";
import CurrentOffers from "@/components/home/CurrentOffers";
import AboutGopalTravels from "@/components/home/AboutGopalTravels";

export default function Home() {
  return (
    <main>
      <Hero />

      <DiscoverIndia />

      <TourShowcase />

      <HotelShowcase />

      {/* Flights */}
      <section className="bg-[#211914] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d8a15e]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                  Flights
                </p>
              </div>

              <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Fly wherever
                <span className="block font-serif italic font-normal text-[#d8a15e]">
                  your journey leads.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/55 lg:ml-auto">
              From domestic journeys across India to international travel,
              Gopal Travels helps arrange flights around your plans,
              preferences and budget.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-[#30251e]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=90")',
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e3b878]">
                  Global Flight Assistance
                </p>

                <h3 className="max-w-2xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  Tell us where you want to fly.
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-white/10 bg-white/[0.045] p-8 sm:p-10">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e3b878]">
                  Plan Your Flight
                </p>

                <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em]">
                  We&apos;ll help find the right option.
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/55">
                  Share your travel details with our team and we&apos;ll
                  review the available flight options for your journey.
                </p>
              </div>

              <Link
                href="/flights"
                className="group mt-10 inline-flex w-fit items-center gap-8 bg-[#d59a55] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] shadow-[0_5px_0_#8c5e2f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e] hover:shadow-[0_7px_0_#8c5e2f] active:translate-y-[2px] active:shadow-[0_2px_0_#8c5e2f]"
              >
                Explore Flights

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CurrentOffers />

      <AboutGopalTravels />
    </main>
  );
}