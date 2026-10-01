export type Amenity = {
  slug: string;
  name: string;
  description?: string;
};

export type AmenityGroup = {
  slug: string;
  name: string;
  items: Amenity[];
  note?: string;
};

export type Amenities = {
  groups: AmenityGroup[];
  verified: boolean;
};

export const amenities: Amenities = {
  groups: [
    {
      slug: "fuel-nutrition",
      name: "Fuel & Nutrition",
      items: [
        {
          slug: "fuel-bar",
          name: "Premium Fuel Bar",
          description: "Protein, creatine, pre-workout and selected nutrition essentials.",
        },
        {
          slug: "cafe-seating",
          name: "Café Seating",
          description: "A sitting area alongside the Fuel Bar.",
        },
        {
          slug: "nutrition-consultation",
          name: "Nutrition Consultation",
          description: "Nutrition consultation and custom diet-plan support.",
        },
      ],
    },
    {
      slug: "recovery-wellness",
      name: "Recovery & Wellness",
      items: [
        { slug: "steam", name: "Steam" },
        { slug: "ice-bath", name: "Ice Bath" },
        {
          slug: "massage-chairs",
          name: "Massage Chairs",
          description: "Two massage chairs are available.",
        },
        {
          slug: "physiotherapy",
          name: "In-house Physiotherapy",
          description: "On-site physiotherapy consultations are available.",
        },
      ],
    },
    {
      slug: "classes-movement",
      name: "Classes & Movement",
      items: [
        { slug: "yoga", name: "Yoga" },
        { slug: "zumba", name: "Zumba" },
        { slug: "karate", name: "Karate" },
      ],
      note: "Ask the team for the current class schedule.",
    },
    {
      slug: "club-convenience",
      name: "Club Convenience",
      items: [
        { slug: "public-lockers", name: "Public Lockers" },
        {
          slug: "executive-lockers",
          name: "Executive Lockers",
          description: "Dedicated locker allocation available for a separate Rs. 2,000 fee.",
        },
        {
          slug: "member-app",
          name: "Member App",
          description: "Member app access for account and club information.",
        },
        { slug: "air-conditioned", name: "Fully Air Conditioned" },
        { slug: "biometric-entry", name: "Biometric Face-Recognition Entry" },
        { slug: "towel-service", name: "Hygienic Towel Service" },
        { slug: "parking", name: "Plaza Parking" },
        { slug: "power-backup", name: "Full Power Backup" },
        { slug: "sound-system", name: "JBL Sound System" },
        { slug: "wifi", name: "WiFi" },
      ],
    },
  ],
  verified: true,
};
