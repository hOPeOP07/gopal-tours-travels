"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Hotel = {
  id: string;
  name: string;
  slug: string;
  location: string;
  category: string;
  price: string;
};

export default function HotelsAdminPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHotels = async () => {
    const { data } = await supabase
      .from("hotels")
      .select("*")
      .order("created_at", { ascending: false });

    setHotels((data as Hotel[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    void fetchHotels();
  }, []);

  const deleteHotel = async (id: string, name: string) => {
    const confirmDelete = window.confirm(
      `Delete "${name}"?\n\nThis action cannot be undone.`
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("hotels")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setHotels((prev) => prev.filter((hotel) => hotel.id !== id));
    alert("Hotel deleted successfully!");
  };

  return (
    <>
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
            Admin Panel
          </p>

          <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
            Manage Hotels
          </h2>
        </div>

        <Link
          href="/admin/hotels/new"
          className="bg-[#d59a55] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] hover:bg-[#e3b878]"
        >
          + Add Hotel
        </Link>
      </div>

      <div className="overflow-hidden border border-white/10">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-[10px] uppercase tracking-[0.18em] text-white/45">
              <th className="px-5 py-4">Hotel</th>
              <th className="px-5 py-4">Category</th>
              <th className="px-5 py-4">Price</th>
              <th className="px-5 py-4">Location</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="py-16 text-center text-white/40">
                  Loading hotels...
                </td>
              </tr>
            ) : hotels.length ? (
              hotels.map((hotel) => (
                <tr
                  key={hotel.id}
                  className="border-t border-white/10 hover:bg-white/[0.03]"
                >
                  <td className="px-5 py-5">
                    <p className="font-medium">{hotel.name}</p>
                    <p className="text-xs text-white/40">{hotel.slug}</p>
                  </td>

                  <td className="px-5 py-5">{hotel.category}</td>

                  <td className="px-5 py-5">
                    <span className="inline-block rounded bg-[#d59a55]/10 px-3 py-1 text-xs font-semibold text-[#e3b878]">
                      {hotel.price}
                    </span>
                  </td>

                  <td className="px-5 py-5">{hotel.location}</td>

                  <td className="px-5 py-5">
                    <div className="flex gap-3">
                      <Link
                        href={`/admin/hotels/${hotel.id}`}
                        className="border border-white/10 px-3 py-2 text-xs hover:border-[#d59a55]"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteHotel(hotel.id, hotel.name)}
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
                <td colSpan={5} className="py-16 text-center text-white/40">
                  No hotels added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}