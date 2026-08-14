export type FacilityStat = {
  value: string;
  label: string;
};

export type FacilityStats = {
  stats: FacilityStat[];
  verified: boolean;
};

export const facilityStats: FacilityStats = {
  // The floor area is two kanals on the plaza's second floor.
  // The equipment-station count was replaced because no verified station
  // figure exists. 18 hours is derived from the confirmed 06:00–00:00 schedule.
  stats: [
    { value: "10,890", label: "Square Feet" },
    { value: "6", label: "Coaching Staff" },
    { value: "18", label: "Hours Daily" },
  ],
  verified: true,
};
