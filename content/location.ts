export type Location = {
  addressLines: string[];
  city: string;
  country: string;
  geo: { lat: number; lng: number };
  phone: string;
  whatsapp: string;
  mapsUrl: string;
  verified: boolean;
};

export const location: Location = {
  addressLines: [],
  city: "",
  country: "",
  geo: { lat: 0, lng: 0 },
  phone: "",
  whatsapp: "",
  mapsUrl: "",
  verified: false,
};
