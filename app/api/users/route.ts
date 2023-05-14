import { getUsers, register } from "@/lib/prisma/user";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await getUsers();
  return NextResponse.json({ users });
}

export async function POST(req: Request) {
  const data = await req.json();
  const user = await register(data);
  return NextResponse.json({ user });
}
