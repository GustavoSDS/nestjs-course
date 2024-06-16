import { Roboto } from "next/font/google";
import NavLink from "@/components/NavLink";
import { Metadata } from "next";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Tienda",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={roboto.className + "px-1 md:p-4"}>
      <nav className="px-1 py-2 md:p-4 border-b-2">
        <h1 className="text-2xl font-bold">Categories</h1>
        <ul className="flex flex-col justify-center items-start gap-3 my-2">
          <NavLink href={"/shop/all"}>Todos 📃</NavLink>
          <NavLink href={"/shop/shoes"}>Zapatos 👟👠🥿</NavLink>
          <NavLink href={"/shop/clothing"}>Ropas 👚👕👖 </NavLink>
          <NavLink href={"/shop/accessories"}>Accesorios 👜💄👓</NavLink>
        </ul>
      </nav>
      {children}
    </div>
  );
}
export default layout;
