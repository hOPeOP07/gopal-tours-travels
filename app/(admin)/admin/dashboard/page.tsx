import { supabase } from "@/lib/supabase";

export default async function Dashboard() {
  const [
    { data: tourEnquiries },
    { data: hotelEnquiries },
    { data: flightEnquiries },
    { data: tours },
  ] = await Promise.all([
    supabase
      .from("tour_enquiries")
      .select("*")
      .order("created_at", { ascending: false }),

    supabase
      .from("hotel_enquiries")
      .select("*")
      .order("created_at", { ascending: false }),

    supabase
      .from("flight_enquiries")
      .select("*")
      .order("created_at", { ascending: false }),

    supabase.from("tours").select("*"),
  ]);

  const recent = [
    ...(tourEnquiries ?? []).map((e) => ({
      name: e.name,
      service: "Tour",
      destination: e.tour_name ?? e.tour_slug,
      date: e.created_at,
    })),

    ...(hotelEnquiries ?? []).map((e) => ({
      name: e.name,
      service: "Hotel",
      destination: e.destination,
      date: e.created_at,
    })),

    ...(flightEnquiries ?? []).map((e) => ({
      name: e.name,
      service: "Flight",
      destination: `${e.from_city} → ${e.to_city}`,
      date: e.created_at,
    })),
  ]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 8);

  const stats = [
    { label: "Tour Enquiries", value: String(tourEnquiries?.length ?? 0) },
    { label: "Hotel Enquiries", value: String(hotelEnquiries?.length ?? 0) },
    { label: "Flight Enquiries", value: String(flightEnquiries?.length ?? 0) },
    { label: "Active Tours", value: String(tours?.length ?? 0) },
  ];

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Overview
        </p>
        <h2 className="mt-3 text-4xl font-medium tracking-[-0.03em]">
          Welcome back.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/45">
              {item.label}
            </p>
            <h3 className="mt-3 text-5xl font-medium text-[#e3b878]">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="border border-white/10">
          <div className="border-b border-white/10 px-6 py-5">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#d8a15e]">
              Latest Enquiries
            </p>
          </div>

          <table className="w-full">
            <thead className="bg-white/5">
              <tr className="text-left text-[9px] uppercase tracking-[0.2em] text-white/40">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Destination</th>
                <th className="px-6 py-4">Received</th>
              </tr>
            </thead>

            <tbody>
              {recent.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-white/40"
                  >
                    No enquiries yet.
                  </td>
                </tr>
              ) : (
                recent.map((row, index) => (
                  <tr
                    key={index}
                    className="border-t border-white/10 hover:bg-white/[0.03]"
                  >
                    <td className="px-6 py-5 text-sm">{row.name}</td>
                    <td className="px-6 py-5 text-sm">{row.service}</td>
                    <td className="px-6 py-5 text-sm">{row.destination}</td>
                    <td className="px-6 py-5 text-sm text-white/60">
                      {new Date(row.date).toLocaleDateString("en-GB")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>

        <section className="border border-white/10 p-6">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#d8a15e]">
            Quick Actions
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Manage Tours",
              "Manage Offers",
              "View Tour Enquiries",
              "Settings",
            ].map((item) => (
              <button
                key={item}
                className="flex w-full items-center justify-between border border-white/10 px-4 py-4 text-left text-sm transition hover:border-[#d59a55] hover:bg-[#d59a55]/10"
              >
                {item}
                <span>→</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}