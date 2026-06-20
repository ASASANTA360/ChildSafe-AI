import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {
  ShieldAlert,
  Brain,
  TriangleAlert,
  ShieldCheck,
} from "lucide-react";

const risks = [
  {
    id: "CH-0038",
    child: "Musa Ibrahim",
    score: 87,
    level: "High",
    recommendation: "Immediate intervention required",
  },
  {
    id: "CH-0021",
    child: "Amina Yusuf",
    score: 56,
    level: "Medium",
    recommendation: "Monitor and follow-up",
  },
  {
    id: "CH-0044",
    child: "Zainab Ali",
    score: 22,
    level: "Low",
    recommendation: "Routine monitoring",
  },
];

export default function RiskAnalysisPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold">
            AI Risk Analysis
          </h1>

          <p className="text-gray-500 mt-2">
            AI-powered vulnerability and risk assessment.
          </p>

          {/* Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ShieldAlert className="text-red-500 mb-4" size={28} />
              <h3 className="text-sm text-gray-500">
                High Risk Cases
              </h3>

              <p className="text-3xl font-bold mt-2">
                11
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <TriangleAlert className="text-orange-500 mb-4" size={28} />

              <h3 className="text-sm text-gray-500">
                Medium Risk Cases
              </h3>

              <p className="text-3xl font-bold mt-2">
                31
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ShieldCheck className="text-green-600 mb-4" size={28} />

              <h3 className="text-sm text-gray-500">
                Low Risk Cases
              </h3>

              <p className="text-3xl font-bold mt-2">
                58
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Brain className="text-purple-600 mb-4" size={28} />

              <h3 className="text-sm text-gray-500">
                AI Recommendations
              </h3>

              <p className="text-3xl font-bold mt-2">
                29
              </p>
            </div>

          </div>

          {/* Risk Table */}

          <div className="bg-white rounded-2xl shadow-sm mt-8 overflow-hidden">

            <div className="p-6 border-b">
              <h2 className="text-xl font-bold">
                Risk Assessments
              </h2>
            </div>

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>
                  <th className="p-4 text-left">Child ID</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Risk Score</th>
                  <th className="p-4 text-left">Level</th>
                  <th className="p-4 text-left">AI Recommendation</th>
                </tr>

              </thead>

              <tbody>

                {risks.map((risk) => (
                  <tr key={risk.id} className="border-t">

                    <td className="p-4 font-semibold">
                      {risk.id}
                    </td>

                    <td className="p-4">
                      {risk.child}
                    </td>

                    <td className="p-4">
                      {risk.score}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          risk.level === "High"
                            ? "bg-red-100 text-red-700"
                            : risk.level === "Medium"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {risk.level}
                      </span>

                    </td>

                    <td className="p-4">
                      {risk.recommendation}
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