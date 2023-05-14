import {
  addVehicleResult,
  deleteVehicleResult,
  getResultByVehicleId,
  updateVehicleResult,
} from "@/lib/prisma/result";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const result = await getResultByVehicleId(parseInt(params.id));
  return NextResponse.json({ result });
}
export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const reqData = await req.json();
  const data = { ...reqData, vehicleId: parseInt(params.id) };
  const result = await addVehicleResult(data);
  return NextResponse.json({ result });
}
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const reqData = await req.json();
  const data = { ...reqData, vehicleId: parseInt(params.id) };
  const result = await updateVehicleResult(data);
  return NextResponse.json({ result });
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const result = await deleteVehicleResult(parseInt(params.id));
  return NextResponse.json({ result });
}
