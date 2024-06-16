import { getTask, prisma } from "@/libs/prisma";
import { Params } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, { params }: Params) {
  const task = await getTask(params.id);

  if (task) {
    if (task?.title) {
      return NextResponse.json({
        task,
        status: 200,
        message: "Task found",
      });
    }

    return NextResponse.json({
      message: "Not found",
      status: 404,
      task: task,
    });
  }
  return NextResponse.json({
    message: "Not found",
    status: 404,
    task: task,
  });
}

export async function PUT(request: NextRequest, { params }: Params) {
  const body = await request.json();
  const isTask = await getTask(params.id);

  if (isTask) {
    const task = await prisma.tasks.update({
      where: {
        id: Number(params.id),
      },
      data: body,
    });

    if (task) {
      return NextResponse.json({
        task,
        status: 200,
        message: "Task updated",
      });
    }
  }

  return NextResponse.json({
    message: "Not found",
    status: 404,
    task: isTask,
  });
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const isTask = await getTask(params.id);

  if (isTask) {
    const task = await prisma.tasks.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (task) {
      return NextResponse.json({
        tasks: task,
        status: 200,
        message: "Task deleted",
      });
    }
  }

  return NextResponse.json({
    message: "Not found",
    status: 404,
    task: isTask,
  });
}
