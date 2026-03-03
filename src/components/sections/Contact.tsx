"use client";

import { useState, FormEvent } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import { FadeIn } from "@/components/common/Animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending your message…");

    try {
      // Save to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // Send emails via API
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Email delivery failed");

      toast.success("Message sent! We'll be in touch within 24 hours.", );

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("Contact submission error:", err);
      toast.error("Something went wrong. Please try again.", {
        id: toastId,
        description: "If the issue persists, email us at admin@fluxypy.com.",
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-background py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get In Touch
            </span>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Fill out the form and our team will get back to you within 24
              hours.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-secondary/40 p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Contact Information
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach out directly or fill out the form — we&apos;d love to hear
                  from you.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">
                        admin@fluxypy.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium text-foreground">
                        +91 8957412046
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium text-foreground">
                        Jagat Farm, Greater Noida, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border bg-secondary/40 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="border-border bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="border-border bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="border-border bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Project Details
                </label>
                <Textarea
                  required
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, timeline, and budget..."
                  className="border-border bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-[var(--brand-glow)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] disabled:opacity-60"
              >
                {submitted ? (
                  "Message Sent! ✓"
                ) : loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
