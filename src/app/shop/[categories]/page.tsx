"use client";
import { useParams } from "next/navigation";
import ComponentCategories from "@/components/Categories";

const Categories = () => {
  const params = useParams();

  if (params.categories === "shoes") {
    return (
      <ComponentCategories
        title={"Zapatos"}
        description={"Esta es la pagina de zapatos"}
      >
        {" "}
      </ComponentCategories>
    );
  }

  if (params.categories === "clothing") {
    return (
      <ComponentCategories
        title={"Ropa"}
        description={"Esta es la pagina de ropa"}
      >
        {" "}
      </ComponentCategories>
    );
  }

  if (params.categories === "accessories") {
    return (
      <ComponentCategories
        title={"Accesorios"}
        description={"Esta es la pagina de accesorios"}
      >
        {" "}
      </ComponentCategories>
    );
  }
  if (!params) return null;
  return <p>Pagina no encontrada</p>;
};
export default Categories;
