import { NextResponse } from "next/server";
import { hoteles } from "@/src/data/hoteles";

// 🔥 Normalizar texto (quita acentos + lowercase)
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

  // 🔥 FILTRO ROBUSTO (PRO)
  if (pais) {
    const paisNormalizado = normalizar(pais);

    filtrados = filtrados.filter((hotel) =>
      normalizar(hotel.pais).includes(paisNormalizado)
    );
  }

  // 🔥 (opcional futuro)
  if (checkin && checkout) {
    console.log("Checkin:", checkin, "Checkout:", checkout);
  }

  return NextResponse.json(filtrados);
}