import Image from "next/image";
import Link from "next/link";
import { getActiveTours } from "@/lib/tours";

export default async function ToursPage() {
  const tours = await getActiveTours();

  return (
    <main className="bg-[#f4efe6] text-[#211914]">
      <section className="bg-[#211914] px-6 pb-20 pt-28 text-white sm:px-10 lg:px-14 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#d8a15e]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                  Explore India
                </p>
              </div>

              <h1 className="max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Journeys made
                <span className="block font-serif italic font-normal text-[#d8a15e]">
                  for you.
                </span>
              </h1>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/55 lg:ml-auto">
              Explore our curated collection of journeys across India&apos;s
              mountains, palaces, coastlines and cultural heartlands.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#211914]/10 pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9a6335]">
                Our Collection
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                Choose your journey.
              </h2>
            </div>

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#211914]/40">
              {tours.length} Curated Journeys
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {tours.map((tour, index) => (
              <article
                key={tour.id}
                className="group overflow-hidden border border-[#211914]/10 bg-white/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#211914]">
                  <Image
                    src={tour.hero_image}
                    alt={tour.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

                  <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center border border-white/30 bg-black/10 text-[9px] font-bold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                    <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.25em] text-[#e3b878]">
                      {tour.location}
                    </p>

                    <h3 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                      {tour.title}
                    </h3>

                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
                      {tour.duration}
                    </p>
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <p className="max-w-xl text-sm leading-7 text-[#211914]/60">
                    {tour.short_description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#211914]/10 pt-6">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#211914]/40">
                      {tour.category}
                    </span>

                    <Link
                      href={`/tours/${tour.slug}`}
                      className="group/button inline-flex items-center gap-5 border border-[#211914]/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#b8793f] hover:bg-[#d59a55] hover:text-[#211914]"
                    >
                      Explore Journey

                      <span className="text-base transition-transform duration-300 group-hover/button:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}