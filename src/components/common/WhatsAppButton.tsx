"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "918957412046"; // country code + number, no +
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Fluxypy! I'd like to discuss a project with you."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] animate-float"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.635 4.64 1.84 6.653L2.667 29.333l6.88-1.8A13.267 13.267 0 0 0 16.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 24.267a10.88 10.88 0 0 1-5.547-1.52l-.4-.24-4.08 1.067 1.093-3.973-.267-.413A10.867 10.867 0 1 1 16.003 26.934zm5.96-8.147c-.32-.16-1.907-.947-2.2-1.053-.293-.107-.507-.16-.72.16-.213.32-.827 1.053-.987 1.267-.16.213-.32.24-.64.08-.32-.16-1.36-.5-2.587-1.6-.96-.853-1.6-1.907-1.787-2.227-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.253-.613-.52-.533-.72-.547h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.453 4.827.76.333 1.36.533 1.827.68.76.24 1.453.2 2 .12.613-.093 1.907-.773 2.173-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </Link>
  );
}
