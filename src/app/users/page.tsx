import UsersComponent from "@/components/Users";

// const API_URL_USERS_JSONPLACEHOLDER = process.env.API_URL_USERS_JSONPLACEHOLDER;
const API_URL_USERS_REQRES = process.env.API_URL_USERS_REQRES;

async function fetchUsers() {
  const response = await fetch(`${API_URL_USERS_REQRES}`);
  const data = await response.json();
  return data;
}

const page = async () => {
  const users = await fetchUsers();

  return (
    <section className="w-full max-w-3xl flex flex-col items-center justify-center mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Listado de usuarios</h2>
      <UsersComponent {...users} />
    </section>
  );
};
export default page;
