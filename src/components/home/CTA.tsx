"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  fadeUp,
  inViewViewport,
  staggerContainer,
} from "@/components/animation/MotionPrimitives";

export default function CTASection() {
  return (
    <section id="pricing" className="scroll-mt-28 bg-white px-5 pt-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inViewViewport}
        className="relative mx-auto max-w-[1510px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#082846] via-[#062A45] to-[#031D33] px-8 py-14 text-white shadow-[0_24px_80px_rgba(15,47,74,0.22)] md:px-14 lg:px-16"
      >
        <motion.div
          animate={{ x: [0, -22, 0], y: [0, 18, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-10 top-16 hidden h-52 w-80 rounded-full bg-blue-400/20 blur-[90px] lg:block"
        />

        <div
          className="animated-dot-field absolute bottom-12 right-12 hidden h-40 w-80 opacity-30 lg:block"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_520px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
          >
            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-4xl font-black leading-tight md:text-5xl"
            >
              Ready to Get Started?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-8 text-white/75"
            >
              Join thousands of companies and candidates who have found success
              with TalentBridge.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#newsletter"
                className="animated-sheen inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#082846] transition hover:-translate-y-1"
              >
                Hire Talent <ArrowRight size={18} />
              </Link>

              <Link
                href="/jobs"
                className="animated-sheen inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Find Jobs
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative hidden min-h-[300px] lg:block">
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 0.8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-56px] right-0"
            >
              <Image
                src="/images/cta-team.png"
                alt="Professional hiring team"
                width={560}
                height={420}
                className="h-[360px] w-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
