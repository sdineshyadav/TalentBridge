"use client";

import { useState, type MouseEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { MagneticCard } from "@/components/animation/MotionPrimitives";

const testimonials = [
  {
    title: "Remarkably smooth process",
    message:
      "The experience was nothing short of exceptional. From start to finish, the entire process was remarkably smooth.",
    name: "Carmen Lopez",
    role: "Recruiter, Tribu",
    avatar: "C",
  },
  {
    title: "Like your own recruiter",
    message:
      "It felt like we'd hired an in-house recruiter. This made my job really easy.",
    name: "Adrian Alfieri",
    role: "Founder & CEO, Verbatim",
    avatar: "A",
  },
  {
    title: "Your time back",
    message:
      "Hire With TalentBridge saved me a lot of time handling posting, sourcing, screening, and initial interviews.",
    name: "Joshua Thompson",
    role: "Partner and COO, Kordis",
    avatar: "J",
  },
  {
    title: "Excellent candidate quality",
    message:
      "The candidates were highly qualified and matched exactly what our team needed.",
    name: "Rahul Sharma",
    role: "Founder, CloudWorks",
    avatar: "R",
  },
  {
    title: "Fast hiring support",
    message:
      "We reduced our hiring timeline and filled key roles much faster than expected.",
    name: "Jennifer Martinez",
    role: "HR Director, TechNova Inc.",
    avatar: "J",
  },
  {
    title: "Perfect career match",
    message:
      "They helped me find a role that perfectly matched my skills and career goals.",
    name: "Sarah Johnson",
    role: "Product Designer",
    avatar: "S",
  },
];

const testimonialLayouts = [
  "xl:col-span-2",
  "xl:col-span-2",
  "xl:col-span-2",
  "md:col-span-1 xl:col-span-3",
  "md:col-span-1 xl:col-span-3",
];

const testimonialAccents = [
  "bg-[#1B63FF]",
  "bg-[#14B8A6]",
  "bg-[#FF4E1F]",
  "bg-[#8B5CF6]",
  "bg-[#F59E0B]",
];

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonialViewport = {
  once: true,
  amount: 0.18,
};

const testimonialStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.06,
    },
  },
};

const testimonialReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const testimonialCardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.54,
      ease: smoothEase,
    },
  },
};

