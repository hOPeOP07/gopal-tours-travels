import Link from "next/link";

const offers = [
  {
    title: "Kashmir Escape",
    discount: "25% OFF",
    description: "7 Days · Houseboat + Gulmarg + Pahalgam",
    color: "from-[#6fa3d8] to-[#27496d]",
  },
  {
    title: "Goa Beach Holiday",
    discount: "20% OFF",
    description: "Luxury beach stay with sightseeing included",
    color: "from-[#e7a34b] to-[#9a5a16]",
  },
  {
    title: "Rajasthan Royal Tour",
    discount: "30% OFF",
    description: "Jaipur · Jodhpur · Udaipur heritage journey",
    color: "from-[#b86b52] to-[#5b2d22]",
  },
];

export default function CurrentOffers() {
  return (
    <section className="bg-[#120e0b] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d8a15e]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                Limited Time Offers
              </p>
            </div>

            <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Travel more.
              <span className="block font-serif italic font-normal text-[#d8a15e]">
                Spend less.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/55">
            Exclusive seasonal deals curated by Gopal Travels for unforgettable
            holidays across India.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className={`group relative overflow-hidden bg-gradient-to-br ${offer.color} p-[1px]`}
            >
              <div className="h-full bg-black/20 p-8 backdrop-blur-sm transition duration-300 group-hover:bg-black/10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                      Holiday Deal
                    </p>
                    <h3 className="mt-3 text-3xl font-medium leading-tight">
                      {offer.title}
                    </h3>
                  </div>

                  <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-bold backdrop-blur">
                    {offer.discount}
                  </span>
                </div>

                <p className="mt-10 text-sm leading-6 text-white/80">
                  {offer.description}
                </p>

                <div className="mt-10 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-white/55">
                    Valid for limited bookings
                  </span>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/offers"
            className="group inline-flex items-center gap-8 bg-[#d59a55] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] shadow-[0_5px_0_#8c5e2f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e] hover:shadow-[0_7px_0_#8c5e2f] active:translate-y-[2px] active:shadow-[0_2px_0_#8c5e2f]"
          >
            View All Offers
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}