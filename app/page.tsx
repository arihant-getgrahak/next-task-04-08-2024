import { Post } from "@/components/posts";
import { Seo } from "@/components";

export default function Home() {
  return (
    <main className="h-screen">
      <Seo pageTitle="post page" desc="here all the post is available of every user" />
      <Post />
    </main>
  );
}
