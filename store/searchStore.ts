import { create } from "zustand";
import { SearchResult } from "@/services/search";

interface SearchState {
  query: string;
  results: SearchResult[];

  setQuery: (query: string) => void;
  setResults: (results: SearchResult[]) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  results: [],

  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results }),
}));