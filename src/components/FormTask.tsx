import { ITask } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Props {
  id?: string;
  title: string;
  btnText: string;
}
const FormTask = (props: Props) => {
  const { register, handleSubmit, setValue } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (props.id) {
      axios
        .get(`http://localhost:3000/api/tasks/${props.id}`)
        .then(({ data }) => {
          const { task } = data;
          const { title, description, completed } = task;
          setValue("title", title);
          setValue("description", description);
          setValue("completed", completed ? "true" : "false");
          router.refresh();
        });
    }
  }, [props.id, setValue, router]);

  const onSubmit = handleSubmit(async (data) => {
    if (props.id) {
      await axios.put(`http://localhost:3000/api/tasks/${props.id}`, {
        ...data,
        completed: data.completed === "true" ? true : false,
      });
    } else {
      await axios.post("http://localhost:3000/api/tasks", {
        ...data,
        completed: data.completed === "true" ? true : false,
      });
    }

    router.refresh();
    router.push("/todo");
  });

  return (
    <div className="p-8 w-4/5 mx-auto h-3/4 rounded-lg mt-20 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-2xl shadow-gray-300 dark:shadow-gray-800 dark:text-white text-gray-800">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        {props.title}
      </h1>
      <form
        className="flex flex-col items-center mt-10 w-full gap-5"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Titulo de la Tarea"
          className="w-full p-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white ring-1 ring-gray-300 dark:ring-gray-700 focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500 focus:outline-none"
          {...register("title")}
        />

        <textarea
          className="w-full p-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white ring-1 ring-gray-300 dar:ring-gray-700 focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500 focus:outline-none resize-none"
          placeholder="Descripción de la Tarea"
          rows={4}
          {...register("description")}
        />

        <select
          className=" w-full p-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white ring-1 ring-gray-300 dar:ring-gray-700 focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500 focus:outline-none"
          {...register("completed")}
        >
          <option value="true">Completada</option>
          <option value="false">Pendiente</option>
        </select>

        <div className="flex gap-4 w-full justify-center mt-8">
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-purple-800 "
            type="submit"
            value="Add Task"
          >
            {props.btnText}
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-red-800">
            <Link href="/todo">Cancelar</Link>
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormTask;
