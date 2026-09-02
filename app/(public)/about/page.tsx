import Image from "next/image";
import Link from "next/link";

const whatsappNumber = "918896030199";

const whatsappMessage = encodeURIComponent(
  "Hello Gopal Travels, I would like to get in touch regarding travel planning.",
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function AboutPage() {
  return (
    <main className="bg-[#f4efe6] text-[#211914]">
      {/* Hero */}
      <section className="bg-[#211914] px-6 pb-24 pt-28 text-white sm:px-10 lg:px-14 lg:pb-32 lg:pt-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d8a15e]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                About Gopal Travels
              </p>
            </div>

            <h1 className="text-6xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Travel should feel
              <span className="block font-serif italic font-normal text-[#d8a15e]">
                effortless.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55">
              Thoughtful travel planning, carefully considered experiences and
              support from the first idea to the moment you return home.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9a6335]">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              More than booking a trip.
              <span className="block font-serif italic font-normal text-[#b8793f]">
                Creating the journey.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-[#211914]/60">
              <p>
                At Gopal Travels, we believe good travel planning starts with
                listening. Every journey has different priorities, and the
                details matter.
              </p>

              <p>
                Whether you are looking for a carefully planned tour, a
                comfortable hotel, a luxury property or help arranging
                flights, our role is to bring the pieces together and make
                travel feel simpler.
              </p>

              <p>
                From destinations across India to journeys beyond it, we help
                turn travel ideas into experiences that feel personal,
                considered and easy to enjoy.
              </p>
            </div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden bg-[#211914]">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85"
              alt="Taj Mahal in Agra"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#e3b878]">
                Gopal Travels
              </p>

              <p className="mt-3 max-w-sm text-2xl font-medium leading-tight tracking-[-0.02em]">
                From the first idea to the moment you return home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#211914] px-6 py-20 text-white sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#e3b878]">
              What We Believe
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              The details make
              <span className="font-serif italic font-normal text-[#d8a15e]">
                {" "}
                the difference.
              </span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            <div className="bg-[#211914] p-8 sm:p-10">
              <p className="text-3xl font-medium tracking-[-0.03em]">
                India
              </p>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Destinations
              </p>

              <p className="mt-5 text-sm leading-6 text-white/50">
                Discover journeys across India&apos;s mountains, coastlines,
                cities, heritage destinations and cultural heartlands.
              </p>
            </div>

            <div className="bg-[#211914] p-8 sm:p-10">
              <p className="text-3xl font-medium tracking-[-0.03em]">
                Tailored
              </p>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Journeys
              </p>

              <p className="mt-5 text-sm leading-6 text-white/50">
                Travel plans shaped around your destination, dates,
                preferences and the kind of experience you want.
              </p>
            </div>

            <div className="bg-[#211914] p-8 sm:p-10">
              <p className="text-3xl font-medium tracking-[-0.03em]">
                One Team
              </p>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                Travel Support
              </p>

              <p className="mt-5 text-sm leading-6 text-white/50">
                One point of contact to help bring your travel plans together
                and make the process easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Socials & Contact */}
      <section className="px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 border-t border-[#211914]/10 pt-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#9a6335]">
                Stay Connected
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Have a journey in mind?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#211914]/55">
                Whether you already know where you want to go or simply want
                to start exploring, speak directly with the Gopal Travels
                team.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 sm:flex-row md:flex-col md:items-stretch">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-10 bg-[#d59a55] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#211914] shadow-[0_5px_0_#8c5e2f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e] active:translate-y-[2px] active:shadow-[0_2px_0_#8c5e2f]"
              >
                Contact Us on WhatsApp

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <div className="flex items-center gap-6 border border-[#211914]/10 px-6 py-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#211914]/40">
                  Socials
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#211914]/60">
                  Instagram
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#211914]/60">
                  Facebook
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}