import { getUserByEmail } from "@/lib/prisma/user";
import { NextResponse } from "next/server";

export async function GET({ params }: any) {
  const email = params.email;
  const user = await getUserByEmail(email);
  return NextResponse.json({ user });
}
