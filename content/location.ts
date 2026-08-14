export type Location = {
  addressLines: string[];
  city: string;
  postal: string;
  country: string;
  plusCode?: string;
  geo: { lat: number; lng: number };
  phone: string;
  whatsapp: string;
  mapsUrl: string;
  verified: boolean;
};

export const location: Location = {
  addressLines: [
    "Harrian Wala Chowk, opposite Chase Value",
    "D Ground, Block B",
  ],
  city: "Faisalabad",
  postal: "38000",
  country: "Pakistan",
  plusCode: "C434+JJ Faisalabad",
  // Exact decimal coordinates are still pending. Keep verified false until
  // they are supplied; later LocalBusiness JSON-LD depends on real coordinates.
  geo: { lat: 0, lng: 0 },
  phone: "+92 303 6866009",
  whatsapp: "+923036866009",
  mapsUrl: "",
  verified: false,
};
