"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

import LoginModal from "@/src/components/Auth/LoginModal";
import RegisterModal from "@/src/components/Auth/RegisterModal";

export default function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  // 🔥 sesión real (NextAuth)
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <>
      <header className="w-full bg-gray-100 px-8 py-4 flex items-center justify-between shadow-sm">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏨</span>
          <h1 className="text-xl font-bold text-teal-700">
            Hoteles y Reservas
          </h1>
        </div>

        {/* MENÚ */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-teal-600">INICIO</Link>
          <Link href="/resultados?pais=México" className="hover:text-teal-600">DESTINOS</Link>
          <Link href="/paquetes" className="hover:text-teal-600">PAQUETES</Link>
          <Link href="/contacto" className="hover:text-teal-600">CONTACTO</Link>
        </nav>

        {/* DERECHA */}
        <div className="hidden md:flex items-center gap-4">

          {status === "loading" ? (
            <span className="text-gray-500 text-sm">Cargando...</span>

          ) : !user ? (
            <>
              {/* REGISTRO */}
              <button
                onClick={() => setOpenRegister(true)}
                className="border border-teal-600 text-teal-600 px-4 py-2 rounded-md hover:bg-teal-600 hover:text-white transition"
              >
                Regístrate
              </button>

              {/* LOGIN */}
              <button
                onClick={() => setOpenLogin(true)}
                className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition"
              >
                Iniciar sesión
              </button>
            </>
          ) : (
            <>
              {/* USUARIO */}
              <div className="flex items-center gap-2">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt="user"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                    {user.name?.[0]}
                  </div>
                )}

                <span className="font-medium text-gray-700">
                  {user.name}
                </span>
              </div>

              {/* LOGOUT */}
              <button
                onClick={() => signOut()}
                className="border border-red-400 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition"
              >
                Cerrar sesión
              </button>
            </>
          )}

          {/* TELÉFONO */}
          <button className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition">
            📞 +52 800 351 0834
          </button>

        </div>
      </header>

      {/* MODALES */}
      <LoginModal
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
      />

      <RegisterModal
        isOpen={openRegister}
        onClose={() => setOpenRegister(false)}
      />
    </>
  );
}