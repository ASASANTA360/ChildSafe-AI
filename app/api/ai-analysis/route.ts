import { NextResponse } from "next/server";

import { identityAgent } from "@/src/agents/identityAgent";
import { riskAgent } from "@/src/agents/riskAgent";
import { fraudAgent } from "@/src/agents/fraudAgent";
import { caseAgent } from "@/src/agents/caseAgent";
import { recommendationAgent } from "@/src/agents/recommendationAgent";
import { auditAgent } from "@/src/agents/auditAgent";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "ChildSafe AI API is running",
    method: "Use POST to perform AI analysis",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const identityResult = await identityAgent(body);

    const riskResult = await riskAgent({
      childId: body.childId,
      age: body.age,
      location: body.location,
      identityStatus: "Verified",
      caseNotes: body.notes,
    });

    const fraudResult = await fraudAgent({
      childId: body.childId,
      fullName: body.fullName,
      guardianName: body.guardianName,
    });

    const caseResult = await caseAgent({
      caseId: body.caseId || "CASE-001",
      childId: body.childId,
      priority: body.priority || "Medium",
      status: body.status || "Open",
      notes: body.notes,
    });

    const recommendationResult = await recommendationAgent({
      childId: body.childId,
      riskLevel: "Medium",
      riskScore: 50,
      context: body.notes,
    });

    const auditLog = auditAgent({
      action: "AI Analysis Executed",
      beneficiaryId: body.childId,
      agent: "ChildSafe AI",
      status: "Success",
    });

    return NextResponse.json({
      success: true,
      identityResult,
      riskResult,
      fraudResult,
      caseResult,
      recommendationResult,
      auditLog,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "AI analysis failed",
      },
      { status: 500 }
    );
  }
}