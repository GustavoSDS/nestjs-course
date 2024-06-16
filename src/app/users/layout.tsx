import { Metadata } from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Usuarios",
};

const layout = (props: Props) => {
  return <>{props.children}</>;
};
export default layout;
