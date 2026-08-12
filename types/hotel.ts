export interface Hotel {
  id: string;
  hotelName: string;
  destination: string;
  hotelType: "luxury" | "2-star" | "3-star" | "4-star" | "5-star";
  description: string;
  images: string[];
  amenities: string[];
  startingPrice: number | null;
  published: boolean;
}
