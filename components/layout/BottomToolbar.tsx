"use client";

import {
  MapPin,
  Pencil,
  Lock,
  Save,
  Navigation,
} from "lucide-react";

const buttons = [
  { icon: MapPin, text: "Locate" },
  { icon: Pencil, text: "Draw" },
  { icon: Lock, text: "Lock" },
  { icon: Save, text: "Save" },
  { icon: Navigation, text: "Navigate" },
];

export default function BottomToolbar() {
  return (
    <footer className="h-16 bg-slate-900 border-t border-slate-800 flex justify-center items-center gap-5">
      {buttons.map((button) => (
        <button
          key={button.text}
          className="flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-2 hover:bg-blue-600 transition"
        >
          <button.icon size={18} />
          {button.text}
        </button>
      ))}
    </footer>
  );
}