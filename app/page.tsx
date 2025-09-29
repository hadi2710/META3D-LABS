import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://meta3dlabs.com/#services",
    name: "Technology Services",
    description: "3D Printing, Web Development, and PCB Design services for businesses and individuals",
    url: "https://meta3dlabs.com/#services",
    mainEntity: {
      "@type": "Service",
      name: "Multi-Service Technology Solutions",
      description: "Professional 3D printing, web development, and PCB design services",
      provider: {
        "@type": "Organization",
        name: "Meta 3D Labs",
      },
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://meta3dlabs.com/",
    name: "Meta 3D Labs | Code & Creativity, Layer by Layer",
    description:
      "Multi-service technology company combining 3D printing, web development, and PCB design. From prototypes to full-stack solutions - we turn ideas into reality.",
    url: "https://meta3dlabs.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Meta 3D Labs",
      url: "https://meta3dlabs.com",
      description: "Multi-service technology company offering 3D printing, web development, and PCB design services",
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="services-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
