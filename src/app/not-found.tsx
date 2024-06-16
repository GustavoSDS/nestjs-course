import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <Image src="/404.svg" alt="404" width={300} height={300} priority />

      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
          Página no encontrada
        </p>
        <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
          Lo siento, la página que estas buscando no existe.
        </p>
        <Link
          href="/"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"></path>
          </svg>
          <span>Regresar al inicio</span>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
