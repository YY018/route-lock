"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2 w-[420px]">
      <Search size={18} />

      <input
        className="bg-transparent outline-none flex-1"
        placeholder="Search places..."
      />
    </div>
  );
}