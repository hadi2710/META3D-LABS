"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, MessageCircle, Linkedin, Sparkles, ShieldCheck, Clock } from "lucide-react"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Precision. Innovation. Artistry — We bring ideas to life through 3D design and engineering.",
  copyright: "© 2025 Meta3D Labs — All rights reserved.",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem("meta3d-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) setContent(parsed.footer)
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white bg-neutral-950">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:from-cyan-300 hover:to-blue-500"
          >
            <a href="https://wa.link/rc25na" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </Button>
        </div>
      </div>

      {/* 🌟 WHY CHOOSE US SECTION */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.35)]">
            Why Choose Meta3D Labs
          </h2>
          <p className="mt-3 text-neutral-400 text-sm max-w-2xl mx-auto">
            We merge creativity, precision, and technology to deliver next-gen 3D, web, and electronic solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-950/20 to-blue-950/20 p-6 border border-cyan-500/10 hover:scale-[1.03] transition-transform duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 rounded-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30">
                  <item.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                
                <span className="text-xl font-semibold text-cyan-300">Meta3D Labs</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
              <p className="text-xs text-cyan-300/80">
                Our Vision — Empowering innovation through the fusion of design, code, and engineering.
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Navigation
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Home", "About", "Portfolio", "Services", "Contact"].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase()}`} className="hover:text-cyan-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Social Media
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com/meta3dlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-300"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://linkedin.com/company/meta3dlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-300"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://wa.link/rc25na"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-300"
                    >
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/revisions" className="hover:text-cyan-300">
                Revision Policy
              </Link>
              <Link href="/t&c" className="hover:text-cyan-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

const whyChooseUs = [
  {
    icon: Sparkles,
    title: "Innovative Design Approach",
    description:
      "From concept to completion, we combine creativity and technology to build products that inspire and perform.",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Quality & Precision",
    description:
      "We deliver professional-grade 3D prints, web solutions, and PCB designs with engineering-level accuracy.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Timely Project Delivery",
    description:
      "Our streamlined process ensures efficiency and on-time delivery — no compromise on quality or deadlines.",
    gradient: "from-teal-400 to-cyan-600",
  },
]
