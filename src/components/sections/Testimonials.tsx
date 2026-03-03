"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/common/Animations";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jeet Rawat",
    role: "Founder, Jeet Library",
    text: "They took our idea for an AI-driven content platform and turned it into a reality. The end product exceeded our expectations in every way — from design to performance. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sunil Patel",
    role: "CEO, Gyanshakti",
    text: "The automation system they built for us has been a game-changer. It replaced multiple manual processes, saving us hundreds of hours each month. The team was communicative, responsive, and truly cared about our success.",
    rating: 5,
  },
  // {
  //   name: "Amira Patel",
  //   role: "CTO, HealthBridge",
  //   text: "The HIPAA-compliant portal they built is rock solid. Their attention to security, performance, and user experience was impressive. We've already engaged them for Phase 2.",
  //   rating: 5,
  // },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-background py-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Testimonials
            </span>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer
          className="mt-16 grid gap-6 md:grid-cols-3"
          staggerDelay={0.12}
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/40 p-8 transition-all duration-500 hover:border-primary/20 hover:bg-secondary/60">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
