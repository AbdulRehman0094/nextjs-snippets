import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

// export async function GET() {
//   return Response.json(comments);
// }

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredComments = query
    ? comments.filter((comment) => comment.data.toLowerCase().includes(query.toLowerCase()))
    : comments;

  return NextResponse.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    data: comment.data,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
