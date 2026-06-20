import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import {
  Shield,
  Brain,
  Database,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">

          <div className="bg-white rounded-2xl shadow-sm p-8">

            <h1 className="text-4xl font-bold text-gray-800">
              About ChildSafe AI
            </h1>

            <p className="text-gray-500 mt-4 leading-8">
              ChildSafe AI is an open-source AI platform designed to strengthen
              child protection, identity verification, risk analysis, and
              trusted digital services for vulnerable children and families.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <Shield className="text-sky-600 mb-5" size={36} />

              <h2 className="text-2xl font-bold">
                Mission
              </h2>

              <p className="text-gray-500 mt-4 leading-7">
                To improve access to trusted digital services through
                artificial intelligence, secure identity systems, and
                transparent workflows for children and vulnerable communities.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <Brain className="text-purple-600 mb-5" size={36} />

              <h2 className="text-2xl font-bold">
                AI Capabilities
              </h2>

              <p className="text-gray-500 mt-4 leading-7">
                ChildSafe AI uses intelligent agents for identity verification,
                risk assessment, fraud detection, case management,
                recommendations, and audit trails.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <Database className="text-green-600 mb-5" size={36} />

              <h2 className="text-2xl font-bold">
                Technology Stack
              </h2>

              <p className="text-gray-500 mt-4 leading-7">
                Next.js, TypeScript, MongoDB, Gemini AI, Blockchain, and
                open-source technologies optimized for low-resource
                environments.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <Globe className="text-orange-500 mb-5" size={36} />

              <h2 className="text-2xl font-bold">
                Impact
              </h2>

              <p className="text-gray-500 mt-4 leading-7">
                ChildSafe AI aims to support governments, NGOs, schools,
                healthcare providers, and social protection programs to improve
                outcomes for children and underserved communities.
              </p>

            </div>

          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mt-8">

            <h2 className="text-2xl font-bold">
              Developed By
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              ASASANTA GLOBAL TECHNOLOGIES
            </p>

            <p className="text-gray-500">
              Founder: Salisu Ishaq Asasanta
            </p>

            <p className="text-gray-500">
              Open-source AI platform for trusted digital services.
            </p>

          </div>

        </main>
      </div>
    </div>
  );
}