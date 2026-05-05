"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [pais, setPais] = useState("México");
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");

  const isInvalid =
    !pais ||
    !fechaEntrada ||
    !fechaSalida ||
    fechaSalida < fechaEntrada;

  const handleSearch = () => {
    if (isInvalid) {
      alert("Selecciona un país y un rango de fechas válido");
      return;
    }

    const params = new URLSearchParams({
      pais,
      checkin: fechaEntrada,
      checkout: fechaSalida,
    });

    router.push(`/resultados?${params.toString()}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="bg-white/90 backdrop-blur-lg shadow-xl rounded-full p-4 flex items-center gap-4 w-[90%] md:w-[70%]"
    >
      {/* PAÍS */}
      <div className="flex items-center gap-2 flex-1 bg-gray-100 p-3 rounded-full">
        🌍
        <select
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-800 cursor-pointer"
        >
          <option value="México">México</option>
          <option value="Japón">Japón</option>
          <option value="Francia">Francia</option>
          <option value="España">España</option>
          <option value="Italia">Italia</option>
          <option value="Estados Unidos">Estados Unidos</option>
          <option value="Perú">Perú</option>
        </select>
      </div>

      {/* CHECK-IN */}
      <div className="flex items-center gap-2 flex-1 bg-gray-100 p-3 rounded-full">
        📅
        <input
          type="date"
          value={fechaEntrada}
          min={new Date().toISOString().split("T")[0]} // 🔥 evita fechas pasadas
          onChange={(e) => setFechaEntrada(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-800"
        />
      </div>

      {/* CHECK-OUT */}
      <div className="flex items-center gap-2 flex-1 bg-gray-100 p-3 rounded-full">
        🗓
        <input
          type="date"
          value={fechaSalida}
          min={fechaEntrada || undefined} // 🔥 evita salida menor
          onChange={(e) => setFechaSalida(e.target.value)}
          className="bg-transparent outline-none w-full text-gray-800"
        />
      </div>

      {/* BOTÓN */}
      <button
        type="submit"
        disabled={isInvalid}
        className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        🔍
      </button>
    </form>
  );
}