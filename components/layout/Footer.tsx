"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type SiteSettings = {
  company_name: string;
  tagline: string;
  logo_url: string;
};

export default function Footer() {
  const [settings, setSettings] = useState<SiteSettings>({
    company_name: "Gopal Tours & Travels",
    tagline: "Explore India With Us",
    logo_url: "",
  });

  useEffect(() => {
    const loadSettings = async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("company_name, tagline, logo_url")
        .eq("id", 1)
        .single();

      if (data) {
        setSettings({
          company_name: data.company_name || "Gopal Tours & Travels",
          tagline: data.tagline || "Explore India With Us",
          logo_url: data.logo_url || "",
        });
      }
    };

    loadSettings();
  }, []);

  return (
    <footer className="border-t border-white/10 bg-[#120e0b] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.7fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              {settings.logo_url ? (
                <Image
                  src={settings.logo_url}
                  alt={settings.company_name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border border-white/20 bg-white/5 p-1 object-contain"
                  unoptimized
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#8c5e2f] bg-white/5 text-lg font-bold text-[#d8a15e]">
                  GT
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold tracking-[0.06em] text-white">
                  {settings.company_name}
                </h3>

                <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/60">
                  {settings.tagline}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
              Your trusted travel partner for tours, hotels and flight bookings
              across India.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d8a15e]">
              Explore
            </h4>

            <div className="space-y-4 text-sm text-white/70">
              <Link href="/tours" className="block hover:text-white">
                Tours
              </Link>

              <Link href="/hotels" className="block hover:text-white">
                Hotels
              </Link>

              <Link href="/flights" className="block hover:text-white">
                Flights
              </Link>

              <Link href="/offers" className="block hover:text-white">
                Offers
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {settings.company_name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}