"use client";

import {
  Home,
  Map,
  Bookmark,
  Share2,
  Settings,
} from "lucide-react";

const items = [
  { icon: Home, label: "Dashboard" },
  { icon: Map, label: "My Trips" },
  { icon: Bookmark, label: "Saved Routes" },
  { icon: Share2, label: "Shared Trips" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-5">
      <h1 className="text-2xl font-bold mb-10">
        🚗 RouteLock
      </h1>

      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-800 transition"
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}