export type Zone = {
  slug: string;
  name: string;
  description: string;
  image: string | null;
  verified: boolean;
};

export const zones: Zone[] = [
  {
    slug: "free-weights",
    name: "Free Weights",
    description: "Dedicated space for free-weight strength training.",
    image: "/images/zones/free-weights.webp",
    verified: true,
  },
  {
    slug: "machines",
    name: "Machines",
    description: "A focused machine zone for controlled strength work.",
    image: "/images/zones/machines.webp",
    verified: true,
  },
  {
    slug: "functional-turf",
    name: "Functional / Turf",
    description: "Open turf space for functional training and conditioning.",
    image: "/images/zones/functional-turf.webp",
    verified: true,
  },
  {
    slug: "cardio",
    name: "Cardio",
    description: "A dedicated area for cardio sessions, warm-ups and conditioning.",
    image: "/images/zones/cardio.webp",
    verified: true,
  },
  {
    slug: "yoga-studio",
    name: "Yoga Studio",
    description: "A separate studio reserved for yoga practice.",
    image: "/images/zones/yoga-studio.webp",
    verified: true,
  },
  {
    slug: "recovery",
    name: "Recovery",
    description: "Steam and ice bath facilities for post-training recovery.",
    image: "/images/zones/recovery.webp",
    verified: true,
  },
];
