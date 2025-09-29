import { Button } from "@/components/ui/button"
import { Printer, Code, Cpu, ArrowRight } from "lucide-react"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-cyan-400 px-6 text-black hover:bg-cyan-300 group">
      <a href="#contact" className="flex items-center gap-2">
        Get Started
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-sm font-bold text-white">M3D</span>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Meta 3D Labs</p>
          </div>

          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">CODE & CREATIVITY</span>
            <span className="block text-cyan-300 drop-shadow-[0_0_20px_rgba(6,182,212,0.35)]">LAYER BY LAYER</span>
            <span className="block">TURNING IDEAS INTO REALITY</span>
          </h1>

          <p className="mt-6 text-center text-lg text-gray-300 max-w-2xl">
            Multi-service technology company combining 3D printing, web development, and PCB design. From prototypes to
            full-stack solutions.
          </p>

          <div className="mt-8">{buttonNew}</div>

          <div className="mt-12 grid w-full gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 max-w-4xl">
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
    <div className="relative rounded-2xl glass-border bg-neutral-900/50 p-6 hover:scale-105 transition-transform duration-300">
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-10`} />
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30">
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
    description: "Custom models, prototypes, and bulk 3D printing services. From concept to physical reality.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack websites and apps using Flutter & MERN stack. Modern, responsive, and scalable solutions.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Cpu,
    title: "PCB Design & Development",
    description: "Printed circuit board design for electronics projects. Professional engineering solutions.",
    gradient: "from-green-500 to-emerald-500",
  },
]
