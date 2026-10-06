import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animation/Reveal";

export default function ContractsHero() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] px-5 pb-24 pt-[150px]">
      <div className="relative z-10 mx-auto grid max-w-[1510px] items-center gap-14 lg:grid-cols-[1fr_520px]">
        <Reveal>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#2F7D32]">
              TalentBridge&apos;s Current Staffing Contracts
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-[#102A43] md:text-6xl">
              Government & University IT Staffing Solutions
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#667085]">
              TalentBridge delivers top-tier IT staffing services through
              awarded public-sector contracts, trusted delivery support, and a
              highly qualified technology talent network.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-quote"
                className="premium-sheen premium-depth inline-flex items-center justify-center gap-3 rounded-xl bg-[#102A43] px-8 py-4 font-bold text-white shadow-xl shadow-blue-200"
              >
                Request Talent
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="premium-sheen premium-depth inline-flex items-center justify-center gap-3 rounded-xl border border-[#D8C7A8] bg-white px-8 py-4 font-bold text-[#102A43]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="premium-card premium-depth relative overflow-hidden rounded-[34px] border border-[#E4EAF2] bg-white p-3 shadow-[0_30px_90px_rgba(15,47,74,0.14)]">
            <div className="relative h-[360px] overflow-hidden rounded-[26px]">
              <Image
                src="/images/contracts/staffing-contract.jpg"
                alt="Staffing contract"
                fill
                priority
                sizes="(min-width: 1024px) 520px, calc(100vw - 40px)"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
