interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonPrimary = (props: Props) => {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default ButtonPrimary;
