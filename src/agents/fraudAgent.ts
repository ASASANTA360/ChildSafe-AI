import { generateAIResponse } from "@/src/lib/gemini";

export async function fraudAgent(data: {
  childId: string;
  fullName: string;
  guardianName?: string;
  duplicateSignals?: string[];
}) {
  const prompt = `
You are ChildSafe AI Fraud Detection Agent.

Check for possible fraud, duplicate identity, or data inconsistency.

Data:
Child ID: ${data.childId}
Name: ${data.fullName}
Guardian: ${data.guardianName || "Not provided"}
Duplicate Signals: ${data.duplicateSignals?.join(", ") || "None"}

Return:
- fraudRisk
- anomalySignals
- recommendedAction
`;

  return generateAIResponse(prompt);
}