"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Error del servidor (respuesta no válida)");
      }

      if (!res.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }

      localStorage.setItem("token", data.token);

      console.log("Usuario:", data.user);

      setEmail("");
      setPassword("");

      onClose();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setError("");
    signIn("google");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 w-[400px] shadow-xl relative">

        {/* ❌ CERRAR */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          ✖
        </button>

        {/* 🔥 TÍTULO */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Iniciar sesión
        </h2>

        {/* ⚠️ ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        {/* 📧 EMAIL */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg outline-none focus:border-teal-500 text-black placeholder-gray-400"
        />

        {/* 🔒 PASSWORD */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg outline-none focus:border-teal-500 text-black placeholder-gray-400"
        />

        {/* 🔥 LOGIN */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition disabled:opacity-50"
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>

        {/* ➖ DIVIDER */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-gray-400 text-sm">o</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* 🔥 GOOGLE LOGIN REAL */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">
            Continuar con Google
          </span>
        </button>

        {/* 🧾 REGISTRO */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          ¿No tienes cuenta?{" "}
          <span className="text-teal-600 cursor-pointer hover:underline">
            Regístrate
          </span>
        </p>

      </div>
    </div>
  );
}