import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, MapPin, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";


type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TourPage({ params }: Props) {
  const { slug } = await params;

  const [tourRes, galleryRes, itineraryRes, inclusionRes] = await Promise.all([
    supabase.from("tours").select("*").eq("slug", slug).single(),

    supabase
      .from("tour_gallery")
      .select("*")
      .eq("tour_slug", slug)
      .order("display_order"),

    supabase
      .from("tour_itinerary")
      .select("*")
      .eq("tour_slug", slug)
      .order("day"),

    supabase
      .from("tour_inclusions")
      .select("*")
      .eq("tour_slug", slug),
  ]);

  if (!tourRes.data) notFound();

  const tour = tourRes.data;
  const gallery = galleryRes.data ?? [];
  const itinerary = itineraryRes.data ?? [];

  const inclusions = (inclusionRes.data ?? [])
    .filter((i) => i.type === "inclusion")
    .map((i) => i.item);

  const exclusions = (inclusionRes.data ?? [])
    .filter((i) => i.type === "exclusion")
    .map((i) => i.item);

  return (
    <main className="bg-[#211914] text-white">
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[720px] w-full overflow-hidden">
        <Image
          src={tour.hero_image}
          alt={tour.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211914] via-black/20 to-black/30" />

        <div className="relative z-10 flex h-full items-end px-6 pb-14 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="mb-6 flex items-center gap-3 text-[#d8a15e]">
              <span className="h-px w-8 bg-[#d8a15e]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                Signature Journey
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-medium leading-none tracking-[-0.05em] sm:text-7xl lg:text-[110px]">
              {tour.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#d8a15e]" />
                {tour.location}
              </div>

              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#d8a15e]" />
                {tour.duration}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8a15e]">
              The Experience
            </p>

            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
              Crafted around
              <span className="block font-serif italic font-normal text-[#d8a15e]">
                unforgettable moments.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-lg leading-8 text-white/70">
              {tour.description}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {gallery.length > 0 && (
        <section className="px-6 pb-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8a15e]">
              The Experience
            </p>

            <h2 className="mb-12 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
              See the journey.
            </h2>

            <div className="grid grid-cols-12 gap-4">
              {gallery[0] && (
                <div className="col-span-12 md:col-span-8">
                  <GalleryCard image={gallery[0]} height="h-[420px]" />
                </div>
              )}

              {gallery[1] && (
                <div className="col-span-12 md:col-span-4">
                  <GalleryCard image={gallery[1]} height="h-[420px]" />
                </div>
              )}

              {gallery[2] && (
                <div className="col-span-12 md:col-span-4">
                  <GalleryCard image={gallery[2]} height="h-[360px]" />
                </div>
              )}

              {gallery[3] && (
                <div className="col-span-12 md:col-span-8">
                  <GalleryCard image={gallery[3]} height="h-[360px]" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ITINERARY */}
      {itinerary.length > 0 && (
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8a15e]">
              The Itinerary
            </p>

            <h2 className="mb-14 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
              Your journey,
              <span className="font-serif italic font-normal text-[#d8a15e]">
                {" "}day by day.
              </span>
            </h2>

            <div className="space-y-8">
              {itinerary.map((day) => (
                <div
                  key={day.day}
                  className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-12"
                >
                  <div className="md:col-span-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
                      Day {String(day.day).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-medium">{day.title}</h3>
                  </div>

                  <div className="md:col-span-6">
                    <p className="leading-7 text-white/65">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INCLUSIONS */}
      {(inclusions.length > 0 || exclusions.length > 0) && (
        <section className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2">
            {inclusions.length > 0 && (
              <div>
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8a15e]">
                  What&apos;s Included
                </p>

                <div className="space-y-4">
                  {inclusions.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-b border-white/10 pb-4"
                    >
                      <Check size={18} className="text-[#d8a15e]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {exclusions.length > 0 && (
              <div>
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8a15e]">
                  Not Included
                </p>

                <div className="space-y-4 text-white/70">
                  {exclusions.map((item) => (
                    <div
                      key={item}
                      className="border-b border-white/10 pb-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

     
      {/* ENQUIRY CTA */}
<section className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16">
  <div className="mx-auto max-w-[980px] text-center">
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d8a15e]">
      Begin your journey
    </p>

    <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
      Let&apos;s plan your
      <span className="block font-serif italic font-normal text-[#d8a15e]">
        next escape.
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">
      Receive a personalized itinerary, pricing and travel assistance from Gopal Travels.
    </p>

    <a
      href={`/enquiry/tour/${tour.slug}`}
      className="mt-10 inline-flex items-center gap-3 bg-[#d8a15e] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#211914] transition hover:bg-[#e7b97a]"
    >
      Send Tour Enquiry
      <span>→</span>
    </a>
  </div>
</section>
     
    </main>
  );
}

type GalleryImage = {
  image_url: string;
  caption: string;
};

function GalleryCard({
  image,
  height,
}: {
  image: GalleryImage;
  height: string;
}) {
  const src = image.image_url.startsWith("/")
    ? image.image_url
    : image.image_url;

  return (
    <div className={`group relative ${height} overflow-hidden`}>
      <Image
        src={src}
        alt={image.caption}
        fill
        sizes="(max-width:768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8a15e]">
          {image.location}
        </p>

        <h3 className="mt-2 text-xl font-medium">{image.caption}</h3>
      </div>
    </div>
  );
}