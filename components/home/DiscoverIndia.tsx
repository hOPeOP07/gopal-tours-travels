const destinations = [
    {
      name: "Himalayas",
      location: "Manali · Himachal Pradesh",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Royal Rajasthan",
      location: "Jaipur · Rajasthan",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=90",
    },
    {
      name: "Kashmir",
      location: "Pahalgam · Jammu & Kashmir",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=90",
    },
  ];
  
  export default function DiscoverIndia() {
    return (
      <section className="bg-[#f4efe6] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#b8793f]" />
  
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a6335]">
                  Discover India
                </p>
              </div>
  
              <h2 className="max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#211a16] sm:text-6xl lg:text-7xl">
                One country.
                <span className="block font-serif italic font-normal text-[#b8793f]">
                  Endless stories.
                </span>
              </h2>
            </div>
  
            <p className="max-w-lg text-base leading-7 text-[#211a16]/60 lg:ml-auto">
              From snow-covered mountains to royal cities and tropical
              coastlines, discover journeys shaped around the places that make
              India unforgettable.
            </p>
          </div>
  
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {destinations.map((destination, index) => (
              <article
                key={destination.name}
                className={`group relative overflow-hidden ${
                  index === 1 ? "md:translate-y-10" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#211a16]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${destination.image}")`,
                    }}
                  />
  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
  
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#e3b878]">
                      {destination.location}
                    </p>
  
                    <h3 className="text-3xl font-medium tracking-[-0.03em] text-white">
                      {destination.name}
                    </h3>
  
                    <div className="mt-5 h-px w-8 bg-white/60 transition-all duration-300 group-hover:w-16" />
                  </div>
  
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/30 bg-black/10 text-white backdrop-blur-md transition duration-300 group-hover:border-[#e3b878] group-hover:bg-[#d59a55] group-hover:text-[#211a16]">
                    <span className="text-sm">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }