import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroMetric = {
  value: string;
  label: string;
};

type JobsHero = {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  actions: HeroAction[];
  metrics: HeroMetric[];
};

export const jobsHero: JobsHero = {
  label: "Career opportunities",
  title: "Explore technology roles matched with better hiring support",
  description:
    "Browse featured roles, search by category, and connect with opportunities backed by TalentBridge's people-first staffing process.",
  icon: BriefcaseBusiness,
  actions: [
    { label: "Search jobs", href: "#jobs" },
    { label: "Contact team", href: "/contact", variant: "secondary" },
  ],
  metrics: [
    { value: "8", label: "Featured roles" },
    { value: "Remote", label: "Hybrid options" },
    { value: "Fast", label: "Recruiter support" },
  ],
};
