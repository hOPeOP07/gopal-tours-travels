import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import EnquiryForm from "@/components/enquiry/EnquiryForm";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TourEnquiryPage({ params }: Props) {
  const { slug } = await params;

  const { data: tour } = await supabase
    .from("tours")
    .select("title,slug")
    .eq("slug", slug)
    .single();

  if (!tour) notFound();

  return (
    <main className="bg-[#211914] min-h-screen pt-24">
      <EnquiryForm
        service="tour"
        tourName={tour.title}
        tourSlug={tour.slug}
      />
    </main>
  );
}