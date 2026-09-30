export type MembershipPlan = {
  slug: string;
  durationMonths: 1 | 3 | 6 | 12;
  regularPrice: number;
  foundingPrice: number;
};

export type Memberships = {
  plans: MembershipPlan[];
  currency: "Rs.";
  foundingMemberLimit: number;
  preBookingOpens: string;
  registrationFee: {
    regular: number;
    founding: number;
  };
  verified: boolean;
};

export const memberships: Memberships = {
  plans: [
    { slug: "1-month", durationMonths: 1, regularPrice: 10000, foundingPrice: 7000 },
    { slug: "3-months", durationMonths: 3, regularPrice: 27000, foundingPrice: 18000 },
    { slug: "6-months", durationMonths: 6, regularPrice: 48000, foundingPrice: 33000 },
    { slug: "12-months", durationMonths: 12, regularPrice: 84000, foundingPrice: 60000 },
  ],
  currency: "Rs.",
  foundingMemberLimit: 200,
  preBookingOpens: "1 October 2026",
  registrationFee: { regular: 5000, founding: 0 },
  verified: true,
};
