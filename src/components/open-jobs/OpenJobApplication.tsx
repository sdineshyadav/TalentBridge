import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "@/components/animation/Reveal";

export default function OpenJobApplication() {
  return (
    <Reveal direction="right" className="lg:sticky lg:top-28">
      <aside className="premium-card premium-orbit-bg rounded-[30px] bg-[#102A43] p-6 text-white shadow-[0_24px_80px_rgba(15,47,74,0.18)]">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black">
          <Mail size={17} className="text-[#6EE7D8]" />
          Submit Application
        </div>

        <h2 className="mt-6 text-3xl font-black">
          Email your application to HR.
        </h2>
        <p className="mt-4 text-sm leading-7 text-white/70">
          Include your resume, contact details, and relevant experience for the
          Information Security Analyst role.
        </p>

        <Link
          href="mailto:HR@talentbridge.com"
          className="premium-sheen premium-depth mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-black text-[#102A43]"
        >
          HR@talentbridge.com
          <ArrowRight size={18} />
        </Link>
      </aside>
    </Reveal>
  );
}
