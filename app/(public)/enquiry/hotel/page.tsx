import EnquiryForm from "@/components/enquiry/EnquiryForm";

export default function HotelEnquiryPage() {
  return (
    <main className="min-h-screen bg-[#f4efe6] pt-24 pb-20">
      <EnquiryForm service="hotel" />
    </main>
  );
}