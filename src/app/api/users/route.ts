import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const USER_TOKEN = process.env.USER_TOKEN;
  console.log(USER_TOKEN);

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (body.name && body.email) {
    const { name, email } = body;
    console.log(name, email);
  }
  console.log(body);
  return NextResponse.json({ message: "Creando un nuevo usuario" });
}

export function PUT() {
  return NextResponse.json({ message: "Actualizando un usuario" });
}

export function PATCH() {
  return NextResponse.json({
    message: "Actualizando la contraseña de un usuario",
  });
}

export function DELETE() {
  return NextResponse.json({ message: "Eliminando un usuario" });
}
