"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { Users, ShieldAlert, FileText, Brain } from "lucide-react";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    beneficiaries: 0,
    activeCases: 0,
    highRisk: 0,
    mediumRisk: 0,
    lowRisk: 0,
  });

  useEffect(() => {
    async function loadStats() {
      const res = await fetch("/api/dashboard");
      const data = await res.json();

      if (data.success) {
        setStats(data);
      }
    }

    loadStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Users className="text-sky-600 mb-4" size={28} />
              <h3 className="text-gray-500 text-sm">Verified Beneficiaries</h3>
              <p className="text-3xl font-bold mt-2">{stats.beneficiaries}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ShieldAlert className="text-red-500 mb-4" size={28} />
              <h3 className="text-gray-500 text-sm">High Risk Alerts</h3>
              <p className="text-3xl font-bold mt-2">{stats.highRisk}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <FileText className="text-green-600 mb-4" size={28} />
              <h3 className="text-gray-500 text-sm">Active Cases</h3>
              <p className="text-3xl font-bold mt-2">{stats.activeCases}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Brain className="text-purple-600 mb-4" size={28} />
              <h3 className="text-gray-500 text-sm">AI Recommendations</h3>
              <p className="text-3xl font-bold mt-2">
                {stats.highRisk + stats.mediumRisk + stats.lowRisk}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mt-8">
            <h2 className="text-xl font-bold mb-6">Live Risk Summary</h2>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="border rounded-xl p-4">
                🟢 Low Risk: {stats.lowRisk}
              </div>

              <div className="border rounded-xl p-4">
                🟠 Medium Risk: {stats.mediumRisk}
              </div>

              <div className="border rounded-xl p-4">
                🔴 High Risk: {stats.highRisk}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mt-8">
            <h2 className="text-xl font-bold mb-6">AI Agent Status</h2>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                "Identity Agent",
                "Risk Agent",
                "Fraud Agent",
                "Case Agent",
                "Recommendation Agent",
                "Audit Agent",
              ].map((agent) => (
                <div key={agent} className="border rounded-xl p-4">
                  🟢 {agent}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}