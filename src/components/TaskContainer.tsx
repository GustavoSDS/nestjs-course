"use client";
import { useEffect, useState } from "react";
import ModalTask from "./ModalTaks";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  id?: string;
  title: string;
  btnTextCOE: string;
  btnText: string;
}
const WEB_URL: string = "https://https://nestjs-course-beta.vercel.app/";

export const TaskContainer = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [errors, setErros] = useState({});
  const { register, setValue, handleSubmit } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (props.id) {
      axios.get(`${WEB_URL}/api/tasks/${props.id}`).then(({ data }) => {
        const { task } = data;
        const { title, description, completed } = task;
        setValue("title", title);
        setValue("description", description);
        setValue("completed", completed ? "true" : "false");
        router.refresh();
      });
    }
    setValue("title", "");
    setValue("description", "");
  }, [props.id, router, setValue]);

  const show = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
    setErros({});
  };

  const onSubmit = handleSubmit(async (data) => {
    if (data.title !== "" && data.description !== "") {
      if (props.id) {
        await axios.put(`${WEB_URL}/api/tasks/${props.id}`, {
          ...data,
          completed: data.completed === "true" ? true : false,
        });
      } else {
        await axios.post(`${WEB_URL}/api/tasks/`, {
          ...data,
          completed: data.completed === "true" ? true : false,
        });
        setValue("title", "");
        setValue("description", "");
      }
      close();
      router.refresh();
    } else {
      let title, description;
      if (data.title === "") title = "Este campo es obligatorio";
      if (data.description === "") description = "Este campo es obligatorio";
      setErros({
        title,
        description,
      });
    }
  });

  return (
    <>
      <button
        onClick={show}
        className="bg-purple-600 hover:bg-purple-700 h-fit focus:ring-purple-600 focus:ring-offset-purple-200 text-white font-bold focus:outline-none focus:ring-2 rounded flex items-center justify-center text-center px-8 py-3"
      >
        {props.btnTextCOE}
      </button>
      {visible && (
        <ModalTask
          onClose={close}
          onSubmit={onSubmit}
          visible={visible}
          register={register}
          title={props.title}
          btnText={props.btnText}
          errors={errors}
        />
      )}
    </>
  );
};
