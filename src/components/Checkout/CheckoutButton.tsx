"use client";

export default function CheckoutButton({ hotel }: any) {

  if (!hotel) {
    return (
      <button
        disabled
        className="w-full mt-6 bg-gray-400 text-white py-3 rounded-lg"
      >
        Error: sin hotel
      </button>
    );
  }

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: hotel.id,
        }),
      });

      const data = await res.json();

      if (!data.url) throw new Error("No se recibió URL de Stripe");

      window.location.href = data.url;

    } catch (error) {
      console.error(error);
      alert("Error al iniciar pago");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full mt-6 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
    >
      Reservar ahora 💳
    </button>
  );
}