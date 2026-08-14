const hotels = [
    {
      name: "The Oberoi Amarvilas",
      location: "Agra · Uttar Pradesh",
      category: "Luxury Stay",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",
    },
    {
      name: "Mountain Retreat",
      location: "Manali · Himachal Pradesh",
      category: "Mountain Escape",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=90",
    },
    {
      name: "Royal Palace Stay",
      location: "Udaipur · Rajasthan",
      category: "Heritage Luxury",
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=90",
    },
  ];
  
  export default function HotelShowcase() {
    return (
      <section className="bg-[#f4efe6] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#b8793f]" />
  
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a6335]">
                  Stay Your Way
                </p>
              </div>
  
              <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#211a16] sm:text-6xl lg:text-7xl">
                Places to stay.
                <span className="block font-serif italic font-normal text-[#b8793f]">
                  Memories to keep.
                </span>
              </h2>
            </div>
  
            <p className="max-w-md text-sm leading-6 text-[#211a16]/60 lg:ml-auto">
              From palace hotels and mountain retreats to intimate escapes,
              choose stays that become part of the journey.
            </p>
          </div>
  
          <div className="mt-16 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="group relative overflow-hidden">
              <div className="relative aspect-[16/11] overflow-hidden bg-[#211a16]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-1000 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${hotels[0].image}")`,
                  }}
                />
  
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
  
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#e3b878]">
                    {hotels[0].category} · {hotels[0].location}
                  </p>
  
                  <h3 className="text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
                    {hotels[0].name}
                  </h3>
  
                  <div className="mt-5 h-px w-10 bg-white/60 transition-all duration-300 group-hover:w-20" />
                </div>
  
                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/30 bg-black/10 text-white backdrop-blur-md transition duration-300 group-hover:border-[#e3b878] group-hover:bg-[#d59a55] group-hover:text-[#211a16]">
                  ↗
                </span>
              </div>
            </article>
  
            <div className="grid gap-5">
              {hotels.slice(1).map((hotel) => (
                <article
                  key={hotel.name}
                  className="group relative overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#211a16]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-1000 ease-out group-hover:scale-105"
                      style={{
                        backgroundImage: `url("${hotel.image}")`,
                      }}
                    />
  
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
  
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#e3b878]">
                        {hotel.category} · {hotel.location}
                      </p>
  
                      <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">
                        {hotel.name}
                      </h3>
                    </div>
  
                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/30 bg-black/10 text-white backdrop-blur-md transition duration-300 group-hover:border-[#e3b878] group-hover:bg-[#d59a55] group-hover:text-[#211a16]">
                      ↗
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
  
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="group inline-flex items-center gap-8 border border-[#211a16]/20 bg-white/40 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#211a16] shadow-[0_6px_0_rgba(65,45,32,0.12)] transition-all duration-200 hover:-translate-y-1 hover:border-[#b8793f] hover:bg-[#d59a55] hover:shadow-[0_8px_0_rgba(124,79,38,0.35)] active:translate-y-[2px] active:shadow-[0_2px_0_rgba(65,45,32,0.12)]"
            >
              Explore Hotels
  
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    );
  }