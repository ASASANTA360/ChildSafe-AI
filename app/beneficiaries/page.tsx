"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { Search, UserCheck, Eye } from "lucide-react";

type Beneficiary = {
  _id: string;
  childId: string;
  fullName: string;
  age: number;
  gender: string;
  riskLevel: "Low" | "Medium" | "High";
  identityStatus: string;
};

export default function BeneficiariesPage() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);

  useEffect(() => {
    async function loadBeneficiaries() {
      const res = await fetch("/api/beneficiaries");
      const data = await res.json();
      setBeneficiaries(data);
    }

    loadBeneficiaries();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Beneficiaries
              </h1>
              <p className="text-gray-500 mt-1">
                Live beneficiary records from MongoDB.
              </p>
            </div>

            <button className="bg-sky-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2">
              <UserCheck size={18} />
              Add Beneficiary
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3">
              <Search className="text-gray-500" size={18} />
              <input
                className="bg-transparent outline-none ml-3 w-full text-sm"
                placeholder="Search beneficiaries..."
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-sm text-gray-600">Child ID</th>
                  <th className="p-4 text-sm text-gray-600">Name</th>
                  <th className="p-4 text-sm text-gray-600">Age</th>
                  <th className="p-4 text-sm text-gray-600">Gender</th>
                  <th className="p-4 text-sm text-gray-600">Risk Level</th>
                  <th className="p-4 text-sm text-gray-600">Identity</th>
                  <th className="p-4 text-sm text-gray-600">Action</th>
                </tr>
              </thead>

              <tbody>
                {beneficiaries.map((child) => (
                  <tr key={child._id} className="border-t">
                    <td className="p-4 font-semibold">{child.childId}</td>
                    <td className="p-4">{child.fullName}</td>
                    <td className="p-4">{child.age}</td>
                    <td className="p-4">{child.gender}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          child.riskLevel === "High"
                            ? "bg-red-100 text-red-700"
                            : child.riskLevel === "Medium"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {child.riskLevel}
                      </span>
                    </td>
                    <td className="p-4">{child.identityStatus}</td>
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