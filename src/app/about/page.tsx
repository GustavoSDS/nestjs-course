"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <section className="w-full max-w-3xl flex flex-col items-center justify-center mx-auto mt-10 dark:text-white px-6">
      <h1 className="text-3xl font-bold mb-5 dark:text-white text-gray-800">
        Acerca de mi
      </h1>
      <p className="text-lg">
        Soy un desarrollador web con experiencia en React y TypeScript. Me gusta
        aprender nuevas tecnologías y trabajar en equipo. Me encanta trabajar
        con tecnologías como React, Node.js, Express, MongoDB, etc. Me considero
        una persona responsable y comprometida con mi trabajo. Soy una persona
        que busca aprender y aprender constantemente. Me gusta trabajar en
        equipo y me gusta aprender nuevas tecnologías.
      </p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 dark:text-white"
        onClick={() => {
          router.push("/");
          alert("Curriculum en desarrollo");
        }}
      >
        Ver curriculum
      </button>
    </section>
  );
};
export default About;
