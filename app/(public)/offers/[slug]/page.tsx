import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { offers } from "@/data/offers";

type OfferPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OfferDetailPage({
  params,
}: OfferPageProps) {
  const { slug } = await params;

  const offer = offers.find((item) => item.slug === slug);

  if (!offer) {
    notFound();
  }

  return (
    <main className="bg-[#f4efe6] text-[#211914]">
      <section className="relative min-h-[70vh] overflow-hidden bg-[#211914] text-white">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0b] via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1440px] items-end px-6 pb-16 pt-32 sm:px-10 lg:px-14 lg:pb-20">
          <div className="max-w-4xl">
            <Link
              href="/offers"
              className="mb-8 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
            >
              ← Back to Offers
            </Link>

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#e3b878]">
              {offer.offerLabel}
            </p>

            <h1 className="text-5xl font-medium leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              {offer.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
              <span>{offer.location}</span>
              <span className="h-px w-6 bg-white/30" />
              <span>{offer.duration}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_0.65fr]">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9a6335]">
              About This Offer
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              A journey created for
              <span className="block font-serif italic font-normal text-[#b8793f]">
                this moment.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#211914]/60">
              {offer.description}
            </p>

            <div className="mt-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9a6335]">
                Highlights
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {offer.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="border border-[#211914]/10 bg-white/40 px-5 py-4 text-sm"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit bg-[#211914] p-8 text-white shadow-[0_20px_60px_rgba(65,45,32,0.15)] sm:p-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#e3b878]">
              Interested in this offer?
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em]">
              Let&apos;s plan it for you.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/55">
              Tell our travel team your preferred dates, travellers and any
              special requirements. We&apos;ll help you take the next step.
            </p>

            <Link
              href={`/enquiry?type=tour&offer=${offer.slug}`}
              className="group mt-8 inline-flex w-full items-center justify-between bg-[#d59a55] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#211914] shadow-[0_5px_0_#8c5e2f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e] active:translate-y-[2px] active:shadow-[0_2px_0_#8c5e2f]"
            >
              Enquire About This Offer

              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}