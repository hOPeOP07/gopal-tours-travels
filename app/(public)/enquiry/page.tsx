import EnquiryForm from "@/components/enquiry/EnquiryForm";
import { getTourBySlug } from "@/data/tours";

type EnquiryPageProps = {
  searchParams: Promise<{
    type?: string;
    tour?: string;
  }>;
};

export default async function EnquiryPage({
  searchParams,
}: EnquiryPageProps) {
  const params = await searchParams;

  const service =
    params.type === "tour"
      ? "tour"
      : params.type === "flight"
        ? "flight"
        : "hotel";

  const tour = params.tour ? getTourBySlug(params.tour) : undefined;

  return (
    <EnquiryForm
      service={service}
      tourName={tour?.title}
      tourSlug={tour?.slug}
    />
  );
}