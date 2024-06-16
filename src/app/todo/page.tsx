import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";
import { ITasks } from "@/types";
import { Suspense, useEffect, useRef } from "react";

async function loadTasks(): Promise<ITasks> {
  const response = prisma.tasks.findMany();
  return response;
}

const Todo = async () => {
  const tasks: ITasks = await loadTasks();

  const existTasks = tasks.length < 0 && "No hay tareas registradas";
  console.log(existTasks);

  return (
    <>
      {existTasks && (
        <p className="text-center text-gray-800 dark:text-white">
          {existTasks}
        </p>
      )}
      {tasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
    </>
  );
};
export default Todo;
