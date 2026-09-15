export type Testimonial = {
  slug: string;
  quote: string;
  name: string;
  detail: string;
};

export type Testimonials = {
  list: Testimonial[];
  verified: boolean;
};

export const testimonials: Testimonials = {
  list: [],
  verified: false,
};
