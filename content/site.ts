export type PreLaunch = {
  active: boolean;
  openingDate: string; // ISO date
  openingDateLabel: string; // human-readable, for display
  discountPercent: number;
  discountScope: string; // what the discount applies to
  navCtaLabel: string;
  heroPrimaryLabel: string;
  heroSecondaryLabel: string;
  supportingLine: string;
};

export type SiteConfig = {
  name: string;
  slogan: string;
  positioning: string;
  url: string;
  nav: Array<{ label: string; href: string }>;
  social: Array<{ platform: string; href: string; verified: boolean }>;
  preLaunch: PreLaunch;
};

export const site: SiteConfig = {
  name: "Core Club",
  slogan: "Built from the Core",
  positioning:
    "Core Club is Faisalabad's premium performance club — designed for people who take training seriously.",
  url: "https://coreclub.pk",
  nav: [
    { label: "Facilities", href: "/facilities" },
    { label: "Memberships", href: "/memberships" },
    { label: "Coaching", href: "/trainers" },
    { label: "Women's Hours", href: "/womens-hours" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    {
      platform: "Instagram",
      href: "https://instagram.com/coreclubgym",
      verified: true,
    },
    { platform: "Facebook", href: "", verified: false },
  ],
  preLaunch: {
    active: true,
    openingDate: "2026-09-28",
    openingDateLabel: "28 September 2026",
    discountPercent: 25,
    discountScope: "first month",
    navCtaLabel: "PRE-REGISTER",
    heroPrimaryLabel: "PRE-REGISTER",
    heroSecondaryLabel: "VIEW MEMBERSHIPS",
    supportingLine:
      "25% off your first month for members who register before 28 September.",
  },
};
