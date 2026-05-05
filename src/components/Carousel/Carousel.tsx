"use client";
import { useState } from "react";

const hotels = [
  { id: 1, name: "Tulum, México", price: "$25,000 MXN", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { id: 2, name: "París, Francia", price: "$37,800 MXN", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a" },
  { id: 3, name: "Maldivas", price: "$64,000 MXN", img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21" },
  { id: 4, name: "Roma, Italia", price: "$29,000 MXN", img: "https://images.unsplash.com/photo-1526481280691-906c9e9f3c2b" },
  { id: 5, name: "Tokio, Japón", price: "$45,000 MXN", img: "https://images.unsplash.com/photo-1505060897915-19c3d4d6d95f" },
  { id: 6, name: "Cancún, México", price: "$18,000 MXN", img: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60f" },
  { id: 7, name: "Barcelona, España", price: "$33,000 MXN", img: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc" },
  { id: 8, name: "Dubai", price: "$55,000 MXN", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { id: 9, name: "Nueva York", price: "$40,000 MXN", img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59" },
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

      {/* BOTÓN IZQUIERDA */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full"
      >
        ◀
      </button>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {visibleHotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition">

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
        ))}
      </div>

      {/* BOTÓN DERECHA */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full"
      >
        ▶
      </button>

    </section>
  );
}