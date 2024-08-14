"use client";

import useFetch from "@/hooks/usePostFetch";
import { Loading } from "./loading";
import { AuthorDetail } from "./author";
import { PostType } from "@/types/postType";
import { CommentDetail } from "./comments";

export const SpecificPost = (params: { post: string }) => {
  const [data, loading, error]: [
    PostType | null | PostType[],
    boolean,
    string | null
  ] = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`);
  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Something went wrong</p>;

  if (Array.isArray(data)) return;

  return (
    <main>
      {data && (
        <div className="p-4 mt-2">
          <h2 className="text-center text-2xl font-bold mt-2 mb-2">
            {data.title}
          </h2>
          <p className="text-center lg:p-5 ">{data.body}</p>
          <CommentDetail id={data.id} />
          <AuthorDetail id={data.userId} />
        </div>
      )}
    </main>
  );
};
