import NavLink from "./NavLink";
import data from "@/libs/data.json";
import { NavLinkProps } from "@/types";

const { navigation } = data;

const NavBar = () => {
  return (
    <>
      <ul className="flex gap-4 flex-wrap">
        {navigation.map((item: NavLinkProps) => (
          <NavLink key={item.href} href={item.href}>
            {item.title}
          </NavLink>
        ))}
      </ul>
    </>
  );
};
export default NavBar;
