"use client";
import { Post } from "@/domain/Post";
import { UserProfile } from "@/domain/User";
import { client } from "@/lib/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PostItem } from "./PostItem";

export default function PostList({ user }: { user: UserProfile }) {
  const queryClient = useQueryClient();

  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["posts", user.handle],
    queryFn: async () => {
      const res = await client.post.all.$get();
      const data = await res.json();
      return data as Post[];
    },
  });

  if (isLoading) {
    return <p className="text-center py-4">Loading...</p>;
  }

  if (!posts || posts.length === 0) {
    return (
      <p className="text-center py-4">No posts yet. Be the first to post!</p>
    );
  }

  return (
    <div className="divide-y divide-gray-100">
      {posts.map((post: Post) => (
        <PostItem key={post.id} post={post} currentUserHandle={user.handle} />
      ))}
    </div>
  );
}
