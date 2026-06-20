import { generateAIResponse } from "@/src/lib/gemini";

export async function identityAgent(data: {
  fullName: string;
  age: number;
  gender: string;
  guardianName?: string;
  location?: string;
}) {
  const prompt = `
You are ChildSafe AI Identity Agent.

Analyze the following beneficiary identity data and return a concise verification assessment.

Data:
Name: ${data.fullName}
Age: ${data.age}
Gender: ${data.gender}
Guardian: ${data.guardianName || "Not provided"}
Location: ${data.location || "Not provided"}

Return:
- identityStatus
- confidenceScore
- concerns
- recommendation
`;

  return generateAIResponse(prompt);
}