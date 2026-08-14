export type FacilityStat = {
  value: string;
  label: string;
};

export type FacilityStats = {
  stats: FacilityStat[];
  verified: boolean;
};

export const facilityStats: FacilityStats = {
  stats: [
    { value: "", label: "Floor area" },
    { value: "", label: "Equipment stations" },
    { value: "", label: "Coaching staff" },
  ],
  verified: false,
};
