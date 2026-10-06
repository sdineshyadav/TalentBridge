import { ShieldCheck } from "lucide-react";
import PageSection from "@/components/ui/PageSection";
import SubpageHero from "@/components/ui/SubpageHero";
import OpenJobApplication from "./OpenJobApplication";
import OpenJobDuties from "./OpenJobDuties";
import OpenJobFacts from "./OpenJobFacts";
import OpenJobLocation from "./OpenJobLocation";

export default function OpenJobsPage() {
  return (
    <main className="bg-white">
      <SubpageHero
        label="Open job notice"
        title="Information Security Analyst"
        description="A focused, mobile-friendly job posting notice with the key role details, duties, location, education requirement, and application path clearly organized."
        icon={ShieldCheck}
        actions={[
          { label: "Apply by email", href: "mailto:HR@talentbridge.com" },
          { label: "Browse jobs", href: "/jobs", variant: "secondary" },
        ]}
      />

      <PageSection className="pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <OpenJobFacts />
            <OpenJobDuties />
            <OpenJobLocation />
          </div>

          <OpenJobApplication />
        </div>
      </PageSection>
    </main>
  );
}
