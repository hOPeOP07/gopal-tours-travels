import Image from "next/image";
import Link from "next/link";

const hotelScenes = [
  {
    title: "Luxury Resorts",
    description:
      "Refined stays, exceptional service and beautiful settings for a memorable escape.",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Boutique Properties",
    description:
      "Character-filled hotels and intimate stays chosen around the way you want to travel.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Staycations",
    description:
      "Relaxing getaways closer to home, from peaceful retreats to premium city escapes.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function HotelsPage() {
  return (
    <main className="bg-[#f4efe6] text-[#211914]">
      {/* HERO */}
      <section className="bg-[#211914] px-6 pb-24 pt-28 text-white sm:px-10 lg:px-14 lg:pb-32 lg:pt-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d8a15e]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                Hotels & Stays
              </p>
            </div>

            <h1 className="max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Stay somewhere
              <span className="block font-serif italic font-normal text-[#d8a15e]">
                worth remembering.
              </span>
            </h1>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 lg:ml-auto">
            From comfortable city hotels to exceptional luxury properties, we
            help arrange the right stay for your journey across India.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9a6335]">
                Hotel Assistance
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                You tell us where.
                <span className="block font-serif italic font-normal text-[#b8793f]">
                  We find the stay.
                </span>
              </h2>

              <div className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-[#211914]/60">
                <p>
                  Gopal Travels arranges hotel stays and luxury properties across
                  India for holidays, staycations, business travel and special
                  occasions.
                </p>

                <p>
                  Whether you are looking for a comfortable hotel, a boutique
                  property, a family-friendly stay or a premium resort, tell us
                  your destination and requirements and our travel team will help
                  find suitable options.
                </p>
              </div>

              <Link
                href="/enquiry/hotel"
                className="group mt-9 inline-flex items-center gap-8 bg-[#d59a55] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#211914] shadow-[0_5px_0_#8c5e2f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e] active:translate-y-[2px] active:shadow-[0_2px_0_#8c5e2f]"
              >
                Enquire for a Hotel
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="relative min-h-[460px] overflow-hidden bg-[#211914]">
              <Image
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85"
                alt="Luxury resort overlooking a tropical landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#e3b878]">
                  Across India
                </p>

                <p className="mt-3 max-w-sm text-2xl font-medium leading-tight tracking-[-0.03em]">
                  From weekend stays to unforgettable escapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOTEL TYPES */}
      <section className="bg-[#211914] px-6 py-20 text-white sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#e3b878]">
              Find Your Stay
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              A stay for every
              <span className="font-serif italic font-normal text-[#d8a15e]">
                {" "}
                kind of journey.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {hotelScenes.map((scene, index) => (
              <article
                key={scene.title}
                className="group relative min-h-[440px] overflow-hidden bg-[#30251e]"
              >
                <Image
                  src={scene.image}
                  alt={scene.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center border border-white/25 bg-black/10 text-[9px] font-bold backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                  <h3 className="text-3xl font-medium tracking-[-0.03em]">
                    {scene.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                    {scene.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 border border-[#211914]/10 bg-white/35 p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9a6335]">
              Let&apos;s plan your stay
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
              Tell us what you need, and we&apos;ll take it from there.
            </h2>
          </div>

          <Link
            href="/enquiry/hotel"
            className="group inline-flex shrink-0 items-center gap-7 border border-[#211914]/20 px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#b8793f] hover:bg-[#d59a55] hover:text-[#211914]"
          >
            Hotel Enquiry
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}