import { NextResponse } from "next/server";
import { users } from "@/src/lib/fake-db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { message: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      token: "fake-jwt-token",
      user,
    });

  } catch {
    return NextResponse.json(
      { message: "Error en servidor" },
      { status: 500 }
    );
  }
}