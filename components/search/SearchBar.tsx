"use client";

import { Search } from "lucide-react";
import { useEffect } from "react";
import { searchPlaces } from "@/services/search";
import { useSearchStore } from "@/store/searchStore";

export default function SearchBar() {
  const {
    query,
    results,
    setQuery,
    setResults,
  } = useSearchStore();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      const data = await searchPlaces(query);

      setResults(data);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-[420px]">
      <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2">
        <Search size={18} />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search places..."
          className="bg-transparent outline-none flex-1"
        />
      </div>

      {results.length > 0 && (
        <div className="absolute mt-2 w-full rounded-xl bg-slate-900 shadow-lg overflow-hidden z-50">
          {results.map((place) => (
            <button
              key={place.place_id}
              className="w-full text-left p-3 hover:bg-slate-800"
            >
              {place.display_name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}