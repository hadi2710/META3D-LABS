import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-static"

export default function AboutPage() {
  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              About Meta 3D Labs
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a multi-service technology company that bridges the gap between digital innovation and physical
              creation, combining cutting-edge 3D printing, web development, and PCB design services.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  Founded with a vision to democratize technology and make innovation accessible to everyone, Meta 3D
                  Labs emerged from the intersection of digital creativity and physical manufacturing.
                </p>
                <p className="text-gray-300 mb-4">
                  Our team of engineers, designers, and developers recognized that the future belongs to those who can
                  seamlessly blend software solutions with hardware innovation. That's why we offer comprehensive
                  services spanning the entire product development lifecycle.
                </p>
                <p className="text-gray-300">
                  From concept to creation, we turn ideas into reality through our unique combination of 3D printing
                  expertise, full-stack web development, and precision PCB design.
                </p>
              </div>
              <div className="relative">
                <div className="liquid-glass rounded-2xl p-8 text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">3</div>
                  <div className="text-lg text-gray-300 mb-4">Core Services</div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
                  <div className="text-lg text-gray-300">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Precision",
                  description: "Every project demands accuracy, from code to circuits to 3D models.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We embrace cutting-edge technologies to deliver tomorrow's solutions today.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "Your vision combined with our expertise creates extraordinary results.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We don't just meet expectations—we exceed them in every project.",
                },
              ].map((value, index) => (
                <Card key={index} className="liquid-glass border-gray-800">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Expertise</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our multidisciplinary team brings together years of experience in engineering, design, and technology to
              deliver comprehensive solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "3D Printing Specialists",
                  description: "Expert knowledge in additive manufacturing, materials science, and rapid prototyping.",
                },
                {
                  title: "Full-Stack Developers",
                  description: "Proficient in modern web technologies, cloud platforms, and scalable architectures.",
                },
                {
                  title: "PCB Design Engineers",
                  description: "Specialized in circuit design, component selection, and manufacturing optimization.",
                },
              ].map((expertise, index) => (
                <Card key={index} className="liquid-glass border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{expertise.title}</h3>
                    <p className="text-gray-300 text-sm">{expertise.description}</p>
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
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Work Together?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how Meta 3D Labs can bring your next project to life.
              </p>
              <Button
                asChild
                className="bg-cyan-400 text-black font-medium rounded-lg px-8 py-3 text-lg
                           hover:bg-cyan-300 hover:shadow-md hover:scale-[1.02]
                           transition-all"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>
    </>
  )
}
