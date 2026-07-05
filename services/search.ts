export interface SearchResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

export async function searchPlaces(query: string): Promise<SearchResult[]> {
  if (!query) return [];

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
      query
    )}&limit=5`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return response.json();
}