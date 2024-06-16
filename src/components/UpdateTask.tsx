import { TaskContainer } from "./TaskContainer";

interface Props {
  id: string;
}

export const UpdateTask = (props: Props) => {
  return (
    <>
      <TaskContainer
        id={props.id}
        title="Editar Tarea"
        btnTextCOE="✏️ Editar Tarea"
        btnText="💾 Guardar"
      />
    </>
  );
};
