import { NextResponse } from "next/server";
import { connectDB } from "@/src/lib/db";
import Beneficiary from "@/src/models/Beneficiary";

export async function GET() {
  await connectDB();

  const beneficiaries = await Beneficiary.find().sort({
    createdAt: -1,
  });

  return NextResponse.json(beneficiaries);
}

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const beneficiary = await Beneficiary.create(body);

  return NextResponse.json(beneficiary);
}