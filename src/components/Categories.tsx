interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}
const ComponentCategories = (props: Props) => {
  return (
    <div className="p-4 mt-5 rounded-lg bg-gray-900">
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-gray-500 my-4">{props.description}</p>
      {props.children}
    </div>
  );
};
export default ComponentCategories;
