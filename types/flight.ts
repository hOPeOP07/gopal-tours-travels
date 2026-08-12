export interface FlightEnquiry {
  id: string;
  tripType: "one-way" | "round-trip";
  from: string;
  to: string;
  departureDate: string;
  returnDate: string | null;
  adults: number;
  children: number;
  infants: number;
  travelClass: "economy" | "premium-economy" | "business" | "first";
  extraRequests: string;
}
