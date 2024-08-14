"use client";

import useUserFetch from "@/hooks/useUserFetch";
import { Loading } from "./loading";
import Image from "next/image";

export const AuthorDetail = (props: { id: number }) => {
  const [data, error, isLoading] = useUserFetch(
    `https://jsonplaceholder.typicode.com/users/${props.id}`
  );

  if (isLoading) return <Loading />;

  if (error) return <div>{error}</div>;

  return (
    <main className="mt-12 flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold text-center">Author</h1>
      <Image src="/user.jpg" width={100} height={100} alt={data!.name} />
      <p>
        <span className="font-bold">Author Name:</span> {data?.name}
      </p>
      <p>
        <span className="font-bold">Author Email:</span> {data?.email}
      </p>
      <p>
        <span className="font-bold">Author Website:</span> {data?.website}
      </p>
    </main>
  );
};
