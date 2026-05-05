import Navbar from "@/src/components/Navbar/Navbar";

export default function Success() {
  return (
    <>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Pago exitoso 🎉
        </h1>
        <p className="mt-4 text-gray-500">
          Tu reserva ha sido confirmada
        </p>
      </div>
    </>
  );
}