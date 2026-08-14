export type HoursEntry = {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
};

export type Hours = {
  general: HoursEntry[];
  womens: HoursEntry[];
  notes: string[];
  verified: boolean;
};

const placeholderWeek: HoursEntry[] = [
  { day: "Monday", open: "00:00", close: "00:00" },
  { day: "Tuesday", open: "00:00", close: "00:00" },
  { day: "Wednesday", open: "00:00", close: "00:00" },
  { day: "Thursday", open: "00:00", close: "00:00" },
  { day: "Friday", open: "00:00", close: "00:00" },
  { day: "Saturday", open: "00:00", close: "00:00" },
  { day: "Sunday", open: "00:00", close: "00:00" },
];

export const hours: Hours = {
  general: placeholderWeek.map((entry) => ({ ...entry })),
  womens: placeholderWeek.map((entry) => ({ ...entry })),
  notes: [],
  verified: false,
};
