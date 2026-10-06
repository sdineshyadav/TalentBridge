"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  Headphones,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Partners",
    text: "Industry-leading technology providers",
  },
  {
    icon: Award,
    title: "Proven Solutions",
    text: "Enterprise-grade reliability",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    text: "Dedicated support when you need it",
  },
];

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] px-5 pb-16 pt-32 sm:px-6 md:pt-36 lg:min-h-[780px] lg:px-8 lg:pb-20 lg:pt-40">
      <HeroBackground />

      <div className="relative z-10 mx-auto grid max-w-[1510px] items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[690px]"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C8DBFA] bg-[#EAF2FF] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#1B63FF] shadow-sm sm:tracking-[0.2em]">
            <PackageCheck size={16} />
            Authorized technology partner
          </div>

          <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#102A43] sm:text-5xl md:text-6xl lg:text-[68px]">
            Powering businesses with leading technology and{" "}
           trusted solutions. 
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#53657A] sm:text-lg">
            From cybersecurity and networking to workplace collaboration and
            cloud infrastructure, TalentBridge delivers trusted technology
            solutions from leading global brands.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#partners"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#102A43] px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(27,99,255,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#102A43]"
            >
              Explore Products
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/request-quote"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-[#1B63FF] bg-white px-7 py-4 text-sm font-black text-[#102A43] shadow-[0_12px_32px_rgba(16,42,67,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#1B63FF] hover:text-[#1B63FF]"
            >
              Request a Quote
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#53657A]">
              <CheckCircle2 size={18} className="text-[#1B63FF]" />
              Approved partner relationships
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#53657A]">
              <CheckCircle2 size={18} className="text-[#1B63FF]" />
              Enterprise-ready solutions
            </div>
          </div>

          <div className="mt-10 grid gap-4 rounded-[24px] border border-[#D7E4F5] bg-white/75 p-5 shadow-[0_20px_60px_rgba(16,42,67,0.08)] backdrop-blur-xl sm:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-3 border-b border-[#E5ECF5] pb-4 last:border-b-0 last:pb-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4 sm:last:border-r-0"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#EAF2FF] text-[#1B63FF]">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-black text-[#102A43]">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#667085]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            delay: 0.12,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[840px]"
        >
          <div className="absolute -inset-6 rounded-full bg-[#1B63FF]/15 blur-[100px]" />

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-[32px] border border-[#D7E4F5] bg-white shadow-[0_35px_100px_rgba(16,42,67,0.18)]"
          >
            <div className="relative aspect-[16/11] w-full">
              <Image
                src="/images/products-hero.png"
                alt="TalentBridge enterprise technology ecosystem"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 840px"
                className="object-cover"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-[#1B63FF]/5" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 left-4 hidden items-center gap-3 rounded-2xl border border-[#D7E4F5] bg-white px-5 py-4 shadow-[0_18px_50px_rgba(16,42,67,0.14)] sm:flex"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#EAF2FF] text-[#1B63FF]">
              <ShieldCheck size={20} />
            </div>

            <div>
              <p className="text-sm font-black text-[#102A43]">
                Enterprise Security
              </p>
              <p className="text-xs text-[#667085]">
                Trusted infrastructure solutions
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(27,99,255,0.07) 1px, transparent 1px)",
          backgroundSize: "84px 100%",
        }}
      />

      <div className="absolute -left-40 top-[18%] h-[430px] w-[430px] rounded-full bg-[#DCEBFF] blur-[130px]" />

      <div className="absolute -right-40 top-[6%] h-[580px] w-[580px] rounded-full bg-[#CFE1FF] blur-[160px]" />

      <div className="absolute bottom-[-220px] left-[34%] h-[480px] w-[480px] rounded-full bg-[#DCEEF8] blur-[150px]" />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}