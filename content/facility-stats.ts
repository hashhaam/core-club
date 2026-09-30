export type FacilityStat = {
  value: string;
  label: string;
};

export type FacilityStats = {
  stats: FacilityStat[];
  verified: boolean;
};

export const facilityStats: FacilityStats = {
  // The floor area is two kanals (10,890 sq ft) on the plaza's second floor.
  // The equipment-station count was replaced because no verified station
  // figure exists. 19 hours is derived from the confirmed 06:00–01:00 schedule.
  stats: [
    { value: "2", label: "Kanals" },
    { value: "10", label: "Coaching Staff" },
    { value: "19", label: "Hours Daily" },
    { value: "7", label: "Days Each Week" },
  ],
  verified: true,
};
