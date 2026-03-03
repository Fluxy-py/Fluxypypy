/**
 * Site-wide metadata and SEO configuration
 */

export const siteConfig = {
  name: "Fluxypy",
  description: "Fluxypy – Your application description",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/your-org/fluxypy",
  },
  creator: "Your Name",
} as const;
