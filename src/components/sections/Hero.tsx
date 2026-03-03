"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/common/Animations";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Grid + radial glow bg */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Floating orb decoration */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[var(--brand-glow)]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <FadeIn delay={0.1}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Sparkles size={14} />
            <span>AI-Powered Digital Solutions</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-[var(--font-heading)] text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            We Build{" "}
            <span className="text-gradient">Intelligent</span>
            <br />
            Digital Solutions
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            From AI-driven platforms to scalable web apps, automation systems,
            and SaaS products — we transform ideas into high-performance
            digital experiences that drive real business growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-[var(--brand-glow)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              <a href="#contact">
                Book a Free Consultation
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-xl border-secondary bg-transparent px-8 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-[var(--brand-glow)]"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </FadeIn>

        {/* Stats bar */}
        <FadeIn delay={0.65}>
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "5+", label: "Projects Delivered" },
              { value: "3+", label: "Happy Clients" },
              { value: "1+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary glow-text sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
