import { CheckCircle2, ShieldCheck } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { expertise } from "./contractsData";

export default function ContractExpertise() {
  return (
    <PageSection className="bg-[#f8fbff]">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[420px_1fr] lg:items-center">
        <Reveal>
          <div className="premium-card premium-orbit-bg rounded-[32px] bg-[#102A43] p-8 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)]">
            <ShieldCheck size={44} className="text-[#6EE7D8]" />

            <h2 className="mt-6 text-3xl font-black">
              Why Choose TalentBridge?
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              With years of experience in IT staffing, we help organizations
              access the right talent faster, with flexible staffing models and
              strong industry knowledge.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="premium-card premium-depth rounded-[28px] border border-[#E4EAF2] bg-white p-7 shadow-[0_18px_50px_rgba(15,47,74,0.08)]">
                <CheckCircle2 className="text-[#238A72]" size={24} />

                <p className="mt-5 text-base leading-7 text-[#667085]">
                  <strong className="text-[#102A43]">
                    {item.split(":")[0]}:
                  </strong>
                  {item.split(":").slice(1).join(":")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
