"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Animations";
import {
  Brain,
  Globe,
  Layers,
  Zap,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Custom AI/ML models, intelligent chatbots, predictive analytics, and NLP solutions that automate decisions and accelerate growth.",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description:
      "Full-stack web and mobile applications built with modern frameworks — fast, responsive, and designed to scale.",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development from MVP to launch — multi-tenant architectures, billing, dashboards, and APIs.",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Streamline operations with intelligent workflow automation, CRM integrations, and custom backend systems.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Research-driven interface design that balances aesthetics with usability — wireframes, prototypes, and design systems.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-background py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              What We Do
            </span>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Services That Drive Results
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We combine cutting-edge technology with proven methodologies to
              deliver solutions that matter.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-secondary/80 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                {/* Glow on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-[60px] transition-all duration-500 group-hover:bg-primary/15" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    <service.icon size={28} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
