import Navbar from "@/src/components/Navbar/Navbar";
import SearchBar from "@/src/components/SearchBar/SearchBar";
import Link from "next/link";
import { hoteles } from "@/src/data/hoteles";
import { headers } from "next/headers";

type Props = {
  searchParams: Promise<{
    pais?: string;
  }>;
};

type Hotel = {
  id: number | string;
  imagen: string;
  nombre: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  rating: number;
  duracion: string;
  precio: number;
  pais: string;
};

function normalizar(texto: string) {
  return texto
    ?.toLowerCase()
    ?.trim()
    ?.normalize("NFD")
    ?.replace(/[\u0300-\u036f]/g, "");
}

export default async function Resultados({ searchParams }: Props) {

  // ✅ CORRECTO EN NEXT 16
  const { pais = "" } = await searchParams;

  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  console.log("🌐 HOST:", host);
  console.log("🚀 URL:", `${protocol}://${host}/resultados?pais=${pais}`);

  const paisNormalizado = normalizar(pais);

  const hotelesFiltrados = hoteles.filter((hotel) => {
    const paisHotel = normalizar(hotel.pais);
    const nombreHotel = normalizar(hotel.nombre);

    return pais
      ? paisHotel.includes(paisNormalizado) ||
          nombreHotel.includes(paisNormalizado)
      : true;
  });

  console.log("✅ RESULTADOS:", hotelesFiltrados.length);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop"
          className="absolute w-full h-full object-cover"
          alt="Playa paradisíaca"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4">
            EXPERIENCIAS PREMIUM
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Descubre lo{" "}
            <span className="text-yellow-400">Inexplorado</span>
          </h1>

          <p className="text-white mt-4 max-w-xl">
            Desde playas vírgenes hasta ciudades vibrantes.
          </p>
        </div>

        <div className="absolute bottom-[-40px] w-full flex justify-center z-20">
          <SearchBar />
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="bg-[#f5f7f6] min-h-screen px-6 pt-20 pb-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Resultados en {pais || "Destino"}
        </h1>

        {hotelesFiltrados.length === 0 && (
          <p className="text-gray-500">
            ❌ No hay resultados disponibles
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {hotelesFiltrados.map((hotel) => (
            <Link
              key={hotel.id}
              href={`/checkout/${hotel.id}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition block"
            >
              <div className="relative">
                <img
                  src={hotel.imagen}
                  alt={hotel.titulo}
                  className="w-full h-[220px] object-cover"
                />

                <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                  {hotel.categoria}
                </span>
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
    </>
  );
}