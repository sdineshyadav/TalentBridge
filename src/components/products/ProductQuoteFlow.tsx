import { Layers3, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { quoteSteps } from "./productsData";

export default function ProductQuoteFlow() {
  return (
    <PageSection className="bg-[#f8fbff]">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#238A72]">
            Quote Flow
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#102A43] md:text-5xl">
            A procurement experience that feels guided, not generic.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#667085]">
            Users can understand the product ecosystem, choose a partner, and
            move straight into a request path without hunting through a flat
            page.
          </p>
        </Reveal>

        <Reveal direction="right">
          <div className="premium-card premium-orbit-bg rounded-[28px] bg-[#102A43] p-6 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)] md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {quoteSteps.map((step, index) => (
                <div
                  key={step}
                  className="premium-card premium-depth rounded-2xl border border-white/10 bg-white/[0.08] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-white/25">
                      0{index + 1}
                    </span>
                    {index % 2 === 0 ? (
                      <Layers3 className="text-[#6EE7D8]" size={22} />
                    ) : (
                      <Sparkles className="text-[#FFB199]" size={22} />
                    )}
                  </div>
                  <p className="mt-5 text-sm font-bold leading-6">{step}</p>
                </div>
              ))}
            </div>

            <div className="premium-card mt-6 rounded-2xl border border-[#6EE7D8]/20 bg-[#6EE7D8]/10 p-5">
              <p className="flex items-center gap-3 text-sm font-bold">
                <ShieldCheck size={20} className="text-[#6EE7D8]" />
                Partner-backed product sourcing with TalentBridge guidance.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </PageSection>
  );
}
