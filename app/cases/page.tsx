"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {
  Briefcase,
  Clock,
  AlertTriangle,
  CheckCircle,
  Eye,
} from "lucide-react";

type CaseItem = {
  _id: string;
  caseId: string;
  childId: string;
  title: string;
  priority: "Low" | "Medium" | "High";
  status: string;
  assignedAgent: string;
  createdAt: string;
};

export default function CasesPage() {
  const [cases, setCases] = useState<CaseItem[]>([]);

  useEffect(() => {
    async function loadCases() {
      const res = await fetch("/api/cases");
      const data = await res.json();
      setCases(data);
    }

    loadCases();
  }, []);

  const highPriority = cases.filter((c) => c.priority === "High").length;
  const underReview = cases.filter((c) => c.status === "Under Review").length;
  const resolved = cases.filter((c) => c.status === "Resolved").length;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Case Management
          </h1>

          <p className="text-gray-500 mt-2">
            Live child protection cases from MongoDB.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Briefcase className="text-sky-600 mb-4" size={28} />
              <h3 className="text-sm text-gray-500">Total Cases</h3>
              <p className="text-3xl font-bold mt-2">{cases.length}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <AlertTriangle className="text-red-500 mb-4" size={28} />
              <h3 className="text-sm text-gray-500">High Priority</h3>
              <p className="text-3xl font-bold mt-2">{highPriority}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Clock className="text-orange-500 mb-4" size={28} />
              <h3 className="text-sm text-gray-500">Under Review</h3>
              <p className="text-3xl font-bold mt-2">{underReview}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <CheckCircle className="text-green-600 mb-4" size={28} />
              <h3 className="text-sm text-gray-500">Resolved</h3>
              <p className="text-3xl font-bold mt-2">{resolved}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm mt-8 overflow-hidden">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Active Case Queue</h2>

              <button className="bg-sky-600 text-white px-5 py-2 rounded-xl font-semibold">
                New Case
              </button>
            </div>

            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-sm text-gray-600">Case ID</th>
                  <th className="p-4 text-sm text-gray-600">Child ID</th>
                  <th className="p-4 text-sm text-gray-600">Title</th>
                  <th className="p-4 text-sm text-gray-600">Priority</th>
                  <th className="p-4 text-sm text-gray-600">Assigned Agent</th>
                  <th className="p-4 text-sm text-gray-600">Status</th>
                  <th className="p-4 text-sm text-gray-600">Created</th>
                  <th className="p-4 text-sm text-gray-600">Action</th>
                </tr>
              </thead>

              <tbody>
                {cases.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="p-4 font-semibold">{item.caseId}</td>
                    <td className="p-4">{item.childId}</td>
                    <td className="p-4">{item.title}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.priority === "High"
                            ? "bg-red-100 text-red-700"
                            : item.priority === "Medium"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </td>
                    <td className="p-4">{item.assignedAgent}</td>
                    <td className="p-4">{item.status}</td>
                    <td className="p-4 text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <button className="text-sky-600 flex items-center gap-2 font-semibold">
                        <Eye size={16} />
                        View
                      </button>
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