import { ITasks, Post } from "@/types";
import { prisma } from "./prisma";

export async function loadPosts(limit: number): Promise<Post[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  const data = await response.json();

  await new Promise<Post[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
  return data;
}

export const loadPost = async (post: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post}`
  );
  const data = await response.json();
  return data;
};

export async function loadTasks(): Promise<ITasks> {
  const response = prisma.tasks.findMany();
  return response;
}
