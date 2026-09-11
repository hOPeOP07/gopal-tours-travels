"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Tours", href: "/admin/tours" },
  { name: "Hotels", href: "/admin/hotels" },
  { name: "Exclusive Offers", href: "/admin/offers" },
  { name: "Tour Enquiries", href: "/admin/enquiries/tours" },
  { name: "Hotel Enquiries", href: "/admin/enquiries/hotels" },
  { name: "Flight Enquiries", href: "/admin/enquiries/flights" },
  { name: "Settings", href: "/admin/settings" },
];

type SiteSettings = {
  company_name: string;
  tagline: string;
  logo_url: string;
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [settings, setSettings] = useState<SiteSettings>({
    company_name: "Gopal Travels",
    tagline: "TRAVELS CMS",
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
        tagline: data.tagline ?? "TRAVELS CMS",
        logo_url: data.logo_url ?? "",
      });
    };

    void loadSettings();

    return () => {
      mounted = false;
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("gt-admin-auth");
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-[#120e0b] text-white">
      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-[260px] border-r border-white/10 bg-[#17110d] lg:flex lg:flex-col">
          <div className="border-b border-white/10 p-8">
            <div className="flex items-center gap-3">
              {settings.logo_url ? (
                <Image
                  src={settings.logo_url}
                  alt="Logo"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded border border-[#d59a55]/30 object-cover"
                />
              ) : (
                <div className="flex h-11 w-11 items-center justify-center border border-[#d59a55]/40 bg-[#d59a55]/10 text-xs font-bold tracking-[0.25em] text-[#e3b878]">
                  GT
                </div>
              )}

              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-white">
                  {settings.company_name}
                </p>
                <p className="text-[9px] uppercase tracking-[0.28em] text-white/40">
                  {settings.tagline}
                </p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`mb-2 flex items-center justify-between px-4 py-3 text-sm transition ${
                    active
                      ? "bg-[#d59a55] text-[#211914]"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="text-xs">→</span>
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-4">
            <button
              onClick={logout}
              className="w-full border border-white/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:border-[#d59a55] hover:bg-[#d59a55] hover:text-[#211914]"
            >
              Logout
            </button>
          </div>
        </aside>

        <div className="flex-1">
          <header className="border-b border-white/10 bg-[#120e0b]/90 backdrop-blur">
            <div className="flex items-center justify-between px-6 py-5 lg:px-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#d8a15e]">
                  Admin Panel
                </p>
                <h1 className="mt-1 text-2xl font-medium">
                  {settings.company_name}
                </h1>
              </div>

              <div className="text-right">
                <p className="text-xs text-white/40">Logged in as</p>
                <p className="text-sm font-medium">
                  admin@gopaltravels.com
                </p>
              </div>
            </div>
          </header>

          <main className="p-6 lg:p-10">{children}</main>
        </div>
      </div>
    </div>
  );
}