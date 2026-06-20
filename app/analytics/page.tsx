"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyCases = [
  { month: "Jan", cases: 18 },
  { month: "Feb", cases: 24 },
  { month: "Mar", cases: 29 },
  { month: "Apr", cases: 34 },
  { month: "May", cases: 41 },
  { month: "Jun", cases: 52 },
];

const beneficiaryGrowth = [
  { month: "Jan", beneficiaries: 20 },
  { month: "Feb", beneficiaries: 44 },
  { month: "Mar", beneficiaries: 73 },
  { month: "Apr", beneficiaries: 96 },
  { month: "May", beneficiaries: 125 },
  { month: "Jun", beneficiaries: 160 },
];

const riskDistribution = [
  { name: "Low Risk", value: 58 },
  { name: "Medium Risk", value: 31 },
  { name: "High Risk", value: 11 },
];

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Analytics
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor impact, risk trends, beneficiary growth, and service delivery insights.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Monthly Cases</h2>

              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={monthlyCases}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cases" fill="#009FE3" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Beneficiary Growth</h2>

              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={beneficiaryGrowth}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="beneficiaries"
                    stroke="#009FE3"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Risk Distribution</h2>

              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                    label
                  >
                    {riskDistribution.map((_, index) => (
                      <Cell
                        key={index}
                        fill={["#22c55e", "#f97316", "#ef4444"][index]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm text-gray-500">Service Coverage</h3>
              <p className="text-3xl font-bold mt-2">76%</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm text-gray-500">Verification Accuracy</h3>
              <p className="text-3xl font-bold mt-2">92%</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm text-gray-500">Fraud Reduction</h3>
              <p className="text-3xl font-bold mt-2">41%</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm text-gray-500">Cases Resolved</h3>
              <p className="text-3xl font-bold mt-2">68%</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}