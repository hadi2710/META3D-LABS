"use client"

import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { SimpleButton } from "@/components/simple-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Printer,
  Code,
  Cpu,
  Layers,
  Zap,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const dynamic = "force-static"

export default function ServicesPage() {
  const services = [
    {
      icon: Printer,
      title: "3D Printing Services",
      description:
        "From rapid prototyping to production-ready parts, we bring your designs to life with precision and quality.",
      benefits: "Turn your ideas into reality quickly and accurately.",
      features: [
        "Rapid Prototyping",
        "Production Parts",
        "Custom Materials",
        "Post-Processing",
        "Design Optimization",
        "Quality Assurance",
      ],
      technologies: ["PLA", "3D modeling", "CAD software"],
      color: "from-orange-400 to-red-600",
      image: "/images/3d-print-1.jpg",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Full-stack web solutions that scale with your business, from concept to deployment and beyond.",
      benefits: "Launch your website with modern technology and scalable architecture.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "API Development",
        "Database Design",
        "Cloud Deployment",
        "Maintenance & Support",
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "AWS", "Vercel", "Flutter"],
      color: "from-blue-400 to-purple-600",
      image: "/images/web-dev1.jpg",
    },
    {
      icon: Cpu,
      title: "PCB Design",
      description:
        "Professional circuit board design and development for embedded systems and electronic products.",
      benefits: "Get production-ready PCB designs optimized for performance.",
      features: [
        "Schematic Design",
        "PCB Layout",
        "Component Selection",
        "Signal Integrity",
        "Manufacturing Files",
        "Testing & Validation",
      ],
      technologies: ["Altium", "KiCad", "Eagle", "SPICE", "Gerber"],
      color: "from-green-400 to-teal-600",
      image: "/images/pcb-1.jpg",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We discuss your project requirements, timeline, and goals to create a tailored solution.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Our team develops a comprehensive project plan with milestones and deliverables.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "We execute the plan using industry best practices and cutting-edge technologies.",
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "Your project is delivered on time with full documentation and ongoing support.",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Satisfied Clients", value: "50+" },
    { label: "Years Experience", value: "5+" },
  ]

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions spanning digital and physical realms. From web applications to 3D
              printed prototypes to custom electronics.
            </p>
          </div>
        </section>

        {/* Stats / Social Proof */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl flex justify-center gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-1 gap-12">
              {services.map((service, index) => (
                <Card key={index} className="liquid-glass border-gray-800 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Content Side */}
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-2">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                            <service.icon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{service.benefits}</p>
                        <p className="text-gray-300 mb-6 text-lg">{service.description}</p>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-cyan-400 mb-3">What We Offer:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                              >
                                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <SimpleButton asChild>
                          <Link href="/contact">
                            Get Your Quote <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </SimpleButton>
                      </div>

                      {/* Image / Technologies Side */}
                      <div className="bg-gray-900/50 p-8 flex flex-col justify-center">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={500}
                          height={300}
                          className="rounded-lg mb-6 object-cover w-full h-64"
                        />
                        <h4 className="text-lg font-semibold text-cyan-400 mb-4">Technologies We Use:</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-gray-800 text-gray-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Settings className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-300">Industry-standard tools</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Zap className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-300">Optimized workflows</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Layers className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-300">Scalable solutions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Process</h2>
              <p className="text-xl text-gray-300">
                A streamlined approach that ensures quality results and client satisfaction.
              </p>
              <div className="text-cyan-400 animate-bounce mt-4">↓ Learn More</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="liquid-glass border-gray-800 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-4">{step.step}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="liquid-glass rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss which of our services can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SimpleButton asChild>
                  <Link href="/contact">Get Started</Link>
                </SimpleButton>
                <SimpleButton asChild variant="outline">
                  <Link href="/portfolio">View Our Work</Link>
                </SimpleButton>
              </div>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>
    </>
  )
}
