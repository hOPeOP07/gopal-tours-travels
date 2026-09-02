import Link from "next/link";

export default function FlightsPage() {
  return (
    <main className="bg-[#f4efe6] text-[#211914]">
      {/* Hero */}
      <section className="bg-[#211914] px-6 pb-24 pt-28 text-white sm:px-10 lg:px-14 lg:pb-32 lg:pt-36">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
            Flight Booking
          </p>

          <h1 className="mt-6 text-6xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            Wherever you&apos;re flying,
            <span className="block font-serif italic font-normal text-[#d8a15e]">
              we&apos;ll get you there.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/60">
            Domestic and international flight bookings with personalized travel
            assistance from Gopal Travels.
          </p>

          <Link
            href="/flight-enquiry"
            className="mt-10 inline-flex items-center gap-6 bg-[#d59a55] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] transition hover:bg-[#e2ae6e]"
          >
            Flight Enquiry →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 border border-[#211914]/10 bg-white/40 p-8 md:flex-row md:items-center">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9a6335]">
              Ready to fly?
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em]">
              Tell us your route and travel dates.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#211914]/60">
              Search any airport worldwide, choose your travel class, add
              passengers and send your enquiry directly to our travel team.
            </p>
          </div>

          <Link
            href="/flight-enquiry"
            className="inline-flex items-center gap-5 border border-[#211914]/20 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:bg-[#d59a55]"
          >
            Open Flight Enquiry →
          </Link>
        </div>
      </section>
    </main>
  );
}