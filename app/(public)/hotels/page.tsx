"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Hotel = {
  id: string;
  name: string;
  slug: string;
  location: string;
  category: string;
  image: string;
  price: string;
};

export default function HotelsPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      const { data } = await supabase
        .from("hotels")
        .select("*")
        .order("created_at", { ascending: false });

      setHotels((data as Hotel[]) || []);
      setLoading(false);
    };

    void fetchHotels();
  }, []);

  return (
    <main className="bg-[#f4efe6] min-h-screen">
      {/* Hero */}
      <section className="bg-[#211914] px-6 py-24 text-white sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#d8a15e]">
            Luxury • Heritage • Mountain
          </p>

          <h1 className="mt-4 text-5xl font-medium leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Discover Hotels
          </h1>

          <p className="mt-6 max-w-2xl text-white/60">
            Handpicked stays across India—from luxury resorts and heritage
            palaces to peaceful mountain retreats.
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          {loading ? (
            <div className="py-20 text-center text-[#211914]/50">
              Loading hotels...
            </div>
          ) : hotels.length === 0 ? (
            <div className="py-20 text-center text-[#211914]/50">
              No hotels available.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {hotels.map((hotel) => (
                <article
                  key={hotel.id}
                  className="group overflow-hidden rounded bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      unoptimized
                      sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#b8793f]">
                      {hotel.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-medium text-[#211914]">
                      {hotel.name}
                    </h2>

                    <p className="mt-1 text-sm text-[#211914]/55">
                      {hotel.location}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#b8793f]">
                        {hotel.price}
                      </span>

                      <Link
                        href={`/hotels/${hotel.slug}`}
                        className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#211914] transition hover:text-[#b8793f]"
                      >
                        View
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}