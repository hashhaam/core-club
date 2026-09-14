export type SessionType = "mixed" | "womens";

export type HoursSegment = {
  start: string; // 24-hour "HH:MM"
  end: string; // 24-hour "HH:MM"
  type: SessionType;
  label: string; // display label
};

export type Hours = {
  opens: string; // 24-hour "HH:MM"
  closes: string; // 24-hour "HH:MM"
  appliesTo: string; // which days this schedule covers
  dailySegments: HoursSegment[];
  notes: string[];
  verified: boolean;
};

export const hours: Hours = {
  opens: "06:00",
  // "00:00" means midnight at the end of the same day.
  closes: "00:00",
  appliesTo: "Monday – Sunday",
  dailySegments: [
    { start: "06:00", end: "10:00", type: "mixed", label: "General" },
    {
      start: "10:00",
      end: "17:00",
      type: "womens",
      label: "Women only",
    },
    { start: "17:00", end: "00:00", type: "mixed", label: "General" },
  ],
  notes: [
  "Same schedule applies every day, including Friday.",
  "General sessions are open to men and women.",
],
  verified: true,
};
