import { NextResponse } from "next/server";
import { connectDB } from "@/src/lib/db";
import Beneficiary from "@/src/models/Beneficiary";

export async function GET() {
  await connectDB();

  const verified = await Beneficiary.find({
    identityStatus: "Verified",
  });

  return NextResponse.json(verified);
}