"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  TriangleAlert,
  Briefcase,
  BarChart3,
  FileText,
  Settings,
  Info,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Beneficiaries",
    href: "/beneficiaries",
    icon: Users,
  },
  {
    name: "Verification",
    href: "/verification",
    icon: ShieldCheck,
  },
  {
    name: "Risk Analysis",
    href: "/risk-analysis",
    icon: TriangleAlert,
  },
  {
    name: "Cases",
    href: "/cases",
    icon: Briefcase,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Audit Logs",
    href: "/audit-logs",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-sky-600">
          ChildSafe AI
        </h1>
        <p className="text-sm text-gray-500">
          Trusted Digital Services
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="
              flex items-center gap-3
              p-3 rounded-xl
              text-gray-700
              hover:bg-sky-50
              hover:text-sky-600
              transition
              "
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-16 p-4 rounded-xl bg-sky-50">
        <h3 className="font-semibold text-sky-700">
          UNICEF Ready
        </h3>

        <p className="text-xs text-gray-600 mt-2">
          Open-source AI platform for child protection and trusted digital services.
        </p>
      </div>
    </aside>
  );
}