import { NextResponse } from "next/server";
import { users } from "@/src/lib/fake-db";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // 🔥 verificar si ya existe
    const exists = users.find((u) => u.email === email);

    if (exists) {
      return NextResponse.json(
        { message: "El usuario ya existe" },
        { status: 400 }
      );
    }

    const newUser = {
      id: users.length + 1,
      email,
      password,
      name,
    };

    users.push(newUser);

    return NextResponse.json({
      success: true,
      user: newUser,
    });

  } catch {
    return NextResponse.json(
      { message: "Error en servidor" },
      { status: 500 }
    );
  }
}