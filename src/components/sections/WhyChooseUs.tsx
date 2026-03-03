"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Animations";
import {
  Rocket,
  Shield,
  Code2,
  Headphones,
  BadgeDollarSign,
} from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Agile workflows and battle-tested processes ensure your project ships on time — every time.",
  },
  {
    icon: Shield,
    title: "Scalable Architecture",
    description:
      "Systems built to handle growth — from your first 100 users to your first million.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description:
      "Next.js, React, Python, Node.js, AWS, Docker — we use the best tools for the job.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "A committed team assigned to your project with transparent communication at every step.",
  },
  {
    icon: BadgeDollarSign,
    title: "Startup-Friendly Pricing",
    description:
      "Flexible engagement models designed for startups and growing businesses.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-secondary py-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why Pluxypy
            </span>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Built Different. Built Better.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We&apos;re not just another dev shop — we&apos;re your long-term technology partner.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {reasons.map((reason, i) => (
            <StaggerItem key={reason.title}>
              <div className="group relative flex gap-5 rounded-2xl border border-border bg-background/60 p-8 min-h-52 transition-all duration-500 hover:border-primary/20 hover:bg-background/90">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                  <reason.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
                {/* Number watermark */}
                <span className="pointer-events-none absolute bottom-4 right-6 text-5xl font-bold text-foreground/[var(--watermark-opacity)]">
                  0{i + 1}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
