"use client";
import FormTask from "@/components/FormTask";

interface Paramas {
  params: {
    id: string;
  };
}
const EditTask = ({ params }: Paramas) => {
  return <FormTask btnText="✏️ Editar" title="Editar Tarea" id={params.id} />;
};
export default EditTask;
