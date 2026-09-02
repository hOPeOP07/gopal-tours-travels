import Image from "next/image";
import Link from "next/link";

export default function AboutGopalTravels() {
  return (
    <section
      id="about"
      className="bg-[#f4efe6] px-6 py-24 text-[#211914] sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#b8793f]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a6335]">
              About Gopal Travels
            </p>
          </div>

          <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Travel should feel
            <span className="block font-serif italic font-normal text-[#b8793f]">
              effortless.
            </span>
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-sm leading-7 text-[#211914]/60">
            <p>
              At Gopal Travels, we believe a memorable journey begins long
              before the first departure. It begins with knowing where you
              want to go and shaping the experience around you.
            </p>

            <p>
              From discovering remarkable destinations and finding the right
              place to stay, to arranging flights and bringing the details
              together, our approach is simple: make travel feel considered,
              personal and easy.
            </p>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-px bg-[#211914]/10 sm:grid-cols-3">
            <div className="bg-[#f4efe6] py-5 pr-5">
              <p className="text-2xl font-medium tracking-[-0.03em]">
                India
              </p>

              <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#211914]/40">
                Destinations
              </p>
            </div>

            <div className="bg-[#f4efe6] px-5 py-5">
              <p className="text-2xl font-medium tracking-[-0.03em]">
                Tailored
              </p>

              <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#211914]/40">
                Journeys
              </p>
            </div>

            <div className="bg-[#f4efe6] py-5 pl-5">
              <p className="text-2xl font-medium tracking-[-0.03em]">
                One Team
              </p>

              <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#211914]/40">
                Travel Support
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-8 border border-[#211914]/20 px-7 py-4 text-[9px] font-bold uppercase tracking-[0.22em] transition-all duration-300 hover:border-[#b8793f] hover:bg-[#d59a55] hover:text-[#211914]"
          >
            Discover Our Story

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="relative min-h-[560px] overflow-hidden bg-[#211914]">
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85"
            alt="Taj Mahal in Agra"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
            <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#e3b878]">
              Made for the journey
            </p>

            <p className="mt-3 max-w-sm text-2xl font-medium leading-tight tracking-[-0.02em]">
              From the first idea to the moment you return home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}