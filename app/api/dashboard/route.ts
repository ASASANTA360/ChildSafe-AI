import { NextResponse } from "next/server";
import { connectDB } from "@/src/lib/db";
import Beneficiary from "@/src/models/Beneficiary";
import CaseModel from "@/src/models/Case";
import Risk from "@/src/models/Risk";

export async function GET() {
  try {
    await connectDB();

    const beneficiaries = await Beneficiary.countDocuments();
    const activeCases = await CaseModel.countDocuments();
    const highRisk = await Risk.countDocuments({ riskLevel: "High" });
    const mediumRisk = await Risk.countDocuments({ riskLevel: "Medium" });
    const lowRisk = await Risk.countDocuments({ riskLevel: "Low" });

    return NextResponse.json({
      success: true,
      beneficiaries,
      activeCases,
      highRisk,
      mediumRisk,
      lowRisk,
    });
  } catch (error: any) {
    console.error("Dashboard API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Dashboard API failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}