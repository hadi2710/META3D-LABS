"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "Why choose Meta3D Labs?",
  subtitle: "Innovation in 3D Printing, Web Development, and PCB Design",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("meta3d-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>
      <p className="mb-12 text-center text-lg text-neutral-300 sm:text-xl">
        {content.subtitle}
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Adaptability / 3D Printing */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">3D PRINTING</p>
            <CardTitle className="mt-1 text-xl text-white">
              From prototypes to production-ready models
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/3d-print-1.jpg"
                  alt="3D printer creating a prototype model"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/3d-print-2.jpg"
                  alt="Finished 3D printed parts on display"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Love / Testimonials */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">CLIENT LOVE</p>
            <CardTitle className="mt-1 text-xl text-white">
              Trusted by engineers, startups, and creators worldwide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-lime-300">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-lime-300 text-lime-300" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={"/images/client-1.jpg"}
                width={280}
                height={160}
                alt="Client holding a 3D printed model"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
              <Image
                src={"/images/client-2.jpg"}
                width={280}
                height={160}
                alt="Team showcasing PCB prototype and laptop with code"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Tech + Creativity / Web & PCB */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">TECH + CREATIVITY</p>
            <CardTitle className="mt-1 text-xl text-white">
              Merging engineering with digital innovation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              From 3D printed prototypes to interactive web platforms and PCB
              designs, we bring your ideas to life under one roof.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Image
                src={"/images/pcb-1.jpg"}
                width={280}
                height={160}
                alt="Custom PCB design render"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
              <Image
                src={"/images/web-dev.jpg"}
                width={280}
                height={160}
                alt="Modern web app dashboard on laptop"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
