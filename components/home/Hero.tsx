"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const heroSlides = [
  {
    eyebrow: "Agra · Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2400&q=90",
  },
  {
    eyebrow: "Manali · Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=2400&q=90",
  },
  {
    eyebrow: "Shimla · Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=2400&q=90",
  },
  {
    eyebrow: "Kashmir · Jammu & Kashmir",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=2400&q=90",
  },
  {
    eyebrow: "Ladakh · India",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2400&q=90",
  },
  {
    eyebrow: "Rajasthan · India",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=2400&q=90",
  },
  {
    eyebrow: "Mumbai · Maharashtra",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2400&q=90",
  },
  {
    eyebrow: "Kerala · South India",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=90",
  },
  {
    eyebrow: "Goa · India",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2400&q=90",
  },
  {
    eyebrow: "Varanasi · Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2400&q=90",
  },
];

type SiteSettings = {
  company_name: string;
  tagline: string;
  logo_url: string;
};

export default function Hero() {
  const [settings, setSettings] = useState<SiteSettings>({
    company_name: "Gopal Travels",
    tagline: "TRAVELS",
    logo_url: "",
  });

  useEffect(() => {
    let mounted = true;

    const loadSettings = async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("company_name, tagline, logo_url")
        .eq("id", 1)
        .single();

      if (!mounted || !data) return;

      setSettings({
        company_name: data.company_name ?? "Gopal Travels",
        tagline: data.tagline ?? "TRAVELS",
        logo_url: data.logo_url ?? "",
      });
    };

    void loadSettings();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#211914]">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.eyebrow}
            className="absolute inset-0 animate-[heroCrossfade_70s_linear_infinite] bg-cover bg-center opacity-0"
            style={{
              backgroundImage: `url("${slide.image}")`,
              animationDelay: `${index * 7}s`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120e0b]/65 via-[#120e0b]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e0b]/80 via-transparent to-[#120e0b]/10" />
      </div>

      <header className="relative z-20">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 sm:px-10 lg:px-14">
          <Link href="/" className="group">
          <div className="flex items-center gap-4">
  {settings.logo_url ? (
    <Image
      src={settings.logo_url}
      alt={settings.company_name}
      width={60}
      height={60}
      className="h-[60px] w-[60px] rounded-full border border-white/30 bg-white/10 p-1 object-contain shadow-lg"
      unoptimized
    />
  ) : (
    <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg font-bold tracking-[0.18em] text-white backdrop-blur-md">
      GT
    </span>
  )}

  <div className="leading-none">
    <h1 className="text-[28px] font-bold tracking-[0.08em] text-white">
      {settings.company_name}
    </h1>

    <p className="mt-1 text-[11px] uppercase tracking-[0.32em] text-white/70">
      {settings.tagline}
    </p>
  </div>
</div>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            <Link
              href="/tours"
              className="text-[12px] font-medium tracking-wide text-white/75 transition hover:text-white"
            >
              Tours
            </Link>
            <Link
              href="/hotels"
              className="text-[12px] font-medium tracking-wide text-white/75 transition hover:text-white"
            >
              Hotels
            </Link>
            <Link
              href="/flights"
              className="text-[12px] font-medium tracking-wide text-white/75 transition hover:text-white"
            >
              Flights
            </Link>
            <Link
              href="#about"
              className="text-[12px] font-medium tracking-wide text-white/75 transition hover:text-white"
            >
              About
            </Link>
          </nav>

          <Link
            href="/enquiry?type=hotel"
            className="border border-white/40 bg-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e0ad6d] hover:bg-[#d59a55] hover:text-[#211a16]"
          >
            Enquire Now
          </Link>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-95px)] max-w-[1440px] items-end px-6 pb-28 pt-28 sm:px-10 lg:px-14 lg:pb-32">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#d8a15e]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#e3b878]">
              {settings.company_name} · India
            </p>
          </div>

          <h1 className="max-w-4xl text-[clamp(4rem,8vw,8rem)] font-medium leading-[0.86] tracking-[-0.055em] text-white">
            <span className="block">Travel</span>
            <span className="block font-serif italic font-normal text-[#e1b170]">
              differently.
            </span>
          </h1>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/tours"
              className="group inline-flex items-center gap-8 bg-[#d59a55] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211a16] shadow-[0_5px_0_#8c5e2f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#e2ae6e]"
            >
              Explore Journeys
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="https://wa.me/918896030199?text=Hi%20Gopal%20Travels,%20I%20would%20like%20to%20contact%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-4 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/85 transition hover:text-white"
            >
              Plan a Trip
              <span className="h-px w-7 bg-white/45 transition-all duration-300 group-hover:w-12 group-hover:bg-[#d8a15e]" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 z-20 flex items-center gap-2 sm:right-10 lg:right-14">
        {heroSlides.map((slide, index) => (
          <span
            key={slide.eyebrow}
            className="h-1 w-2 rounded-full bg-white/45 animate-[indicatorPulse_70s_linear_infinite]"
            style={{ animationDelay: `${index * 7}s` }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 hidden border-t border-white/10 bg-black/10 backdrop-blur-sm md:block">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-8 sm:px-10 lg:px-14">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/45">
            Curated journeys across India
          </p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/45">
            Discover · Experience · Remember
          </p>
        </div>
      </div>
    </section>
  );
}