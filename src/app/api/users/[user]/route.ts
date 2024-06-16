import { UserGet } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { user: string } }
) {
  console.log(params.user);
  const { searchParams } = new URL(request.url);

  console.log(searchParams.get("name"));
  console.log(searchParams.get("lastname"));

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.user}`
  );
  const user: UserGet = await res.json();

  return NextResponse.json({ user });
}
