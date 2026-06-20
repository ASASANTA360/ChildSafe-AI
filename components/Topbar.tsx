"use client";

import { Bell, Search, ShieldCheck } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Child Protection Intelligence Platform
        </p>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-[350px]">
        <Search className="text-gray-500" size={18} />

        <input
          type="text"
          placeholder="Search..."
          className="
          bg-transparent
          outline-none
          ml-3
          w-full
          text-sm
          "
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        <button className="relative">
          <Bell size={22} className="text-gray-700" />

          <span className="
          absolute
          -top-1
          -right-1
          bg-red-500
          text-white
          text-xs
          rounded-full
          h-5
          w-5
          flex
          items-center
          justify-center
          ">
            3
          </span>
        </button>

        <div className="flex items-center gap-3 bg-sky-50 px-4 py-2 rounded-xl">
          <ShieldCheck className="text-sky-600" size={22} />

          <div>
            <p className="font-semibold text-gray-800">
              Salisu Asasanta
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}