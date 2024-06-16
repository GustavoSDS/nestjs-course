import { CreateTask } from "@/components/CreateTask";

export const metadata = {
  title: "Todo App",
  description: "Aplicación de tareas",
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:p-8 sm:p-4 p-2 w-full md:w-11/12 max-w-7xl mx-auto rounded-lg bg-gray-200 dark:bg-gray-900 flex flex-col items-center justify-center md:my-10">
      <section className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Aplicación de Tareas
        </h1>

        <CreateTask />
      </section>

      <hr className="my-8 w-full border-gray-200 dark:border-gray-700" />
      <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white">
        Listado de Tareas
      </h2>

      <section className="w-full md:max-w-3xl flex flex-col mx-auto mt-5 gap-y-5 rounded-lg pb-5">
        {children}
      </section>
    </div>
  );
};
export default layout;
