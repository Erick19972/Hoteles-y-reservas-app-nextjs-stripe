import Navbar from "@/src/components/Navbar/Navbar";
import { hoteles } from "@/src/data/hoteles";
import CheckoutButton from "@/src/components/Checkout/CheckoutButton";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Checkout({ params }: Props) {

  const { id } = await params;

  // 🔥 FIX CLAVE
  const decodedId = decodeURIComponent(id);

  const hotel = hoteles.find((h) => h.id === decodedId);

  if (!hotel) {
    return (
      <>
        <Navbar />
        <div className="p-10 text-center">
          <h1 className="text-2xl font-bold">Hotel no encontrado</h1>
          <p className="text-gray-500 mt-2">
            ID recibido: {decodedId}
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-[#f5f7f6] min-h-screen p-6 md:p-10">

        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Finalizar reserva 🧾
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {/* INFO HOTEL */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">

            <img
              src={hotel.imagen}
              alt={hotel.nombre}
              className="w-full h-[300px] object-cover rounded-xl mb-6"
            />

            <h2 className="text-2xl font-bold text-gray-800">
              {hotel.titulo}
            </h2>

            <p className="text-gray-500 mt-2">
              {hotel.descripcion}
            </p>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-yellow-500">
                {"⭐".repeat(hotel.rating)}
              </span>

              <span className="text-sm text-gray-500">
                {hotel.duracion}
              </span>
            </div>

          </div>

          {/* RESUMEN */}
          <div className="bg-white rounded-2xl shadow p-6 h-fit sticky top-10">

            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Tu reserva
            </h3>

            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Precio</span>
              <span className="font-semibold">
                ${hotel.precio.toLocaleString("es-MX")}
              </span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Impuestos</span>
              <span className="font-semibold">
                ${(hotel.precio * 0.16).toLocaleString("es-MX")}
              </span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-green-600">
                ${(hotel.precio * 1.16).toLocaleString("es-MX")} MXN
              </span>
            </div>

            <CheckoutButton hotel={hotel} />

          </div>

        </div>

      </section>
    </>
  );
}