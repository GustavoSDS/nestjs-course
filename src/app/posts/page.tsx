import PostCard from "@/components/PostCard";
import { loadPosts } from "@/libs/data";
import { Post } from "@/types";

// React server component
async function Posts() {
  const posts = await loadPosts(10);
  return (
    <div className="flex flex-col gap-0 md:grid md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post: Post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
        />
      ))}

      {/* Pagination component here */}
      {/* <Pagination /> */}
    </div>
  );
}

export default Posts;
