"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={62}
            height={62}
            className="shrink-0"
          />
          <span className="font-[var(--font-heading)] text-xl font-bold tracking-tight text-foreground leading-none">
            Fluxy<span className="text-primary">py</span>
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[var(--brand-glow)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button
            asChild
            className="bg-primary text-primary-foreground font-semibold hover:bg-[var(--brand-glow)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-[var(--brand-glow)]"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-4 bg-primary text-primary-foreground font-semibold hover:bg-[var(--brand-glow)]"
            >
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Get Started
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
