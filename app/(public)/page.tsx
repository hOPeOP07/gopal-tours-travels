import DiscoverIndia from "@/components/home/DiscoverIndia";
import Hero from "@/components/home/Hero";
import TourShowcase from "@/components/tours/TourShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverIndia />
      <TourShowcase />
      <div id="tours" />
      <div id="hotels" />
      <div id="flights" />
      <div id="about" />
      <div id="enquire" />
    </main>
  );
}