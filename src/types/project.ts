import type { Timestamp } from 'firebase/firestore';

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: "Signs" | "Vehicle Wraps" | "Large-Format";
  client: string;
  location: string;
  dimensions: string;
  timeline: string;
  challenges: string;
  outcome: string;
  gallery: string[]; 
  tags: string[];
  publishedAt: Timestamp;
};
