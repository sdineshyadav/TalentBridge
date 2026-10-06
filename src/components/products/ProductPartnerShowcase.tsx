"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";
import { products } from "./productsData";

const logoPositions = [
  { top: "17%", left: "18%" },
  { top: "16%", left: "47%" },
  { top: "27%", left: "72%" },
  { top: "49%", left: "29%" },
  { top: "46%", left: "62%" },
  { top: "70%", left: "46%" },
];

export default function ProductPartnerShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const activeProduct = products[activeIndex];

  const handlePartnerClick = (index: number) => {
    setActiveIndex(index);
    setExpanded(false);
  };

  return (
    <PageSection className="bg-white">
      <div className="mx-auto max-w-[1280px]">
        <p className="mb-10 text-center text-xs font-black uppercase tracking-[0.22em] text-[#102A43] md:mb-14 md:text-sm md:tracking-[0.28em]">
          TalentBridge Technology Stack as an Authorized Partner
        </p>

        <Reveal>
          <motion.div
            layout
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8"
          >
            <motion.div
              layout
              className="relative min-h-[430px] overflow-hidden rounded-[32px] border border-[#D8E7F8] bg-white-25 shadow-[0_24px_80px_rgba(27,99,255,0.08)] lg:min-h-[620px]"
            >
              <div className="absolute inset-0 opacity-70">
                <div className="absolute left-0 top-[28%] h-px w-full bg-white" />
                <div className="absolute left-0 top-[70%] h-px w-full bg-white" />
                <div className="absolute left-[22%] top-0 h-full w-px bg-white" />
                <div className="absolute left-[58%] top-0 h-full w-px bg-white" />
              </div>

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 760 620"
                fill="none"
              >
                <circle
                  cx="380"
                  cy="310"
                  r="145"
                  stroke="white"
                  strokeOpacity="0.8"
                />
                <circle
                  cx="380"
                  cy="310"
                  r="190"
                  stroke="white"
                  strokeOpacity="0.55"
                />
                <path
                  d="M120 190 C230 90 320 130 410 205 C500 280 570 240 650 155"
                  stroke="white"
                  strokeOpacity="0.65"
                />
                <path
                  d="M90 385 C215 315 315 425 430 340 C530 265 585 330 670 285"
                  stroke="white"
                  strokeOpacity="0.5"
                />
              </svg>

              {products.map((product, index) => {
                const isActive = activeIndex === index;
                const position = logoPositions[index % logoPositions.length];

                return (
                  <motion.button
                    key={product.partner}
                    type="button"
                    onClick={() => handlePartnerClick(index)}
                    whileHover={{ scale: 1.08, y: -6 }}
                    whileTap={{ scale: 0.96 }}
                    animate={{
                      y: isActive ? [-4, -12, -4] : [0, -8, 0],
                      scale: isActive ? 1.08 : 1,
                    }}
                    transition={{
                      y: {
                        duration: 3 + index * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                      },
                    }}
                    className={[
                      "absolute z-10 flex items-center justify-center rounded-2xl border bg-white",
                      "h-[64px] w-[104px] p-3 md:h-[82px] md:w-[132px] md:p-4",
                      "shadow-[0_18px_45px_rgba(15,47,74,0.10)] transition",
                      isActive
                        ? "border-[#1B63FF] shadow-[0_24px_70px_rgba(27,99,255,0.20)]"
                        : "border-[#DDE8F3] hover:border-[#1B63FF]",
                    ].join(" ")}
                    style={{
                      top: position.top,
                      left: position.left,
                    }}
                    aria-label={`Show ${product.partner}`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={product.image}
                        alt={`${product.partner} logo`}
                        fill
                        sizes="132px"
                        className="object-contain"
                      />
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            <motion.div
              layout
              className="relative overflow-hidden rounded-[32px] border border-[#D8E7F8] bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF6FF] p-6 text-[#102A43] shadow-[0_24px_80px_rgba(27,99,255,0.08)] md:p-8 lg:min-h-[620px] lg:p-10"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#EAF6FF] blur-[80px]" />
                <div className="absolute bottom-[-130px] left-[-130px] h-80 w-80 rounded-full bg-[#DCEBFF] blur-[80px]" />
              </div>

              <div className="relative z-10 flex h-full flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct.partner}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex h-full flex-col"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#102A43] md:text-sm md:tracking-[0.28em]">
                      Authorized Partner
                    </p>

                    <div className="mt-6 flex h-[88px] w-full max-w-[280px] items-center rounded-2xl border border-[#D8E7F8] bg-white p-4 shadow-sm md:mt-8 md:h-[100px] md:p-5">
                      <div className="relative h-full w-full">
                        <Image
                          src={activeProduct.image}
                          alt={`${activeProduct.partner} logo`}
                          fill
                          sizes="280px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <h3 className="mt-8 max-w-xl text-3xl font-black leading-tight text-[#102A43] md:text-5xl">
                      {activeProduct.title}
                    </h3>

                    <motion.p
                      layout
                      className={[
                        "mt-5 max-w-xl text-base leading-8 text-[#5F6F89] md:mt-6 md:text-lg",
                        expanded ? "" : "line-clamp-4",
                      ].join(" ")}
                    >
                      {activeProduct.copy}
                    </motion.p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <button
                        type="button"
                        onClick={() => setExpanded((prev) => !prev)}
                        className="inline-flex w-fit rounded-full border border-[#BFD6FF] bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#102A43] shadow-sm transition hover:-translate-y-0.5 hover:border-[#1B63FF] hover:text-[#1B63FF] md:text-sm"
                      >
                        {expanded ? "View Less" : "View More"}
                      </button>

                      <Link
                        href="/request-quote"
                        className="inline-flex w-fit items-center gap-3 rounded-full bg-[#102A43] px-7 py-3.5 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(16,42,67,0.22)] transition hover:-translate-y-1 hover:bg-[#1B63FF] md:px-8 md:py-4 md:text-sm md:tracking-[0.22em]"
                      >
                        Request For Quote
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </PageSection>
  );
}