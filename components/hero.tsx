import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Printer, Code, Cpu, ArrowRight } from "lucide-react"

export function Hero() {
  const buttonNew = (
    <Button
      asChild
      className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-2 text-black font-semibold
                 hover:from-cyan-300 hover:to-blue-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] 
                 group transition-all duration-300"
    >
      <Link href="/contact" className="flex items-center gap-2">
        Get Started
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20 text-center">

          {/* ✅ Brand Logo + Name */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 blur-lg bg-cyan-400/25 rounded-full" />
                <Image
                  src="/icons/meta3d-logo.png"
                  alt="Meta3D Labs Logo"
                  width={140}
                  height={140}
                  className="relative z-10 drop-shadow-[0_0_25px_rgba(6,182,212,0.7)]"
                  priority
                />
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Meta3D Labs
              </h2>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            <span className="block">CODE & CREATIVITY</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              LAYER BY LAYER
            </span>
            <span className="block">TURNING IDEAS INTO REALITY</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl">
            Multi-service technology company combining 3D printing, web development, and PCB design.
            From prototypes to full-stack solutions.
          </p>

          {/* ✅ Fixed Button */}
          <div className="mt-10">{buttonNew}</div>

          {/* Services Grid */}
          <div className="mt-14 grid w-full gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl">
            {serviceData.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  gradient,
}: {
  icon: any
  title: string
  description: string
  gradient: string
}) {
  return (
    <div className="relative rounded-2xl bg-neutral-900/60 p-6 hover:scale-105 transition-transform duration-300 border border-cyan-500/20">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-10`} />
      <div className="relative z-10">
        <div
          className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30`}
        >
          <Icon className="h-6 w-6 text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const serviceData = [
  {
    icon: Printer,
    title: "3D Printing & Modeling",
    description:
      "Custom models, prototypes, and bulk 3D printing services. From concept to physical reality.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Full-stack websites and apps using Flutter & MERN stack. Modern, responsive, and scalable solutions.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Cpu,
    title: "PCB Design & Development",
    description:
      "Printed circuit board design for electronics projects. Professional engineering solutions.",
    gradient: "from-green-500 to-emerald-500",
  },
]

