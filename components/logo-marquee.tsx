"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  const designTools = [
    { name: "Fusion 360", symbol: "🧠", color: "text-cyan-400" },
    { name: "Altium Designer", symbol: "⚡", color: "text-cyan-300" },
    { name: "Blender", symbol: "🧊", color: "text-cyan-400" },
    { name: "SolidWorks", symbol: "⚙️", color: "text-blue-400" },
    { name: "Onshape", symbol: "O", color: "text-blue-500" },
  ]

  const hardwareSystems = [
    { name: "Creality Ender 5 S1", symbol: "", color: "text-cyan-400" },
    { name: "Prusa i3 MK3S+", symbol: "🟦", color: "text-blue-400" },
    { name: "ESP32", symbol: "🔌", color: "text-cyan-400" },
    { name: "Arduino", symbol: "∞", color: "text-blue-400" },
    { name: "Raspberry Pi", symbol: "🍓", color: "text-cyan-300" },
  ]

  const softwareStack = [
    { name: "Next.js", symbol: "▲", color: "text-white" },
    { name: "React", symbol: "⚛️", color: "text-cyan-400" },
    { name: "Tailwind", symbol: "🌬️", color: "text-cyan-300" },
    { name: "Node.js", symbol: "🟢", color: "text-cyan-400" },
    { name: "MongoDB", symbol: "🧩", color: "text-blue-400" },
  ]

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div
        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl bg-neutral-900/60 border border-cyan-500/20 
                   backdrop-blur-xl flex flex-col items-center justify-center text-center p-2 
                   hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
      >
        <span className={`text-2xl sm:text-3xl ${logo.color}`}>{logo.symbol}</span>
        <p className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">{logo.name}</p>
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            From Design to Deployment
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              Powered by Cutting-Edge Systems
            </span>
          </h2>

          <Button
            asChild
            className="mt-6 sm:mt-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-2 text-black font-semibold
                       hover:from-cyan-300 hover:to-blue-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]
                       group transition-all duration-300 ease-in-out"
          >
            <Link href="/services" className="flex items-center gap-2">
              Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Row 1: Design Tools */}
        <div className="relative mb-6">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex animate-scroll-right whitespace-nowrap"
              style={{
                animationPlayState: pausedRow === "design" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...designTools, ...designTools].map((logo, index) => (
                <LogoCard key={`design-${index}`} logo={logo} rowId="design" />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Hardware Systems */}
        <div className="relative mb-6">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex animate-scroll-left whitespace-nowrap"
              style={{
                animationPlayState: pausedRow === "hardware" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...hardwareSystems, ...hardwareSystems].map((logo, index) => (
                <LogoCard key={`hardware-${index}`} logo={logo} rowId="hardware" />
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Software Stack */}
        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex animate-scroll-right whitespace-nowrap"
              style={{
                animationPlayState: pausedRow === "software" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...softwareStack, ...softwareStack].map((logo, index) => (
                <LogoCard key={`software-${index}`} logo={logo} rowId="software" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
