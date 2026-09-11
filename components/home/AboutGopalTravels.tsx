import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function AboutGopalTravels() {
  return (
    <section id="about" className="bg-[#211914] text-white">
      {/* About Section */}
      <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d8a15e]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                About Gopal Tours And Travels
              </p>
            </div>

            <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Crafting memorable
              <span className="block font-serif italic font-normal text-[#d8a15e]">
                journeys across India.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/65">
              Gopal Tours And Travels is dedicated to creating seamless travel experiences
              through carefully planned tours, comfortable hotel stays and
              reliable flight assistance. Every itinerary is designed with
              comfort, value and unforgettable memories in mind.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-[#d59a55] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] transition hover:bg-[#e3b878]"
              >
                About Us
              </Link>

              <Link
                href="https://wa.me/918896030199?text=Hi%20Gopal%20Travels,%20I%20would%20like%20to%20contact%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:border-[#d59a55] hover:text-[#e3b878]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              ["100+", "Destinations"],
              ["1000+", "Happy Travellers"],
              ["Multi-Travel", "Services"],
              ["Best", "Price Promise"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-4xl font-medium text-[#e3b878]">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}