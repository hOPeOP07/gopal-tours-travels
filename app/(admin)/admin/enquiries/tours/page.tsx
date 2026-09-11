import { supabase } from "@/lib/supabase";

export default async function TourEnquiriesPage() {
  const { data: enquiries } = await supabase
    .from("tour_enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h1 className="mt-3 text-4xl font-medium tracking-[-0.03em]">
          Tour Enquiries
        </h1>
      </div>

      <section className="border border-white/10 bg-white/[0.02]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead className="border-b border-white/10 bg-white/5">
              <tr className="text-left text-[10px] uppercase tracking-[0.2em] text-white/50">
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Tour</th>
                <th className="px-5 py-4">Travel Date</th>
                <th className="px-5 py-4">Travellers</th>
                <th className="px-5 py-4">Requirements</th>
                <th className="px-5 py-4">Received</th>
              </tr>
            </thead>

            <tbody>
              {enquiries?.length ? (
                enquiries.map((e) => (
                  <tr
                    key={e.id}
                    className="border-b border-white/10 hover:bg-white/[0.03]"
                  >
                    <td className="px-5 py-5">
                      <div className="font-medium">{e.name}</div>
                      <div className="mt-1 text-xs text-white/50">
                        {e.email}
                      </div>
                    </td>

                    <td className="px-5 py-5">{e.phone}</td>

                    <td className="px-5 py-5">
                      <div className="font-medium">{e.tour_name}</div>
                      <div className="mt-1 text-xs text-white/50">
                        {e.tour_slug}
                      </div>
                    </td>

                    <td className="px-5 py-5">{e.travel_date}</td>

                    <td className="px-5 py-5">
                      {e.travellers} ({e.adults}A / {e.children}C)
                    </td>

                    <td className="px-5 py-5 max-w-[260px]">
                     <p className="text-sm text-white/80 whitespace-pre-wrap">
                       {e.requirements || "—"}
                    </p>
                    </td>

                    <td className="px-5 py-5 text-white/60">
                      {new Date(e.created_at).toLocaleDateString("en-IN")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-white/40"
                  >
                    No tour enquiries yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}