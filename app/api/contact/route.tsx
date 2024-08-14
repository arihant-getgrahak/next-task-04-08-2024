import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  try {
    const postFeed = await prisma.post.create({
      data: data,
    });

    if (!postFeed) {
      return NextResponse.json({
        status: 500,
        data: "Unable to post feed",
      });
    }
    return NextResponse.json(postFeed);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
