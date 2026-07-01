export type FaqCategory = "process" | "pricing" | "support";

export type Tag = { label: string };

export type FaqItem = {
  id: string;
  icon: string;
  question: string;
  category: FaqCategory;
  answer: React.ReactNode;
  tags?: Tag[];
  techGrid?: string[];
  bullets?: string[];
  steps?: string[];
  checkmarks?: string[];
};

export type CategoryMeta = {
  id: FaqCategory;
  icon: string;
  label: string;
};

export const categories: CategoryMeta[] = [
  { id: "process",  icon: "terminal",      label: "Process & Tech"  },
  { id: "pricing",  icon: "payments",       label: "Pricing & Legal" },
  { id: "support",  icon: "support_agent",  label: "Support & Launch" },
];

// Raw data — JSX answers are assembled in the page component
export type FaqRaw = {
  id: string;
  icon: string;
  question: string;
  category: FaqCategory;
  answerKey: string; // maps to rendered answer in the page
};

export const faqItems: FaqRaw[] = [
  {
    id: "cost",
    icon: "payments",
    question: "How much does a website cost?",
    category: "pricing",
    answerKey: "cost",
  },
  {
    id: "timeline",
    icon: "schedule",
    question: "How long does it take to build a website?",
    category: "process",
    answerKey: "timeline",
  },
  {
    id: "mobile",
    icon: "smartphone",
    question: "Will my website work on mobile devices?",
    category: "process",
    answerKey: "mobile",
  },
  {
    id: "cms",
    icon: "edit",
    question: "Can I update my website myself?",
    category: "support",
    answerKey: "cms",
  },
  {
    id: "seo",
    icon: "travel_explore",
    question: "Is SEO included?",
    category: "process",
    answerKey: "seo",
  },
  {
    id: "hosting",
    icon: "cloud",
    question: "Do you provide hosting and domain registration?",
    category: "process",
    answerKey: "hosting",
  },
  {
    id: "maintenance",
    icon: "build",
    question: "Do you offer website maintenance?",
    category: "support",
    answerKey: "maintenance",
  },
  {
    id: "revisions",
    icon: "sync",
    question: "Can I request changes after delivery?",
    category: "support",
    answerKey: "revisions",
  },
  {
    id: "remote",
    icon: "language",
    question: "Do you work only with clients in Algeria?",
    category: "process",
    answerKey: "remote",
  },
  {
    id: "start",
    icon: "rocket_launch",
    question: "How do I get started?",
    category: "support",
    answerKey: "start",
  },
  {
    id: "ownership",
    icon: "verified_user",
    question: "Will I own my website?",
    category: "pricing",
    answerKey: "ownership",
  },
  {
    id: "why",
    icon: "star",
    question: "Why choose Quarcode?",
    category: "pricing",
    answerKey: "why",
  },
];