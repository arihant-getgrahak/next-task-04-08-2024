import { SpecificPost } from "@/components";
export default function Specificpost({ params }: { params: { post: string } }) {
  return <SpecificPost post={params.post} />;
}
