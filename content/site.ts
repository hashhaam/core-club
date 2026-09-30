export type PreLaunch = {
  active: boolean;
  foundingSlots: number;
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
  slogan: "Built From The Core",
  positioning:
    "A performance-focused gym in D Ground, Faisalabad, built around strength, conditioning and recovery.",
  url: "https://coreclub.pk",
  nav: [
    { label: "Facilities", href: "/facilities" },
    { label: "Memberships", href: "/#membership" },
    { label: "Coaching", href: "/#coaching" },
    { label: "Women's Hours", href: "/womens-hours" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    {
      platform: "Instagram",
      href: "https://instagram.com/coreclubgym",
      verified: true,
    },
    {
      platform: "Facebook",
      href: "https://facebook.com/coreclubgym",
      verified: true,
    },
  ],
  preLaunch: {
    active: true,
    foundingSlots: 200,
    navCtaLabel: "PRE-REGISTER",
    heroPrimaryLabel: "PRE-REGISTER",
    heroSecondaryLabel: "EXPLORE THE CLUB",
    supportingLine:
      "Founding Member Pre-Booking opens 1 October for the first 200 members.",
  },
};
