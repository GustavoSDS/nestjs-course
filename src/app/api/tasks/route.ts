import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tasks = await prisma.tasks.findMany();

  return NextResponse.json({
    tasks: tasks,
    status: 200,
  });
}

export async function POST(request: Request) {
  const data = await request.json();

  if (!data) {
    return NextResponse.json({
      status: 400,
      message:
        "Dato no validos para crear una tarea. Revisa los campos y vuelve a intentarlo",
    });
  }

  const task = await prisma.tasks.create({
    data: data,
  });

  if (task) {
    return NextResponse.json({
      task: task,
      status: 200,
    });
  }
  return NextResponse.json({
    status: 500,
    data: task,
    message: "Error creating task",
  });
}
