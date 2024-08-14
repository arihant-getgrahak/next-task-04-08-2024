"use client";
import useFetch from "@/hooks/usePostFetch";
import Link from "next/link";
import { CommentDetail } from "./comments";

export const Post = () => {
  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <main className="flex flex-col p-5 flex-grow">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data &&
        (Array.isArray(data) ? (
          data.slice(1, 6).map((data) => (
            <div
              key={data.id}
              className="border-2 border-black p-5 mb-5 relative lg:h-44 h-72"
            >
              <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
              <p className="text-base lg:text-lg mt-3 mb-2">{data.body}</p>
              <button className="border-2 p-2 rounded-xl absolute bottom-2 right-2 bg-blue-500 text-white">
                <Link href={`/post/${data.id}`}>Read More</Link>
              </button>
            </div>
          ))
        ) : (
          <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
        ))}
    </main>
  );
};
