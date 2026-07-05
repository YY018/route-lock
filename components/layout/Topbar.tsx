"use client";

import SearchBar from "@/components/layout/SearchBar";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 px-6 flex items-center justify-between">
      <SearchBar />

      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          Y
        </div>
      </div>
    </header>
  );
}