export interface Tour {
  id: string;
  tourName: string;
  packageName: string;
  description: string;
  destinations: string[];
  duration: string;
  travelType: "flight" | "train" | "both";
  travelDate: string | null;
  price: number;
  images: string[];
  published: boolean;
}
