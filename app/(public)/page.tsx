import DiscoverIndia from "@/components/home/DiscoverIndia";
import Hero from "@/components/home/Hero";
import TourShowcase from "@/components/tours/TourShowcase";
import HotelShowcase from "@/components/hotels/HotelShowcase";
import FlightSearch from "@/components/flights/FlightSearch";
import CurrentOffers from "@/components/home/CurrentOffers";
import AboutGopalTravels from "@/components/home/AboutGopalTravels";


export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverIndia />
      <TourShowcase />
      <HotelShowcase />
      <FlightSearch />
      <CurrentOffers />
      <AboutGopalTravels />
      <div id="tours" />
      <div id="hotels" />
      <div id="flights" />
      <div id="about" />
      <div id="enquire" />
    </main>
  );
}