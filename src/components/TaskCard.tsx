"use client";
import { ITask } from "@/types";
import axios from "axios";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const TaskCard = (props: ITask) => {
  const router = useRouter();

  useEffect(() => {
    if (props.id) {
      router.refresh();
    }
  }, [router, props.id]);

  if (!props.title || !props.description) {
    return null;
  }

  const completed = props.completed ? "Completada" : "Pendiente";
  const createdAt = props.createdAt
    ? props.createdAt.toLocaleDateString()
    : new Date().toLocaleDateString();

  const handleEdit = () => {
    router.push(`/todo/${props.id}`);
  };

  return (
    <div
      className={clsx(
        "w-full h-full border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 text-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:hover:shadow-gray-600 hover:bg-gray-100 hover:border-gray-300 hover:shadow-gray-300 ring-1 ring-gray-200 dark:ring-gray-700 flex lg:min-w-96 gap-x-2 md:gap-x-4 transition duration-300 ease-in-out relative hover:ring-2 py-2 px-1 sm:py-2 sm:px-4 md:py-3 md:px-6",
        {
          "ring-green-200 hover:ring-green-400 dark:hover:ring-green-500 dark:hover:shadow-green-600":
            props.completed === true,
          "ring-amber-500 hover:ring-amber-500 dark:hover:ring-amber-500":
            props.completed === false,
        }
      )}
    >
      <div
        className={clsx(
          "w-full h-full rounded-lg p-2 ml-1 sm:ml-0 text-sm sm:text-base sm:p-6 hover:cursor-pointer hover:ring-2 hover:scale-105 dark:hover:scale-105 dark:hover:ring-2 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:hover:shadow-gray-600 transition duration-300 ease-in-out shadow-md",
          {
            "bg-gray-100 dark:bg-gray-800 shadow-none border-none":
              props.completed === true,
            "bg-red-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-red-50 dark:shadow-gray-900":
              props.completed === false,
          }
        )}
        onClick={handleEdit}
        title="Click para editar ✏️"
      >
        <ul>
          <li className="w-full flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 my-4">
              {props.description}
            </p>
          </li>
        </ul>
      </div>

      <button
        className="rounded-lg grid place-content-center w-8 h-8 absolute top-2 right-2 cursor-pointer transition duration-300 ease-in-out border border-red-300 hover:border-red-400 dark:hover:border-red-500 hover:scale-105"
        onClick={async () => {
          confirm("¿Deseas eliminar esta Tarea?");
          await axios.delete(`/api/tasks/${props.id}`);
          router.push("/todo");
          router.refresh();
        }}
      >
        🗑️
      </button>

      <div className="flex items-center justify-center flex-col gap-y-4 min-h-full p-2">
        <span className="text-xs font-bold rounded-lg px-2"> {createdAt}</span>
        <p
          className={clsx("text-xs font-bold rounded-lg px-2 py-1", {
            "bg-green-100 text-green-500  dark:bg-green-700 dark:text-green-100":
              props.completed === true,
            "text-red-500 bg-red-200 dark:bg-amber-700 dark:text-amber-200":
              props.completed === false,
          })}
        >
          {completed}
        </p>
      </div>
    </div>
  );
};
export default TaskCard;
