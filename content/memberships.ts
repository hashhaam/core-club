export type MembershipTier = {
  slug: string;
  name: string;
  price: number;
  currency: string;
  period: string;
  inclusions: string[];
  recommended: boolean;
};

export type Memberships = {
  tiers: MembershipTier[];
  trialNote: string;
  priceNote: string;
  verified: boolean;
};

export const memberships: Memberships = {
  tiers: [
    {
      slug: "",
      name: "",
      price: 0,
      currency: "PKR",
      period: "month",
      inclusions: [],
      recommended: false,
    },
    {
      slug: "",
      name: "",
      price: 0,
      currency: "PKR",
      period: "month",
      inclusions: [],
      recommended: true,
    },
    {
      slug: "",
      name: "",
      price: 0,
      currency: "PKR",
      period: "month",
      inclusions: [],
      recommended: false,
    },
  ],
  trialNote: "",
  priceNote: "Prices are subject to change.",
  verified: false,
};
