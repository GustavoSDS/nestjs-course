interface Props {}
const loading = (_props: Props) => {
  return (
    <div className="w-full h-full border rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 text-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 flex flex-col items-center justify-center lg:min-w-96 min-h-40 gap-x-2 md:gap-x-4 transition duration-300 ease-in-out relative hover:ring-2 py-2 px-1 sm:py-2 sm:px-4 md:py-3 md:px-6">
      Cargando el listado de tareas...
    </div>
  );
};
export default loading;
