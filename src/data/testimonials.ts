export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  era: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Placeholder Name",
    role: "GCF Alumni, Class of 1975",
    quote:
      "GCF shaped my understanding of what it means to be a Christian professional. The friendships and mentorship I received have lasted a lifetime.",
    era: "1970s",
  },
  {
    name: "Placeholder Name",
    role: "GCF Member since 1990",
    quote:
      "Through GCF, I learned that my faith and my career are not separate — they are one integrated calling. That changed everything for me.",
    era: "1990s",
  },
  {
    name: "Placeholder Name",
    role: "iBridge Participant",
    quote:
      "As a young graduate, GCF gave me a community that understood the challenges of living out faith in the real world. I found my tribe.",
    era: "2020s",
  },
];
