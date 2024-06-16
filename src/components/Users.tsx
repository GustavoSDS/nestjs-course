"use client";
import { Users, User } from "@/types";
import Image from "next/image";
import Link from "next/link";

const UsersComponent = (props: Users) => {
  const users = props.data || [];

  if (!users.length) return <p>No users found</p>;
  if (!props.data) return <p>Loading...</p>;
  return (
    <ul className="w-full max-w-3xl grid grid-cols-2 gap-y-2 gap-x-3 md:grid-cols-3 md:gap-4">
      {users.map((user: User) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li
            key={user.id}
            className="mb-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-4 rounded-md w-full flex flex-col items-center justify-center mx-auto cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
            onClick={() => console.log(user)}
          >
            <Image
              src={user.avatar}
              alt={user.first_name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full mb-2"
            />
            {user.first_name} {user.last_name}
            <br />
            <span className="text-xs text-gray-600 dark:text-gray-400 block mt-1 truncate">
              {" "}
              {user.email}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
};
export default UsersComponent;
