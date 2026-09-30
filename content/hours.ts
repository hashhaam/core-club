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
  // The evening segment closes at 01:00 on the following calendar day.
  closes: "01:00",
  appliesTo: "Monday – Sunday",
  dailySegments: [
    {
      start: "06:00",
      end: "10:00",
      type: "mixed",
      label: "Co-Timings",
    },
    {
      start: "10:00",
      end: "17:00",
      type: "womens",
      label: "Women Only",
    },
    {
      start: "17:00",
      end: "01:00",
      type: "mixed",
      label: "Co-Timings",
    },
  ],
  notes: [
  "Same schedule applies every day, including Friday.",
  "Co-Timings are open to men and women.",
],
  verified: true,
};
