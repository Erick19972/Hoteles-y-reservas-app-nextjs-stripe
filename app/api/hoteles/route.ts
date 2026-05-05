import { NextResponse } from "next/server";
import { hoteles } from "@/src/data/hoteles";

// 🔥 Función para normalizar (quita acentos y hace lowercase)
function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const pais = searchParams.get("pais");
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");

  let filtrados = hoteles;

  // 🔥 FILTRO POR PAÍS (CORREGIDO)
  if (pais) {
    filtrados = filtrados.filter(
      (hotel) => normalizar(hotel.pais) === normalizar(pais)
    );
  }

  // 🔥 (Opcional) validar fechas si quieres después
  if (checkin && checkout) {
    // aquí podrías validar disponibilidad real en el futuro
    console.log("Checkin:", checkin, "Checkout:", checkout);
  }

  return NextResponse.json(filtrados);
}