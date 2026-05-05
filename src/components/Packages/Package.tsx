"use client";

import Link from "next/link";
import { hoteles } from "@/src/data/hoteles";

export default function Packages() {

  // 🔥 paquetes premium
  const paquetes = hoteles
    .filter((hotel) => hotel.rating >= 5)
    .slice(0, 9);

  return (
    <section className="bg-[#f5f7f6] min-h-screen px-6 py-10">

      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Paquetes Premium ✨
      </h1>

      <p className="text-gray-500 mb-10">
        Selección de experiencias exclusivas en destinos increíbles.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {paquetes.map((hotel) => (

          // 🔥 LINK AL CHECKOUT
          <Link
            key={hotel.id}
            href={`/checkout/${hotel.id}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition block cursor-pointer"
          >

            <div className="relative">
              <img
                src={hotel.imagen}
                alt={hotel.nombre}
                className="w-full h-[220px] object-cover"
              />

              <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                {hotel.categoria}
              </span>

              <button
                onClick={(e) => {
                  e.preventDefault(); // 🔥 evita redirección
                  alert("Agregado a favoritos ❤️");
                }}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:scale-110 transition"
              >
                ❤️
              </button>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">
                {hotel.titulo}
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                {hotel.descripcion}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-yellow-500">
                  {"⭐".repeat(hotel.rating)}
                </span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">
                  {hotel.duracion}
                </span>

                <span className="text-green-600 font-bold text-lg">
                  ${hotel.precio.toLocaleString("es-MX")} MXN
                </span>
              </div>
            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}