import { Post } from "@/types";
import Link from "next/link";
import Posts from "../page";
import { Suspense } from "react";
import { loadPost } from "@/libs/data";

type Props = { params: { post: 1 } };

const PostPage = async ({ params }: Props) => {
  const post: Post = await loadPost(params.post);
  console.log(post);

  if (!post || !post.id) {
    return <div>Post not found</div>;
  }

  return (
    <div className="py-14 px-8 bg-gray-100 dark:bg-gray-800 rounded-lg m-5 shadow-lg flex flex-col items-center justify-center min-h-32">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        {post.id}. {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-10">
        {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
      </p>

      <div className="mt-16">
        <Link href="/posts" className="text-blue-500 hover:text-blue-600">
          Back to posts
        </Link>
      </div>

      <hr className="my-8 w-full border-gray-200 dark:border-gray-700" />
      <div className="flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <h2 className="text-xl font-bold text-left mb-4 text-gray-800 dark:text-white">
            Other posts
          </h2>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
};
export default PostPage;
