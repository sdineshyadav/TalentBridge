import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";

export default function ContractsCta() {
  return (
    <PageSection>
      <Reveal>
        <div className="premium-card premium-orbit-bg overflow-hidden rounded-[34px] bg-gradient-to-br from-[#102A43] to-[#071F36] p-8 text-white shadow-[0_30px_90px_rgba(15,47,74,0.2)] md:p-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
              <Handshake size={16} />
              Partner with Us
            </div>

            <h2 className="text-3xl font-black md:text-5xl">
              Ready to find the right IT talent?
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Ready to find the right IT talent for your organization? Partner
              with TalentBridge today and experience the difference of
              working with industry experts.
            </p>
          </div>

          <Link
            href="/contact"
            className="premium-sheen premium-depth mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#102A43] lg:mt-0"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </PageSection>
  );
}
