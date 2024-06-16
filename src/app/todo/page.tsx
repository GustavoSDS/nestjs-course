import TaskCard from "@/components/TaskCard";
import { loadTasks } from "@/libs/data";
import { ITasks } from "@/types";

export const dynamic = "force-dynamic";

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
