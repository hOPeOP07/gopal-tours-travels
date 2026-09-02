"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Enquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  destination: string;
  created_at: string;
};

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ React 19 compatible
  useEffect(() => {
    let mounted = true;

    const loadEnquiries = async () => {
      const { data } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!mounted) return;

      setEnquiries((data as Enquiry[]) || []);
      setLoading(false);
    };

    void loadEnquiries();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
          All Enquiries
        </h2>
      </div>

      <div className="overflow-hidden border border-white/10">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-[10px] uppercase tracking-[0.18em] text-white/45">
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Service</th>
              <th className="px-5 py-4">Destination</th>
              <th className="px-5 py-4">Phone</th>
              <th className="px-5 py-4">Received</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="py-16 text-center text-white/40">
                  Loading enquiries...
                </td>
              </tr>
            ) : enquiries.length ? (
              enquiries.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-white/10 hover:bg-white/[0.03]"
                >
                  <td className="px-5 py-5">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-white/40">{item.email}</p>
                  </td>

                  <td className="px-5 py-5">{item.service}</td>
                  <td className="px-5 py-5">{item.destination}</td>
                  <td className="px-5 py-5">{item.phone}</td>

                  <td className="px-5 py-5">
                    {new Date(item.created_at).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-16 text-center text-white/40">
                  No enquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}