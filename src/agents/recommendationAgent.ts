import { generateAIResponse } from "@/src/lib/gemini";

export async function recommendationAgent(data: {
  childId: string;
  riskLevel: string;
  riskScore: number;
  context?: string;
}) {
  const prompt = `
You are ChildSafe AI Recommendation Agent.

Generate practical intervention recommendations for this case.

Data:
Child ID: ${data.childId}
Risk Level: ${data.riskLevel}
Risk Score: ${data.riskScore}
Context: ${data.context || "No context"}

Return:
- recommendedIntervention
- priority
- suggestedStakeholders
- followUpPlan
`;

  return generateAIResponse(prompt);
}