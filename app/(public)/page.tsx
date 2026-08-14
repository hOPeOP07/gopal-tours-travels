import DiscoverIndia from "@/components/home/DiscoverIndia";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverIndia />

      <div id="tours" />
      <div id="hotels" />
      <div id="flights" />
      <div id="about" />
      <div id="enquire" />
    </main>
  );
}