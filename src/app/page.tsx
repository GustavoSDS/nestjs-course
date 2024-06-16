import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-full max-w-3xl mb-10">
        <h1 className="text-3xl font-bold mb-5">
          Curso de con{" "}
          <span className="text-blue-500">
            {" "}
            NextJS, Prisma ORM y Tailwind CSS
          </span>
        </h1>
        <p className="text-lg">
          Es una pagina sencilla de un curso de NextJS con Tailwind CSS y Prisma
          ORM para el manejo de bases de datos en NextJS. El curso se basa en el
          video de{" "}
          <Link href={"https://youtu.be/8gb7PtmwP2U"} className="text-red-600">
            Fazt Code.
          </Link>
        </p>
        <p className="text-base mt-10">
          En este curso, aprenderás a crear una aplicación Web FullStack
          (Backend y Frontend) usando Nextjs, el Framework de React, en conjunto
          con Prisma, un ORM para poder comunicarlo con una base de datos.
          Además de unirlo a TailwindCSS para estilizar la aplicación y usando
          también Typescript como lenguaje. En este ejemplo crearemos una
          aplicación CRUD (Create, Read, Update, Delete) en donde podrás usar
          características de Nextjs como sus React Server Components, sus Route
          Handlers y en unión a paquetes como react-hook-form o axios.
        </p>
      </section>
    </>
  );
}
