import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {
  FileText,
  ShieldCheck,
  Clock,
  UserCheck,
} from "lucide-react";

const auditLogs = [
  {
    id: "LOG-001",
    action: "Identity verification completed",
    beneficiary: "CH-0021",
    agent: "Identity Agent",
    time: "5 minutes ago",
    status: "Success",
  },
  {
    id: "LOG-002",
    action: "High-risk case flagged",
    beneficiary: "CH-0038",
    agent: "Risk Agent",
    time: "18 minutes ago",
    status: "Review",
  },
  {
    id: "LOG-003",
    action: "Human approval requested",
    beneficiary: "CH-0038",
    agent: "Case Agent",
    time: "35 minutes ago",
    status: "Pending",
  },
  {
    id: "LOG-004",
    action: "Blockchain audit record created",
    beneficiary: "CH-0044",
    agent: "Audit Agent",
    time: "1 hour ago",
    status: "Recorded",
  },
];

export default function AuditLogsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Audit Logs
          </h1>

          <p className="text-gray-500 mt-2">
            Transparent records of AI decisions, identity checks, human reviews, and system actions.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <FileText className="text-sky-600 mb-4" size={28} />
              <h3 className="text-sm text-gray-500">Total Logs</h3>
              <p className="text-3xl font-bold mt-2">248</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ShieldCheck className="text-green-600 mb-4" size={28} />
              <h3 className="text-sm text-gray-500">Verified Actions</h3>
              <p className="text-3xl font-bold mt-2">196</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Clock className="text-orange-500 mb-4" size={28} />
              <h3 className="text-sm text-gray-500">Pending Reviews</h3>
              <p className="text-3xl font-bold mt-2">17</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <UserCheck className="text-purple-600 mb-4" size={28} />
              <h3 className="text-sm text-gray-500">Human Approvals</h3>
              <p className="text-3xl font-bold mt-2">35</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm mt-8 overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">System Audit Trail</h2>
            </div>

            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-sm text-gray-600">Log ID</th>
                  <th className="p-4 text-sm text-gray-600">Action</th>
                  <th className="p-4 text-sm text-gray-600">Beneficiary</th>
                  <th className="p-4 text-sm text-gray-600">Agent</th>
                  <th className="p-4 text-sm text-gray-600">Time</th>
                  <th className="p-4 text-sm text-gray-600">Status</th>
                </tr>
              </thead>

              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id} className="border-t">
                    <td className="p-4 font-semibold">{log.id}</td>
                    <td className="p-4">{log.action}</td>
                    <td className="p-4">{log.beneficiary}</td>
                    <td className="p-4">{log.agent}</td>
                    <td className="p-4 text-gray-500">{log.time}</td>
                    <td className="p-4">
                      <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}