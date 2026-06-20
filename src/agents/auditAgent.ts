export function auditAgent(data: {
  action: string;
  beneficiaryId?: string;
  agent: string;
  status: string;
}) {
  return {
    logId: `LOG-${Date.now()}`,
    action: data.action,
    beneficiaryId: data.beneficiaryId || "N/A",
    agent: data.agent,
    status: data.status,
    timestamp: new Date().toISOString(),
  };
}