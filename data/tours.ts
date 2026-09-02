export type TourGalleryImage = {
  src: string;
  location: string;
  caption: string;
};

export type TourItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Tour = {
  id: string;
  slug: string;
  title: string;
  location: string;
  region: string;
  duration: string;

  shortDescription: string;
  description: string;

  heroImage: string;
  gallery: TourGalleryImage[];

  itinerary: TourItineraryDay[];

  inclusions: string[];
  exclusions: string[];

  startingPrice: string;

  category: string;

  featured: boolean;
  active: boolean;
};

export const tours: Tour[] = [
  {
    id: "himalayan-escape",
    slug: "himalayan-escape",
    title: "Himalayan Escape",
    location: "Manali · Himachal Pradesh",
    region: "North India",
    duration: "5 Days · 4 Nights",

    shortDescription:
      "A mountain escape through Manali, surrounded by pine forests, dramatic valleys and the high Himalayas.",

    description:
      "Discover the beauty of the Himalayas through a carefully planned journey around Manali, combining mountain scenery, local experiences and time to relax.",

    heroImage:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1800&q=90",

    gallery: [
      {
        src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=90",
        location: "Manali",
        caption: "Snow-capped Himalayan landscapes around Manali",
      },
      {
        src: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=90",
        location: "Old Manali",
        caption: "Charming mountain streets and wooden architecture",
      },
      {
        src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=90",
        location: "Solang Valley",
        caption: "Adventure surrounded by alpine scenery",
      },
      {
        src: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1600&q=90",
        location: "Himalayan Valleys",
        caption: "Panoramic valleys stretching across the mountains",
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description:
          "Arrive in Manali, transfer to your hotel and settle into the mountain surroundings.",
      },
      {
        day: 2,
        title: "Manali Exploration",
        description:
          "Explore the local sights, mountain landscapes and cultural highlights of Manali.",
      },
      {
        day: 3,
        title: "Mountain Experience",
        description:
          "Enjoy a scenic day exploring the surrounding Himalayan valleys.",
      },
      {
        day: 4,
        title: "Leisure & Local Discovery",
        description:
          "A relaxed day for local experiences, shopping or optional activities.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Check out and depart with the memories of your Himalayan journey.",
      },
    ],

    inclusions: [
      "Accommodation",
      "Daily breakfast",
      "Airport or station transfers",
      "Local sightseeing",
      "Travel assistance",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Travel insurance",
      "Activities not mentioned in the itinerary",
    ],

    startingPrice: "Enquire for price",
    category: "Mountain Escapes",
    featured: true,
    active: true,
  },

  {
    id: "royal-rajasthan",
    slug: "royal-rajasthan",
    title: "Royal Rajasthan",
    location: "Jaipur · Jodhpur · Udaipur",
    region: "North India",
    duration: "7 Days · 6 Nights",

    shortDescription:
      "Discover Rajasthan through grand palaces, historic forts, colourful markets and timeless heritage.",

    description:
      "Journey through Rajasthan's royal cities, discovering magnificent architecture, historic streets, local culture and the distinctive character of India's desert state.",

    heroImage:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1800&q=90",

    gallery: [
      {
        src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=90",
        location: "Jaipur",
        caption: "The vibrant Pink City and royal architecture",
      },
      {
        src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=90",
        location: "Amber Fort",
        caption: "Historic forts overlooking Rajasthan's hills",
      },
      {
        src: "/images/tours/rajasthan/jodhpur.jpg",
        location: "Jodhpur",
        caption: "Blue City streets beneath Mehrangarh Fort",
      },
      {
        src: "/images/tours/rajasthan/udaipur.jpg",
        location: "Udaipur",
        caption: "Lakeside palaces and timeless royal elegance",
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description:
          "Arrive in Jaipur and settle into the Pink City's historic atmosphere.",
      },
      {
        day: 2,
        title: "Jaipur Heritage",
        description:
          "Explore Jaipur's forts, palaces and colourful old city.",
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description:
          "Travel towards Jodhpur and discover the character of the Blue City.",
      },
      {
        day: 4,
        title: "Jodhpur Exploration",
        description:
          "Explore the historic fort, old city and local markets.",
      },
      {
        day: 5,
        title: "Jodhpur to Udaipur",
        description:
          "Continue towards Udaipur, known for its lakes and palaces.",
      },
      {
        day: 6,
        title: "Udaipur Heritage",
        description:
          "Discover Udaipur's lakeside landmarks, palaces and cultural sights.",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Check out and depart from Udaipur.",
      },
    ],

    inclusions: [
      "Accommodation",
      "Daily breakfast",
      "Private transfers",
      "Local sightseeing",
      "Travel assistance",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Travel insurance",
      "Optional activities",
    ],

    startingPrice: "Enquire for price",
    category: "Heritage Journeys",
    featured: true,
    active: true,
  },

  {
    id: "kashmir-valley",
    slug: "kashmir-valley",
    title: "Kashmir Valley",
    location: "Srinagar · Gulmarg · Pahalgam",
    region: "North India",
    duration: "6 Days · 5 Nights",

    shortDescription:
      "Experience Kashmir's lakes, valleys and mountain landscapes across Srinagar, Gulmarg and Pahalgam.",

    description:
      "Experience the landscapes of Kashmir through Srinagar's lakes, Gulmarg's mountain scenery and the peaceful valleys of Pahalgam.",

    heroImage:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1800&q=90",

    gallery: [
      {
        src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=90",
        location: "Srinagar",
        caption: "Traditional houseboats beneath the Kashmir Himalayas",
      },
      {
        src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=90",
        location: "Dal Lake",
        caption: "Morning shikara rides across Kashmir's iconic lake",
      },
      {
        src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=90",
        location: "Gulmarg",
        caption: "Snow-covered meadows and panoramic alpine scenery",
      },
      {
        src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=90",
        location: "Pahalgam",
        caption: "Peaceful valleys surrounded by rivers and pine forests",
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description:
          "Arrive in Srinagar and settle into the beautiful Kashmir Valley.",
      },
      {
        day: 2,
        title: "Srinagar Discovery",
        description:
          "Explore Srinagar and experience its gardens, markets and famous lake.",
      },
      {
        day: 3,
        title: "Gulmarg",
        description:
          "Travel to Gulmarg for spectacular mountain scenery and leisure time.",
      },
      {
        day: 4,
        title: "Pahalgam",
        description:
          "Continue to Pahalgam and discover its peaceful valleys and landscapes.",
      },
      {
        day: 5,
        title: "Valley Leisure",
        description:
          "Enjoy a relaxed day surrounded by Kashmir's natural beauty.",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Check out and depart from Srinagar.",
      },
    ],

    inclusions: [
      "Accommodation",
      "Daily breakfast",
      "Private transfers",
      "Local sightseeing",
      "Travel assistance",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Travel insurance",
      "Optional activities",
    ],

    startingPrice: "Enquire for price",
    category: "Nature & Mountains",
    featured: true,
    active: true,
  },

  {
    id: "kerala-backwaters",
    slug: "kerala-backwaters",
    title: "Kerala Backwaters",
    location: "Kochi · Munnar · Alleppey",
    region: "South India",
    duration: "6 Days · 5 Nights",

    shortDescription:
      "A relaxed journey through Kerala's tea-covered hills, tropical landscapes and peaceful backwaters.",

    description:
      "Explore Kerala from the historic streets of Kochi to the tea plantations of Munnar and the peaceful backwaters of Alleppey.",

    heroImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=90",

    gallery: [
      {
        src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=90",
        location: "Alleppey",
        caption: "Serene backwaters lined with coconut palms",
      },
      {
        src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=90",
        location: "Kochi",
        caption: "Historic coastal charm and colonial streets",
      },
      {
        src: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=90",
        location: "Munnar",
        caption: "Rolling tea plantations across misty hills",
      },
      {
        src: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1600&q=90",
        location: "Houseboat",
        caption: "A peaceful cruise through Kerala's waterways",
      },
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        description:
          "Arrive in Kochi and begin your Kerala journey.",
      },
      {
        day: 2,
        title: "Kochi Heritage",
        description:
          "Explore Kochi's historic neighbourhoods, architecture and coastal culture.",
      },
      {
        day: 3,
        title: "Munnar",
        description:
          "Travel into the hills and discover Munnar's tea plantations and scenery.",
      },
      {
        day: 4,
        title: "Munnar Exploration",
        description:
          "Enjoy the mountain landscapes and peaceful atmosphere of Munnar.",
      },
      {
        day: 5,
        title: "Alleppey Backwaters",
        description:
          "Experience Kerala's famous backwaters and surrounding villages.",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Check out and depart from Kerala.",
      },
    ],

    inclusions: [
      "Accommodation",
      "Daily breakfast",
      "Private transfers",
      "Local sightseeing",
      "Travel assistance",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Travel insurance",
      "Optional activities",
    ],

    startingPrice: "Enquire for price",
    category: "Coastal & Backwaters",
    featured: true,
    active: true,
  },
];

export function getActiveTours() {
  return tours.filter((tour) => tour.active);
}

export function getFeaturedTours() {
  return tours.filter((tour) => tour.active && tour.featured);
}

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.active && tour.slug === slug);
}