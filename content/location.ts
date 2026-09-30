export type Location = {
  addressLines: string[];
  city: string;
  postal: string;
  country: string;
  plusCode?: string;
  geo: { lat: number; lng: number };
  phone: string;
  secondaryPhone: string;
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
  geo: { lat: 31.404254, lng: 73.106610 },
  phone: "0340-8484448",
  secondaryPhone: "0303-6866009",
  whatsapp: "+92 303 6866009",
  mapsUrl: "",
  verified: true,
};
