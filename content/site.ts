export type SiteConfig = {
  name: string;
  slogan: string;
  positioning: string;
  url: string;
  nav: Array<{ label: string; href: string }>;
  social: Array<{ platform: string; href: string; verified: boolean }>;
};

export const site: SiteConfig = {
  name: "Core Club",
  slogan: "Built from the Core",
  positioning:
    "Core Club is Faisalabad's premium performance club — designed for people who take training seriously.",
  // TBC: The domain has not been confirmed.
  url: "https://coreclub.pk",
  nav: [
    { label: "Facilities", href: "/facilities" },
    { label: "Memberships", href: "/memberships" },
    { label: "Coaching", href: "/trainers" },
    { label: "Women's Hours", href: "/womens-hours" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { platform: "Instagram", href: "", verified: false },
    { platform: "Facebook", href: "", verified: false },
  ],
};
