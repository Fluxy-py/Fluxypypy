"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/Animations";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-secondary py-28">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[var(--brand-glow)]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Powerful</span> Together
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Ready to turn your vision into reality? Let&apos;s talk about your next
            project and explore how we can help you grow.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Button
            asChild
            size="lg"
            className="mt-10 h-14 rounded-xl bg-primary px-10 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-[var(--brand-glow)] hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
