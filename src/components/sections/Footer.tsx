"use client";

import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/common/Animations";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "About", href: "/about", comingSoon: true },
    { label: "Careers", href: "/careers", comingSoon: true },
    { label: "Blog", href: "/blog", comingSoon: true },
    { label: "Press", href: "/press", comingSoon: true },
  ],
  Services: [
    { label: "AI Solutions", href: "/services", comingSoon: true },
    { label: "Web Development", href: "/services", comingSoon: true },
    { label: "SaaS Development", href: "/services", comingSoon: true },
    { label: "Automation", href: "/services", comingSoon: true },
  ],
  Resources: [
    { label: "Case Studies", href: "#portfolio", comingSoon: true },
    { label: "Documentation", href: "/documentation", comingSoon: true },
    { label: "Privacy Policy", href: "/privacy-policy", comingSoon: true },
    { label: "Terms of Service", href: "/terms-of-service", comingSoon: true },
  ],
};

const socials = [
  { icon: Twitter, href: "https://x.com/fluxypy", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/fluxypy/posts/?feedView=all", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/people/Fluxypy/61552290568350", label: "Facebook" },
  {icon: Instagram, href: "https://www.instagram.com/fluxypy/", label: "Instagram"},
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <FadeIn>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-2">
                <div className="flex h-15 w-15 items-center justify-center rounded-lg ">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="shrink-0"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight text-foreground">
                  Fluxy<span className="text-primary">py</span>
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Building intelligent digital solutions for startups and businesses.
                AI, Web, Automation, and SaaS — all under one roof.
              </p>
              <div className="mt-6 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {category}
                </h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`text-sm text-muted-foreground transition-colors hover:text-[var(--brand-glow)] ${
                          link.comingSoon ? "pointer-events-none opacity-50" : ""
                        }`}
                      >
                        {link.label} {link.comingSoon && <span>(Coming Soon)</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <Separator className="my-10 bg-border" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Fluxypy. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Designed & built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
