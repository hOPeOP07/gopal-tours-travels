"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Tour = {
  id: string;
  title: string;
  slug: string;
  location: string;
  duration: string;
  price: string;
  hero_image: string;
  featured: boolean;
};

export default function TourShowcase() {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      const { data } = await supabase
        .from("tours")
        .select("*")
        .eq("featured", true)
        .limit(4);

      if (data) setTours(data as Tour[]);
    };

    void fetchTours();
  }, []);

  if (tours.length === 0) return null;

  return (
    <section className="bg-[#211914] px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d8a15e]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e3b878]">
                Curated Tours
              </p>
            </div>

            <h2 className="max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Journeys worth
              <span className="block font-serif italic font-normal text-[#d8a15e]">
                remembering.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/55">
            Handpicked journeys across India's mountains, palaces,
            coastlines and cultural heartlands.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {tours.map((tour, index) => (
            <article
              key={tour.id}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#30251e]">
                <Image
                  src={tour.hero_image}
                  alt={tour.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6 flex h-9 w-9 items-center justify-center border border-white/25 bg-black/10 text-[10px] font-semibold backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e3b878]">
                    {tour.location}
                  </p>

                  <h3 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                    {tour.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/55">
                      {tour.duration}
                    </span>

                    <Link
                      href={`/tours/${tour.slug}`}
                      aria-label={`Explore ${tour.title}`}
                      className="flex h-10 w-10 items-center justify-center border border-white/30 bg-white/5 text-sm backdrop-blur-md transition duration-300 hover:border-[#d8a15e] hover:bg-[#d8a15e] hover:text-[#211914]"
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/tours"
            className="group inline-flex items-center gap-8 border border-white/20 bg-white/5 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] shadow-[0_6px_0_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-[#d8a15e] hover:bg-[#d8a15e] hover:text-[#211914] hover:shadow-[0_8px_0_rgba(124,79,38,0.8)] active:translate-y-[2px] active:shadow-[0_2px_0_rgba(0,0,0,0.35)]"
          >
            View All Tours
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}