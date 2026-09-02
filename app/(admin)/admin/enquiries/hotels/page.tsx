import { supabase } from "@/lib/supabase";

export default async function HotelEnquiriesPage() {
  const { data: enquiries } = await supabase
    .from("hotel_enquiries")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          Admin Panel
        </p>

        <h2 className="mt-3 text-5xl font-medium tracking-[-0.04em]">
          Hotel Enquiries
        </h2>
      </div>

      <div className="overflow-hidden border border-white/10">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-[10px] uppercase tracking-[0.18em] text-white/45">
              <th className="px-5 py-4">Customer</th>
              <th className="px-5 py-4">Phone</th>
              <th className="px-5 py-4">Destination</th>
              <th className="px-5 py-4">Check In</th>
              <th className="px-5 py-4">Guests</th>
              <th className="px-5 py-4">Received</th>
            </tr>
          </thead>

          <tbody>
            {enquiries?.length ? (
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
                    <p>{item.destination}</p>
                  </td>

                  <td className="px-5 py-5">{item.check_in}</td>

                  <td className="px-5 py-5">
                    {item.adults}A / {item.children}C
                  </td>

                  <td className="px-5 py-5">
                    {new Date(item.created_at).toLocaleDateString("en-GB")}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="py-16 text-center text-white/40"
                >
                  No hotel enquiries yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}