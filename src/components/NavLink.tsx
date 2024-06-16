import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}
const NavLink = (props: Props) => {
  return (
    <li className=" text-blue-500 font-bold hover:text-blue-700 dark:text-blue-400">
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
};
export default NavLink;
