import { supabase } from "@/lib/supabase";

export default async function FlightEnquiriesPage() {
  const { data: enquiries } = await supabase
    .from("flight_enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
          Flight Enquiries
        </h2>
      </div>

      <div className="overflow-hidden border border-white/10">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-[10px] uppercase tracking-[0.18em] text-white/45">
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Phone</th>
              <th className="px-5 py-4">Route</th>
              <th className="px-5 py-4">Departure</th>
              <th className="px-5 py-4">Trip</th>
              <th className="px-5 py-4">Received</th>
            </tr>
          </thead>

          <tbody>
            {enquiries && enquiries.length > 0 ? (
              enquiries.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-white/10 hover:bg-white/[0.03]"
                >
                  <td className="px-5 py-5">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-white/50">{item.email}</p>
                  </td>

                  <td className="px-5 py-5">{item.phone}</td>

                  <td className="px-5 py-5">
                    <p>
                      {item.from_city} → {item.to_city}
                    </p>
                  </td>

                  <td className="px-5 py-5">{item.departure_date}</td>

                  <td className="px-5 py-5">
                    <p>{item.trip_type ?? "One Way"}</p>
                    <p className="text-xs text-white/50">
                      {item.travellers ?? 1} Traveller
                      {(item.travellers ?? 1) > 1 ? "s" : ""}
                    </p>
                  </td>

                  <td className="px-5 py-5">
                    {new Date(item.created_at).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-16 text-center text-white/40">
                  No flight enquiries yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}