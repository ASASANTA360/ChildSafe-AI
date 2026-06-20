import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { ShieldCheck, Fingerprint, Database, CheckCircle } from "lucide-react";

const verificationRecords = [
  {
    id: "CH-0021",
    name: "Amina Yusuf",
    identity: "Verified",
    biometric: "Passed",
    blockchain: "Recorded",
    status: "Approved",
  },
  {
    id: "CH-0038",
    name: "Musa Ibrahim",
    identity: "Pending",
    biometric: "Review",
    blockchain: "Not Recorded",
    status: "Manual Review",
  },
  {
    id: "CH-0044",
    name: "Zainab Ali",
    identity: "Verified",
    biometric: "Passed",
    blockchain: "Recorded",
    status: "Approved",
  },
];

export default function VerificationPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Identity Verification
          </h1>

          <p className="text-gray-500 mt-2">
            AI-assisted identity verification for children and vulnerable families.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ShieldCheck className="text-sky-600 mb-4" size={28} />
              <h3 className="text-gray-500 text-sm">Verified Records</h3>
              <p className="text-3xl font-bold mt-2">98</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Fingerprint className="text-green-600 mb-4" size={28} />
              <h3 className="text-gray-500 text-sm">Biometric Passed</h3>
              <p className="text-3xl font-bold mt-2">87</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Database className="text-purple-600 mb-4" size={28} />
              <h3 className="text-gray-500 text-sm">Blockchain Records</h3>
              <p className="text-3xl font-bold mt-2">72</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <CheckCircle className="text-orange-500 mb-4" size={28} />
              <h3 className="text-gray-500 text-sm">Manual Reviews</h3>
              <p className="text-3xl font-bold mt-2">9</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mt-8">
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-sm text-gray-600">Child ID</th>
                  <th className="p-4 text-sm text-gray-600">Name</th>
                  <th className="p-4 text-sm text-gray-600">Identity</th>
                  <th className="p-4 text-sm text-gray-600">Biometric</th>
                  <th className="p-4 text-sm text-gray-600">Blockchain</th>
                  <th className="p-4 text-sm text-gray-600">Status</th>
                </tr>
              </thead>

              <tbody>
                {verificationRecords.map((record) => (
                  <tr key={record.id} className="border-t">
                    <td className="p-4 font-semibold">{record.id}</td>
                    <td className="p-4">{record.name}</td>
                    <td className="p-4">{record.identity}</td>
                    <td className="p-4">{record.biometric}</td>
                    <td className="p-4">{record.blockchain}</td>
                    <td className="p-4">
                      <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {record.status}
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