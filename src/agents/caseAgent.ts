import { generateAIResponse } from "@/src/lib/gemini";

export async function caseAgent(data: {
  caseId: string;
  childId: string;
  priority: string;
  status: string;
  notes?: string;
}) {
  const prompt = `
You are ChildSafe AI Case Agent.

Review this child protection case and recommend the next action.

Case:
Case ID: ${data.caseId}
Child ID: ${data.childId}
Priority: ${data.priority}
Status: ${data.status}
Notes: ${data.notes || "No notes"}

Return:
- nextAction
- humanReviewRequired
- urgency
- recommendation
`;

  return generateAIResponse(prompt);
}