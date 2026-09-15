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
    description: "[PLACEHOLDER] Free weights zone description.",
    image: "/images/zones/free-weights.webp",
    verified: true,
  },
  {
    slug: "machines",
    name: "Machines",
    description: "[PLACEHOLDER] Machines zone description.",
    image: "/images/zones/machines.webp",
    verified: true,
  },
  {
    slug: "functional-turf",
    name: "Functional / Turf",
    description: "[PLACEHOLDER] Functional and turf zone description.",
    image: "/images/zones/functional-turf.webp",
    verified: true,
  },
  {
    slug: "cardio",
    name: "Cardio",
    description: "[PLACEHOLDER] Cardio zone description.",
    image: "/images/zones/cardio.webp",
    verified: true,
  },
  {
    slug: "yoga-studio",
    name: "Yoga Studio",
    description: "[PLACEHOLDER] Yoga studio zone description.",
    image: "/images/zones/yoga-studio.webp",
    verified: true,
  },
  {
    slug: "recovery",
    name: "Recovery",
    description: "[PLACEHOLDER] Recovery zone covering steam and ice bath.",
    image: "/images/zones/recovery.webp",
    verified: true,
  },
];
