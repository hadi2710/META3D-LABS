import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Printer, Code, Cpu, Calendar, User } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-static"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Smart Home IoT Dashboard",
      category: "Web Development + PCB Design",
      description: "Complete IoT solution with custom PCB sensors and real-time web dashboard for home automation.",
      image: "/modern-smart-home-dashboard-interface.jpg",
      technologies: ["React", "Node.js", "PCB Design", "IoT Sensors"],
      services: ["Web Development", "PCB Design"],
      client: "HomeAutomation Pro",
      year: "2024",
      results: "40% reduction in energy consumption, 95% uptime reliability",
    },
    {
      id: 2,
      title: "Medical Device Prototype",
      category: "3D Printing + PCB Design",
      description: "Rapid prototyping and electronics design for a portable medical monitoring device.",
      image: "/medical-device-prototype-3d-printed.jpg",
      technologies: ["SLA 3D Printing", "Biocompatible Materials", "Embedded Systems"],
      services: ["3D Printing", "PCB Design"],
      client: "MedTech Innovations",
      year: "2024",
      results: "6-week prototype delivery, FDA submission ready",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with custom inventory management and analytics dashboard.",
      image: "/modern-ecommerce-platform.png",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
      services: ["Web Development"],
      client: "RetailTech Solutions",
      year: "2024",
      results: "300% increase in online sales, 50% faster checkout",
    },
    {
      id: 4,
      title: "Drone Control System",
      category: "All Services",
      description:
        "Complete drone solution: 3D printed frame, custom flight controller PCB, and web-based control interface.",
      image: "/custom-drone-with-control-interface.jpg",
      technologies: ["FDM Printing", "Flight Controller PCB", "React Dashboard"],
      services: ["3D Printing", "PCB Design", "Web Development"],
      client: "AeroTech Dynamics",
      year: "2023",
      results: "25% weight reduction, 40% longer flight time",
    },
    {
      id: 5,
      title: "Industrial Automation Parts",
      category: "3D Printing",
      description: "Production-grade 3D printed components for manufacturing equipment with custom tooling.",
      image: "/industrial-3d-printed-mechanical-parts.jpg",
      technologies: ["SLS Printing", "Nylon Materials", "CNC Finishing"],
      services: ["3D Printing"],
      client: "Manufacturing Corp",
      year: "2023",
      results: "60% cost reduction vs traditional manufacturing",
    },
    {
      id: 6,
      title: "Startup MVP Platform",
      category: "Web Development",
      description: "Rapid MVP development for a fintech startup with user authentication and payment processing.",
      image: "/fintech-startup-app-interface.jpg",
      technologies: ["React", "Firebase", "Stripe", "Vercel"],
      services: ["Web Development"],
      client: "FinStart Inc",
      year: "2023",
      results: "4-week MVP delivery, $2M Series A funding secured",
    },
  ]

  const serviceIcons = {
    "3D Printing": Printer,
    "Web Development": Code,
    "PCB Design": Cpu,
  }

  const categories = ["All", "3D Printing", "Web Development", "PCB Design", "All Services"]

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our featured projects showcasing the power of integrated technology solutions. From concept to
              completion, see how we bring ideas to life.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-gray-800 text-gray-300 hover:bg-cyan-400 hover:text-black cursor-pointer transition-all px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="liquid-glass border-gray-800 overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cyan-400 text-black">{project.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="h-3 w-3" />
                          {project.year}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-400">Client: {project.client}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-cyan-400 font-medium mb-2">Services:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service) => {
                          const Icon = serviceIcons[service as keyof typeof serviceIcons]
                          return (
                            <div key={service} className="flex items-center gap-1 bg-gray-800 rounded-full px-3 py-1">
                              <Icon className="h-3 w-3 text-cyan-400" />
                              <span className="text-xs text-gray-300">{service}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-cyan-400 font-medium mb-2">Technologies:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-cyan-400 font-medium mb-2">Results:</div>
                      <p className="text-sm text-gray-300">{project.results}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-cyan-400 text-black hover:bg-cyan-300 flex-1">
                        View Details <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="liquid-glass rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Project Impact</h2>
                <p className="text-gray-300">Measurable results across all our services</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-sm text-gray-300">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="liquid-glass rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Create Your Success Story?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help bring your project to life with our integrated technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-cyan-400 text-black font-medium rounded-lg px-8 py-3 text-lg
                             hover:bg-cyan-300 hover:shadow-md hover:scale-[1.02]
                             transition-all"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-600 text-gray-300 rounded-lg px-8 py-3 text-lg
                             hover:bg-gray-800 hover:border-gray-500
                             transition-all bg-transparent"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>
    </>
  )
}
