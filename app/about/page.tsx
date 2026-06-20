export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-gray-800">
          About ChildSafe AI
        </h1>

        <p className="text-gray-600 mt-4 leading-8">
          ChildSafe AI is an open-source AI platform for identity verification,
          risk analysis, case management, and trusted digital services for
          children and vulnerable families.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Mission
        </h2>

        <p className="text-gray-600 mt-3 leading-7">
          Our mission is to help governments, NGOs, schools, healthcare
          providers, and community organizations improve access to essential
          services through secure, transparent, and AI-powered workflows.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Developed By
        </h2>

        <p className="text-gray-600 mt-3">
          ASASANTA GLOBAL TECHNOLOGIES
        </p>
      </div>
    </main>
  );
}