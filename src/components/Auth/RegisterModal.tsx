"use client";

import { useState } from "react";

export default function RegisterModal({ isOpen, onClose }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleRegister = async () => {
    setError("");

    if (!name || !email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Usuario creado 🚀");

      setName("");
      setEmail("");
      setPassword("");

      onClose();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center">

      {/* CARD */}
      <div className="bg-white rounded-2xl p-6 w-[400px] shadow-2xl relative animate-fadeIn">

        {/* ❌ CERRAR */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        >
          ✖
        </button>

        {/* TITLE */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Crear cuenta
        </h2>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        {/* INPUTS */}
        <input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg text-black outline-none focus:border-teal-500"
        />

        <input
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg text-black outline-none focus:border-teal-500"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg text-black outline-none focus:border-teal-500"
        />

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition disabled:opacity-50"
        >
          {loading ? "Creando..." : "Registrarse"}
        </button>

      </div>
    </div>
  );
}