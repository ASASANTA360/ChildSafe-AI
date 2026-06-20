import { generateAIResponse } from "@/src/lib/gemini";

export async function riskAgent(data: {
  childId: string;
  age: number;
  location?: string;
  identityStatus?: string;
  caseNotes?: string;
}) {
  const prompt = `
You are ChildSafe AI Risk Agent.

Analyze child protection vulnerability risk.

Data:
Child ID: ${data.childId}
Age: ${data.age}
Location: ${data.location || "Not provided"}
Identity Status: ${data.identityStatus || "Unknown"}
Case Notes: ${data.caseNotes || "No notes"}

Return JSON:
{
  "riskScore": number,
  "riskLevel": "Low" | "Medium" | "High",
  "riskFactors": [],
  "recommendation": ""
}
`;

  return generateAIResponse(prompt);
}