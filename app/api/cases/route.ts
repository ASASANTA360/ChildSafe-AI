import { NextResponse } from "next/server";
import { connectDB } from "@/src/lib/db";
import CaseModel from "@/src/models/Case";

export async function GET() {
  await connectDB();

  const cases = await CaseModel.find().sort({
    createdAt: -1,
  });

  return NextResponse.json(cases);
}

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const newCase = await CaseModel.create(body);

  return NextResponse.json(newCase);
}