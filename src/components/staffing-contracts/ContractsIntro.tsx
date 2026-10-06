import Link from "next/link";
import { Award, Landmark } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import AwardCard from "./AwardCard";
import { contractDetails } from "./contractsData";

export default function ContractsIntro() {
  return (
    <PageSection className="bg-[#f8fbff]">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
        <Reveal>
          <div className="premium-card rounded-[32px] border border-[#E4EAF2] bg-white p-8 shadow-[0_20px_70px_rgba(15,47,74,0.08)]">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
              Introduction
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#102A43]">
              Welcome to TalentBridge&apos;s Staffing Solutions
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#667085]">
              At TalentBridge, we pride ourselves on delivering top-tier IT
              staffing services tailored to meet the unique needs of our
              clients. With our recent award from the State of South Carolina,
              and the University of Arizona for IT staffing contingent roles, we
              continue to demonstrate our commitment to excellence and client
              satisfaction.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <AwardCard
                title="State of South Carolina IT Staffing Contract"
                text="We are honored to have been awarded the IT staffing contingent roles contract by the State of South Carolina. This contract underscores our capabilities and trust in providing highly qualified IT professionals to support the state's technology initiatives."
                icon={Landmark}
              />

              <AwardCard
                title="The University of Arizona IT Staffing Contract"
                text="We are honored to have been awarded the IT staffing contingent roles contract by the University of Arizona."
                icon={Award}
              />
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="premium-card premium-orbit-bg rounded-[32px] bg-[#102A43] p-7 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)]">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6EE7D8]">
              Contract Details
            </p>

            <div className="mt-6 space-y-4">
              {contractDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="premium-card premium-depth rounded-2xl border border-white/10 bg-white/[0.08] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-[#6EE7D8]" />
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-white/50">
                        {item.label}
                      </p>
                    </div>

                    <p className="mt-3 text-base font-bold leading-7">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-sm leading-7 text-white/65">
              For more information, visit the{" "}
              <Link href="#" className="font-bold text-[#6EE7D8] underline">
                State of South Carolina Contract Page
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
