import { addVehicle, getVehicles } from "@/lib/prisma/vehicle";

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const _page = searchParams.get("page");
  const _pageSize = searchParams.get("pageSize");
  const page = !_page ? 1 : parseInt(_page);
  const pageSize = !_pageSize ? 1 : parseInt(_pageSize);
  const search = searchParams.get("search") ?? "*";
  const vehicles = await getVehicles(page, pageSize, search);
  return NextResponse.json({ vehicles });
}
export async function POST(req: Request) {
  const data = await req.json();
  const vehicle = await addVehicle(data);
  return NextResponse.json({ vehicle });
}