export default function Testimonials() {
  const [featuredTestimonial, ...bentoTestimonials] = testimonials;

  const [cursorLabel, setCursorLabel] = useState({
    name: "",
    x: 0,
    y: 0,
    visible: false,
  });

  const handleCursorMove = (
    e: MouseEvent<HTMLDivElement>,
    name: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const labelWidth = 140;
    const labelHeight = 34;

    const x = Math.min(
      Math.max(e.clientX - rect.left + 12, 10),
      rect.width - labelWidth
    );

    const y = Math.min(
      Math.max(e.clientY - rect.top - 10, 10),
      rect.height - labelHeight
    );

    setCursorLabel({
      name,
      x,
      y,
      visible: true,
    });
  };

  const hideCursorLabel = () => {
    setCursorLabel((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  return (
    <section id="stories" className="scroll-mt-28 bg-white px-5 py-24">
      <div className="mx-auto max-w-[1510px]">
        <motion.div
          variants={testimonialStagger}
          initial="hidden"
          whileInView="show"
          viewport={testimonialViewport}
          className="grid gap-8 border-b border-[#E4E7EC] pb-12 lg:grid-cols-2"
        >
          <motion.h2
            variants={testimonialReveal}
            className="max-w-2xl text-4xl font-medium leading-tight text-black md:text-5xl"
          >
            What Clients Say About Hire With TalentBridge
          </motion.h2>

          <motion.p
            variants={testimonialReveal}
            className="max-w-xl text-lg leading-8 text-[#667085]"
          >
            Client feedback consistently highlights what sets TalentBridge
            apart as a leading recruitment company across these key areas.
          </motion.p>
        </motion.div>

        <motion.div
          variants={testimonialStagger}
          initial="hidden"
          whileInView="show"
          viewport={testimonialViewport}
          className="mt-14 grid auto-rows-[minmax(220px,auto)] gap-5 md:grid-cols-2 xl:grid-cols-6"
        >
          <MagneticCard
            variants={testimonialCardReveal}
            whileHover={{ y: -5, scale: 1.006 }}
            glow
            onMouseMove={(e) => handleCursorMove(e, "Client Score")}
            onMouseLeave={hideCursorLabel}
            className="group relative flex min-h-[360px] overflow-hidden rounded-lg border border-[#12324F]/10 bg-[#12324F] p-7 text-white shadow-[0_18px_45px_rgba(18,50,79,0.16)] md:col-span-2 xl:col-span-2 xl:row-span-2"
          >
            <CursorNameLabel cursorLabel={cursorLabel} name="Client Score" />

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF4E1F] via-[#38BDF8] to-[#14B8A6]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-white/70">
                    Client score
                  </p>
                  <p className="mt-5 text-7xl font-black leading-none md:text-8xl">
                    4.9
                  </p>
                </div>
              </div>

              <div>
                <div
                  className="flex gap-1 text-[#FFB199]"
                  aria-label="Five star rating"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.82 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={testimonialViewport}
                      transition={{
                        delay: 0.18 + i * 0.05,
                        duration: 0.28,
                        ease: "easeInOut",
                      }}
                    >
                      <Star size={25} fill="currentColor" aria-hidden="true" />
                    </motion.span>
                  ))}
                </div>

                <p className="mt-6 max-w-xs text-xl leading-8 text-white">
                  Trusted for fast hiring support, sharp screening, and
                  consistent candidate quality.
                </p>
              </div>
            </div>
          </MagneticCard>

          <MagneticCard
            variants={testimonialCardReveal}
            whileHover={{ y: -5, scale: 1.006 }}
            glow
            onMouseMove={(e) =>
              handleCursorMove(e, featuredTestimonial.name)
            }
            onMouseLeave={hideCursorLabel}
            className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-lg border border-[#E4E7EC] bg-[#FFF8F3] p-7 shadow-[0_12px_35px_rgba(15,47,74,0.06)] md:col-span-2 md:p-9 xl:col-span-4 xl:row-span-2"
          >
            <CursorNameLabel
              cursorLabel={cursorLabel}
              name={featuredTestimonial.name}
            />

            <div>
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[#FF4E1F]">
                Featured story
                <span className="h-px flex-1 bg-[#FFD8C7]" />
              </div>

              <h3 className="mt-8 max-w-3xl text-3xl font-medium leading-tight text-[#12324F] md:text-5xl">
                {featuredTestimonial.title}
              </h3>

              <p className="mt-8 max-w-4xl text-xl leading-9 text-black md:text-2xl md:leading-10">
                &ldquo;{featuredTestimonial.message}&rdquo;
              </p>
            </div>

            <TestimonialAuthor
              avatar={featuredTestimonial.avatar}
              name={featuredTestimonial.name}
              role={featuredTestimonial.role}
            />
          </MagneticCard>

          {bentoTestimonials.map((item, index) => (
            <MagneticCard
              key={item.name}
              variants={testimonialCardReveal}
              whileHover={{ y: -5, scale: 1.006 }}
              glow
              onMouseMove={(e) => handleCursorMove(e, item.name)}
              onMouseLeave={hideCursorLabel}
              className={[
                "group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-lg border border-[#E4E7EC] bg-white p-6 shadow-[0_12px_35px_rgba(15,47,74,0.06)] transition hover:shadow-[0_24px_60px_rgba(15,47,74,0.12)]",
                testimonialLayouts[index],
              ].join(" ")}
            >
              <CursorNameLabel cursorLabel={cursorLabel} name={item.name} />

              <div>
                <div className="mb-7 flex items-center justify-between gap-5">
                  <h3 className="text-xl font-black text-[#12324F]">
                    {item.title}
                  </h3>
                  <span
                    className={`h-3 w-3 shrink-0 rounded-full ${testimonialAccents[index]}`}
                    aria-hidden="true"
                  />
                </div>

                <p className="text-base leading-8 text-black md:text-lg">
                  &ldquo;{item.message}&rdquo;
                </p>
              </div>

              <TestimonialAuthor
                avatar={item.avatar}
                name={item.name}
                role={item.role}
              />
            </MagneticCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CursorNameLabel({
  cursorLabel,
  name,
}: {
  cursorLabel: {
    name: string;
    x: number;
    y: number;
    visible: boolean;
  };
  name: string;
}) {
  if (cursorLabel.name !== name) return null;

  return (
    <motion.div
      animate={{
        x: cursorLabel.x,
        y: cursorLabel.y,
        opacity: cursorLabel.visible ? 1 : 0,
        scale: cursorLabel.visible ? 1 : 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 30,
      }}
      className="pointer-events-none absolute left-0 top-0 z-50 hidden max-w-[140px] truncate rounded-md bg-[#1B63FF] px-3 py-1.5 text-xs font-bold text-white shadow-lg md:block"
    >
      {name}
    </motion.div>
  );
}

function TestimonialAuthor({
  avatar,
  name,
  role,
}: {
  avatar: string;
  name: string;
  role: string;
}) {
  return (
    <div className="mt-10 flex items-center gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F2D9BC] font-bold text-black">
        {avatar}
      </div>

      <div>
        <h4 className="font-bold text-black">{name}</h4>
        <p className="text-sm leading-6 text-[#667085]">{role}</p>
      </div>
    </div>
  );
}