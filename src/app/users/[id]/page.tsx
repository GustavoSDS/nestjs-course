import { User } from "@/types";
import Image from "next/image";

const API_URL_USERS_REQRES = process.env.API_URL_USERS_REQRES;
async function fetchUser(id: string) {
  const response = await fetch(`${API_URL_USERS_REQRES}${id}`);
  const { data } = await response.json();
  return data;
}

const page = async ({
  params,
}: {
  params: { id: string };
}): Promise<JSX.Element> => {
  const user: User = await fetchUser(params.id);
  return (
    <div
      className="text-center text-3xl font-bold p-8 dark:text-white dark:bg-gray-800 text-gray-800 bg-white flex items-center justify-evenly w-3/4 mx-auto h-2/4 rounded-lg mt-20 gap-x-5
    "
    >
      <Image
        src={user.avatar}
        alt={user.first_name}
        width={300}
        height={300}
        className="rounded-full mb-4"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {user.id}. {user.first_name} {user.last_name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-10">{user.email}</p>
      </div>
    </div>
  );
};
export default page;
