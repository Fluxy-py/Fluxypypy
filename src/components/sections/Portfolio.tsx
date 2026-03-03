"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Animations";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time business intelligence platform with ML-driven insights and predictive forecasting for a fintech startup.",
    tags: ["Next.js", "Python", "TensorFlow", "AWS"],
    category: "AI / SaaS",
  },
  {
    title: "E-Commerce Marketplace",
    description:
      "Multi-vendor marketplace with real-time inventory, payments, and a custom CMS — handling 10K+ daily orders.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Development",
  },
  {
    title: "Workflow Automation Platform",
    description:
      "Custom automation engine that replaced 12 manual processes, saving the client 200+ hours per month.",
    tags: ["Python", "FastAPI", "Docker", "Redis"],
    category: "Automation",
  },
  {
    title: "Healthcare SaaS Portal",
    description:
      "HIPAA-compliant patient management system with telehealth, scheduling, and electronic health records.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Azure"],
    category: "SaaS / Health",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-background py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Work
            </span>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Case Studies & Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A glimpse at the impactful solutions we&apos;ve delivered for ambitious
              teams worldwide.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2"
          staggerDelay={0.12}
        >
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/40 p-8 transition-all duration-500 hover:border-primary/20 hover:bg-secondary/70 hover:shadow-[0_0_50px_rgba(34,211,238,0.06)]">
                {/* Top line accent */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-primary to-[var(--brand-glow)] transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--brand-glow)]"
                  />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full border-cyan-400 border-2 bg-background/80 text-xs text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
