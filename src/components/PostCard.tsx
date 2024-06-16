"use client";
import { Post } from "@/types";
import Link from "next/link";

/* React client component */
const PostCard = (post: Post) => {
  return (
    <div
      key={post.id}
      className="p-4 border m-2 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
        {post.id}.{" "}
        <Link
          href={`/posts/${post.id}`}
          className="hover:text-blue-500 hover:underline"
        >
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </Link>
      </h3>
      <p className="text-gray-400">{post.body}</p>

      <Link
        href={`/posts/${post.id}`}
        className="text-blue-500 hover:underline font-bold hover:text-blue-700"
      >
        Read more
      </Link>
    </div>
  );
};
export default PostCard;
