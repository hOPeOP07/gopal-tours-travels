import Image from "next/image";
import Link from "next/link";
import { offers } from "@/data/offers";

export default function CurrentOffers() {
  const featuredOffers = offers.slice(0, 3);

  return (
    <section className="bg-[#211914] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d8a15e]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                Current Offers
              </p>
            </div>

            <h2 className="max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Journeys worth
              <span className="block font-serif italic font-normal text-[#d8a15e]">
                taking now.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/55 lg:ml-auto">
            Discover seasonal journeys and specially curated escapes from
            across India, available for a limited time.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {featuredOffers.map((offer, index) => (
            <article
              key={offer.slug}
              className="group relative min-h-[480px] overflow-hidden bg-[#2a211b]"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />

              <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center border border-white/25 bg-black/10 text-[9px] font-bold tracking-[0.15em] backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.25em] text-[#e3b878]">
                  {offer.location}
                </p>

                <h3 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  {offer.title}
                </h3>

                <div className="mt-4 flex items-center gap-4 text-[8px] font-bold uppercase tracking-[0.2em] text-white/55">
                  <span>{offer.duration}</span>

                  <span className="h-px w-6 bg-white/30" />

                  <span>{offer.offerLabel}</span>
                </div>

                <Link
                  href={`/offers/${offer.slug}`}
                  className="mt-7 inline-flex items-center gap-6 border border-white/25 bg-white/10 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 hover:border-[#d8a15e] hover:bg-[#d8a15e] hover:text-[#211914]"
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

        <div className="mt-10 flex justify-center">
          <Link
            href="/offers"
            className="group inline-flex items-center gap-8 border border-white/15 px-7 py-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white/75 transition-all duration-300 hover:border-[#d8a15e] hover:bg-[#d8a15e] hover:text-[#211914]"
          >
            View All Offers

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}