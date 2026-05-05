import { NextResponse } from "next/server";
import Stripe from "stripe";
import { hoteles } from "@/src/data/hoteles";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    // 🔥 buscar hotel
    const hotel = hoteles.find((h) => h.id === id);

    if (!hotel) {
      return NextResponse.json(
        { error: "Hotel no encontrado" },
        { status: 404 }
      );
    }

    // 🔥 SOLUCIÓN CLAVE → codificar ID
    const encodedId = encodeURIComponent(hotel.id);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "mxn",
            product_data: {
              name: hotel.titulo,
              description: hotel.descripcion,
              images: [hotel.imagen], // asegúrate que sea https
            },
            unit_amount: Math.round(hotel.precio * 100),
          },
          quantity: 1,
        },
      ],

      // 🔥 URLs CORREGIDAS
      success_url: `${process.env.NEXTAUTH_URL}/success?hotel=${encodedId}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout/${encodedId}`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error("Stripe error:", error);

    return NextResponse.json(
      { error: "Error creando sesión" },
      { status: 500 }
    );
  }
}