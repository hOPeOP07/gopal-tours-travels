export type TravelOffer = {
    slug: string;
    title: string;
    location: string;
    duration: string;
    offerLabel: string;
    shortDescription: string;
    description: string;
    image: string;
    highlights: string[];
  };
  
  export const offers: TravelOffer[] = [
    {
      slug: "kashmir-seasonal-escape",
      title: "Kashmir Seasonal Escape",
      location: "Srinagar · Gulmarg · Pahalgam",
      duration: "6 Days · 5 Nights",
      offerLabel: "Seasonal Escape",
      shortDescription:
        "A carefully curated Kashmir journey designed around the season.",
      description:
        "Experience Kashmir through a specially curated itinerary covering scenic valleys, mountain landscapes and memorable local experiences.",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=90",
      highlights: [
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Curated local experiences",
      ],
    },
    {
      slug: "rajasthan-heritage-special",
      title: "Rajasthan Heritage Special",
      location: "Jaipur · Jodhpur · Udaipur",
      duration: "7 Days · 6 Nights",
      offerLabel: "Heritage Journey",
      shortDescription:
        "A limited-time journey through Rajasthan's grand forts, palaces and culture.",
      description:
        "Discover Rajasthan through a refined itinerary combining historic cities, royal architecture, cultural experiences and carefully selected stays.",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1800&q=90",
      highlights: [
        "Jaipur",
        "Jodhpur",
        "Udaipur",
        "Heritage experiences",
      ],
    },
    {
      slug: "kerala-monsoon-special",
      title: "Kerala Monsoon Special",
      location: "Kochi · Munnar · Alleppey",
      duration: "6 Days · 5 Nights",
      offerLabel: "Seasonal Special",
      shortDescription:
        "A peaceful Kerala escape built around lush landscapes and backwaters.",
      description:
        "Enjoy Kerala at its most atmospheric with a curated journey through green hill country, peaceful backwaters and memorable South Indian experiences.",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=90",
      highlights: [
        "Kochi",
        "Munnar",
        "Alleppey",
        "Backwater experience",
      ],
    },
  ];