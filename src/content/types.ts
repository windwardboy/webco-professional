export type Step = {
  title: string;
  text: string;
};

export type FaqTopic = "general" | "licence" | "medical" | "pricing" | "provider";

export type Faq = {
  id: string;
  question: string;
  answer: string;
  topics: readonly FaqTopic[];
  courseId?: string;
  locationId?: string;
  home?: boolean;
  overview?: boolean;
};

export type ContentImage = {
  src: string;
  webp?: string;
  avif?: string;
  alt: string;
  width: number;
  height: number;
};
