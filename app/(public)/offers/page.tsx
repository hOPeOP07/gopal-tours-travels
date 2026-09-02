import Image from "next/image";
import Link from "next/link";
import { offers } from "@/data/offers";

export default function OffersPage() {
  return (
    <main className="bg-[#211914] text-white">
      <section className="px-6 pb-20 pt-28 sm:px-10 lg:px-14 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d8a15e]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                  Exclusive Offers
                </p>
              </div>

              <h1 className="max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Journeys worth
                <span className="block font-serif italic font-normal text-[#d8a15e]">
                  taking now.
                </span>
              </h1>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/55 lg:ml-auto">
              Discover specially curated journeys, seasonal escapes and
              limited-time travel offers from Gopal Travels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe6] px-6 py-20 text-[#211914] sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 md:grid-cols-2">
            {offers.map((offer, index) => (
              <article
                key={offer.slug}
                className="group overflow-hidden bg-white shadow-[0_20px_60px_rgba(65,45,32,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#211914]">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center border border-white/25 bg-black/10 text-[9px] font-bold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                    <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.25em] text-[#e3b878]">
                      {offer.offerLabel}
                    </p>

                    <h2 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                      {offer.title}
                    </h2>
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9a6335]">
                    {offer.location}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#211914]/45">
                    <span>{offer.duration}</span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#211914]/60">
                    {offer.shortDescription}
                  </p>

                  <Link
                    href={`/offers/${offer.slug}`}
                    className="group mt-7 inline-flex items-center gap-7 bg-[#d59a55] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#211914] shadow-[0_5px_0_#8c5e2f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e] active:translate-y-[2px] active:shadow-[0_2px_0_#8c5e2f]"
                  >
                    Explore Offer

                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}