"use client";

import Link from "next/link";
import { FormEvent } from "react";

interface Props {
  title: string;
  btnText: string;
  visible: boolean;
  register: any;
  onSubmit: (data: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  errors?: {
    title?: string;
    description?: string;
  };
}
const ModalTask = (props: Props) => {
  console.log(props.errors);
  return (
    props.visible && (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 py-7 px-4 sm:px-14 w-11/12 sm:w-[500px] rounded-lg mt-20 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg shadow-gray-300 dark:shadow-gray-800 dark:text-white text-gray-800 dark:hover:bg-gray-800 dark:hover:border-gray-600 dark:hover:shadow-gray-600 hover:bg-gray-100 hover:border-gray-300 hover:shadow-gray-300 transition duration-300 ease-in-out">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          {props.title}
        </h1>
        <form
          className="flex flex-col items-center mt-10 w-full gap-y-5"
          onSubmit={props.onSubmit}
        >
          <div className="w-full flex flex-col gap-y-2">
            <input
              type="text"
              placeholder="Titulo de la Tarea"
              className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white ring-1 ring-gray-300 dark:ring-gray-700 focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500 focus:outline-none"
              {...props.register("title", {
                required: true,
                maxLength: 30,
                minLength: 3,
              })}
            />
            {props.errors?.title && (
              <p className="text-red-500 dark:text-red-400 text-sm">
                {props.errors?.title}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col gap-y-2">
            <textarea
              className="w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white ring-1 ring-gray-300 dar:ring-gray-700 focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500 focus:outline-none resize-none"
              placeholder="Descripción de la Tarea"
              rows={4}
              {...props.register("description", {
                required: true,
                maxLength: 100,
                minLength: 10,
              })}
            />
            {props.errors?.description && (
              <p className="text-red-500 dark:text-red-400 text-sm">
                {props.errors?.description}
              </p>
            )}
          </div>

          <select
            className=" w-full p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white ring-1 ring-gray-300 dar:ring-gray-700 focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500 focus:outline-none"
            {...props.register("completed")}
          >
            <option value="true">Completada</option>
            <option value="false">Pendiente</option>
          </select>

          <div className="flex gap-x-4 w-full justify-center mt-8">
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-purple-800 "
              type="submit"
              value="Add Task"
            >
              {props.btnText}
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-red-800">
              <Link href="/todo" onClick={props.onClose}>
                Cancelar
              </Link>
            </button>
          </div>
        </form>
      </div>
    )
  );
};
export default ModalTask;
