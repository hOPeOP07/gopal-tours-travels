"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Offer = {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  image: string;
  valid_till: string;
};

export default function OffersAdminPage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadOffers = async () => {
      const { data } = await supabase
        .from("offers")
        .select("*")
        .order("created_at", { ascending: false });

      if (!mounted) return;

      setOffers((data as Offer[]) || []);
      setLoading(false);
    };

    void loadOffers();

    return () => {
      mounted = false;
    };
  }, []);

  const deleteOffer = async (id: number, title: string) => {
    const confirmDelete = window.confirm(
      `Delete "${title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("offers")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setOffers((prev) => prev.filter((offer) => offer.id !== id));
    alert("Offer deleted successfully!");
  };

  return (
    <>
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
            Admin Panel
          </p>

          <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
            Manage Offers
          </h2>
        </div>

        <Link
          href="/admin/offers/new"
          className="bg-[#d59a55] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] hover:bg-[#e3b878]"
        >
          + Add Offer
        </Link>
      </div>

      <div className="overflow-hidden border border-white/10">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-[10px] uppercase tracking-[0.18em] text-white/45">
              <th className="px-5 py-4">Offer</th>
              <th className="px-5 py-4">Discount</th>
              <th className="px-5 py-4">Valid Till</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="py-16 text-center text-white/40">
                  Loading offers...
                </td>
              </tr>
            ) : offers.length ? (
              offers.map((offer) => (
                <tr
                  key={offer.id}
                  className="border-t border-white/10 hover:bg-white/[0.03]"
                >
                  <td className="px-5 py-5">
                    <p className="font-medium">{offer.title}</p>
                    <p className="text-xs text-white/40">
                      {offer.subtitle}
                    </p>
                  </td>

                  <td className="px-5 py-5">
                    <span className="inline-block rounded bg-[#d59a55]/10 px-3 py-1 text-xs font-semibold text-[#e3b878]">
                      {offer.discount}
                    </span>
                  </td>

                  <td className="px-5 py-5">{offer.valid_till}</td>

                  <td className="px-5 py-5">
                    <div className="flex gap-3">
                      <Link
                        href={`/admin/offers/${offer.id}`}
                        className="border border-white/10 px-3 py-2 text-xs hover:border-[#d59a55]"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteOffer(offer.id, offer.title)}
                        className="border border-red-500/30 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-16 text-center text-white/40">
                  No offers added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}