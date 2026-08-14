export type Coach = {
  slug: string;
  name: string;
  specialisation: string;
  credential: string;
  portrait: string | null;
  bio: string;
};

export type Coaches = {
  list: Coach[];
  verified: boolean;
};

export const coaches: Coaches = {
  list: [],
  verified: false,
};
