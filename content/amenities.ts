export type Amenity = {
  slug: string;
  name: string;
  description: string;
  highlight: boolean;
};

export type Amenities = {
  list: Amenity[];
  verified: boolean;
};

export const amenities: Amenities = {
  list: [
    {
      slug: "physio-room",
      name: "Physio Room",
      description: "[PLACEHOLDER] Physio room amenity description.",
      highlight: false,
    },
    {
      slug: "fuel-bar",
      name: "Fuel Bar",
      description: "[PLACEHOLDER] Fuel bar amenity description.",
      highlight: false,
    },
    {
      slug: "biometric-entry",
      name: "Biometric Face-Recognition Entry",
      description: "[PLACEHOLDER] Biometric entry amenity description.",
      highlight: true,
    },
    {
      slug: "lockers",
      name: "Public & Private Lockers",
      description: "[PLACEHOLDER] Locker amenity description.",
      highlight: false,
    },
    {
      slug: "towel-service",
      name: "Hygienic Towel Service",
      description: "[PLACEHOLDER] Towel service amenity description.",
      highlight: false,
    },
    {
      slug: "parking",
      name: "Plaza Parking",
      description: "[PLACEHOLDER] Parking amenity description.",
      highlight: false,
    },
    {
      slug: "climate-control",
      name: "Fully Air Conditioned",
      description: "[PLACEHOLDER] Climate control amenity description.",
      highlight: false,
    },
    {
      slug: "power-backup",
      name: "Full Power Backup",
      description: "[PLACEHOLDER] Power backup amenity description.",
      highlight: false,
    },
    {
      slug: "sound-system",
      name: "JBL Sound System",
      description: "[PLACEHOLDER] Sound system amenity description.",
      highlight: false,
    },
    {
      slug: "wifi",
      name: "WiFi",
      description: "[PLACEHOLDER] WiFi amenity description.",
      highlight: false,
    },
  ],
  verified: true,
};
