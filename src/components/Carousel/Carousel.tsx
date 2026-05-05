"use client";
import { useState } from "react";
import Link from "next/link";

const hotels = [
  { id: "México-1", name: "Tulum, México", price: "$25,000 MXN", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { id: "Francia-1", name: "París, Francia", price: "$37,800 MXN", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a" },
  {
    id: "Japón-1",
    name: "Tokio, Japón",
    price: "$45,000 MXN",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
  },
  {
    id: "Italia-1",
    name: "Roma, Italia",
    price: "$29,000 MXN",
    img: "https://images.unsplash.com/photo-1529260830199-42c24126f198"
  },
  {
    id: "Japón-1",
    name: "Tokio, Japón",
    price: "$45,000 MXN",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
  },
  {
    id: "México-2",
    name: "Cancún, México",
    price: "$18,000 MXN",
    img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a"
  },
  { id: "España-1", name: "Barcelona, España", price: "$33,000 MXN", img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325" },
  {
    id: "Japón-1",
    name: "Tokio, Japón",
    price: "$45,000 MXN",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
  },
  { id: "Francia-1", name: "París, Francia", price: "$37,800 MXN", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const itemsPerPage = 3;

  const next = () => {
    if (index + itemsPerPage < hotels.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prev = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  const visibleHotels = hotels.slice(index, index + itemsPerPage);

  return (
    <section className="bg-[#eaf3f1] py-10 px-6 relative">

      {/* IZQUIERDA */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full"
      >
        ◀
      </button>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {visibleHotels.map((hotel) => (
          <Link
            key={hotel.id}
            href={`/checkout/${encodeURIComponent(hotel.id)}`} // 🔥 IMPORTANTE
            className="block"
          >
            <div className="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">

              <div className="relative">
                <img
                  src={hotel.img}
                  className="rounded-2xl h-[220px] w-full object-cover"
                />

                <span className="absolute bottom-3 right-3 bg-white p-2 rounded-full">
                  ❤️
                </span>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{hotel.name}</h3>
                  <span className="text-yellow-400">★★★★★</span>
                </div>

                <p className="text-gray-500 text-sm mt-1">
                  Experiencia única en destino premium.
                </p>

                <div className="flex justify-between mt-4 items-center">
                  <span className="text-gray-400 text-sm">
                    7 Días / 6 Noches
                  </span>

                  <span className="text-teal-700 font-bold text-lg">
                    {hotel.price}
                  </span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* DERECHA */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full"
      >
        ▶
      </button>

    </section>
  );
}