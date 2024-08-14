"use client";

import useCommentFetch from "@/hooks/useCommentFetch";
import { Loading } from "./loading";

export const CommentDetail = () => {
  const [data, error, isLoading] = useCommentFetch(
    `https://jsonplaceholder.typicode.com/comments`
  );

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500">Something went wrong</p>;

  return (
    <main className="mt-12">
      <h1 className="text-3xl font-bold text-center">Comments</h1>
      {data &&
        data.slice(1, 4).map((data) => (
          <div
            className="mt-4 mb-4 flex flex-col gap-2 border-b-2 border-black"
            key={data.id}
          >
            <p>
              <span className="font-bold"> Name:</span> {data?.name}
            </p>
            <p>
              <span className="font-bold"> Email:</span> {data?.email}
            </p>
            <p>
              <span className="font-bold mb-4">Comment:</span> {data?.body}
            </p>
          </div>
        ))}
    </main>
  );
};
