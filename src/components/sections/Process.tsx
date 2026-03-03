"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Animations";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Deep-dive into your goals, users, and market landscape.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Wireframes, prototypes, and pixel-perfect UI/UX design.",
  },
  {
    icon: Code2,
    title: "Develop",
    description: "Clean, scalable code with CI/CD and automated testing.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Launch on robust cloud infrastructure with zero downtime.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance, monitoring, and feature iterations.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-secondary py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              How We Work
            </span>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Our Proven Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A structured, transparent workflow that takes your project from
              concept to launch — and beyond.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="relative mt-20" staggerDelay={0.15}>
          {/* Connector line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div
                  className={`relative flex flex-col items-center gap-6 lg:flex-row lg:gap-16 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } ${i > 0 ? "lg:mt-0" : ""}`}
                  style={{ marginTop: i > 0 ? "3rem" : 0 }}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 text-center ${
                      i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Circle node */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-background transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                    <step.icon size={24} className="text-primary" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden flex-1 lg:block" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
