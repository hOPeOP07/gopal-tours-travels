import { supabase } from "./supabase";

export type Tour = {
  id: string;
  title: string;
  slug: string;
  location: string;
  region: string;
  duration: string;
  short_description: string;
  description: string;
  hero_image: string;
  starting_price: string;
  category: string;
  featured: boolean;
  active: boolean;
};

export async function getActiveTours() {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data as Tour[];
}

export async function getFeaturedTours() {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("active", true)
    .eq("featured", true);

  if (error) {
    console.error(error);
    return [];
  }

  return data as Tour[];
}

export async function getTourBySlug(slug: string) {
  const { data, error } = await supabase
    .from("tours")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) return null;

  return data as Tour;
}