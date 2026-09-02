"use client";

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
};

export default function ToursAdminPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ React 19 compatible
  useEffect(() => {
    let mounted = true;

    const loadTours = async () => {
      const { data } = await supabase
        .from("tours")
        .select("*")
        .order("created_at", { ascending: false });

      if (!mounted) return;

      setTours((data as Tour[]) || []);
      setLoading(false);
    };

    void loadTours();

    return () => {
      mounted = false;
    };
  }, []);

  const deleteTour = async (id: string, title: string) => {
    const confirmDelete = window.confirm(
      `Delete "${title}"?\n\nThis action cannot be undone.`
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("tours")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setTours((prev) => prev.filter((tour) => tour.id !== id));
    alert("Tour deleted successfully!");
  };

  return (
    <>
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
            Admin Panel
          </p>

          <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
            Manage Tours
          </h2>
        </div>

        <Link
          href="/admin/tours/new"
          className="bg-[#d59a55] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211914] hover:bg-[#e3b878]"
        >
          + Add Tour
        </Link>
      </div>

      <div className="overflow-hidden border border-white/10">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-[10px] uppercase tracking-[0.18em] text-white/45">
              <th className="px-5 py-4">Tour</th>
              <th className="px-5 py-4">Duration</th>
              <th className="px-5 py-4">Price</th>
              <th className="px-5 py-4">Location</th>
              <th className="px-5 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="py-16 text-center text-white/40">
                  Loading tours...
                </td>
              </tr>
            ) : tours.length ? (
              tours.map((tour) => (
                <tr
                  key={tour.id}
                  className="border-t border-white/10 hover:bg-white/[0.03]"
                >
                  <td className="px-5 py-5">
                    <p className="font-medium">{tour.title}</p>
                    <p className="text-xs text-white/40">{tour.slug}</p>
                  </td>

                  <td className="px-5 py-5">{tour.duration}</td>

                  <td className="px-5 py-5">
                    <span className="inline-block rounded bg-[#d59a55]/10 px-3 py-1 text-xs font-semibold text-[#e3b878]">
                      {tour.price}
                    </span>
                  </td>

                  <td className="px-5 py-5">{tour.location}</td>

                  <td className="px-5 py-5">
                    <div className="flex gap-3">
                      <Link
                        href={`/admin/tours/${tour.id}`}
                        className="border border-white/10 px-3 py-2 text-xs hover:border-[#d59a55]"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteTour(tour.id, tour.title)}
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
                  No tours found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}