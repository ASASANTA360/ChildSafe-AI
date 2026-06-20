import { NextResponse } from "next/server";
import { connectDB } from "@/src/lib/db";
import Risk from "@/src/models/Risk";

export async function GET() {
  await connectDB();

  const risks = await Risk.find().sort({
    createdAt: -1,
  });

  return NextResponse.json(risks);
}

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const risk = await Risk.create(body);

  return NextResponse.json(risk);
}