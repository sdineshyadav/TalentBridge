import {
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import { nextSteps } from "./requestQuoteData";

export default function RequestQuoteSidebar() {
  return (
    <Reveal direction="right" className="lg:sticky lg:top-28">
      <div className="premium-card premium-orbit-bg rounded-[30px] bg-[#102A43] p-6 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)] md:p-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black">
          <ShieldCheck size={17} className="text-[#6EE7D8]" />
          What happens next
        </div>

        <div className="mt-7 space-y-4">
          {nextSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="premium-card premium-depth rounded-2xl border border-white/10 bg-white/[0.08] p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white text-[#1B63FF]">
                    <Icon size={21} />
                  </div>
                  <span className="text-3xl font-black text-white/20">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-black">{step.title}</h2>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="premium-card mt-6 rounded-2xl border border-[#6EE7D8]/20 bg-[#6EE7D8]/10 p-5">
          <p className="flex items-center gap-3 text-sm font-bold">
            <CheckCircle2 size={20} className="text-[#6EE7D8]" />
            Clear request details help us respond with the right path faster.
          </p>
        </div>
      </div>

      <div className="premium-card premium-depth mt-6 rounded-[26px] border border-[#E4EAF2] bg-white p-6 shadow-[0_18px_50px_rgba(15,47,74,0.08)]">
        <h2 className="text-2xl font-black text-[#102A43]">
          TalentBridge
        </h2>
        <div className="mt-5 space-y-3">
          <a
            href="mailto:hr@talentbridge.com"
            className="flex items-center gap-3 font-bold text-[#238A72]"
          >
            <Mail size={18} />
            hr@talentbridge.com
          </a>
          <a
            href="tel:9876543210"
            className="flex items-center gap-3 font-bold text-[#238A72]"
          >
            <Phone size={18} />
            9876543210
          </a>
        </div>
      </div>
    </Reveal>
  );
}
