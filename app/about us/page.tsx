"use client";

import { SiteHeader } from "@/components/site-header";
import { AppverseFooter } from "@/components/appverse-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-static";

export default function AboutPage() {
  const mainGradient = "from-cyan-400 to-blue-600"; // consistent color

  return (
    <main className="min-h-[100dvh] text-white bg-gray-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}>
            About Meta3D Labs
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Multi-service technology company bridging digital innovation and physical creation. From 3D printing to web
            development and PCB design, we turn ideas into reality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}>
              Our Story
            </h2>
            <p className="text-gray-300 mb-4">
              Founded to democratize technology, Meta3D Labs emerged at the intersection of digital creativity and physical manufacturing.
            </p>
            <p className="text-gray-300 mb-4">
              We blend software solutions with hardware innovation, providing full-service solutions spanning the product development lifecycle.
            </p>
            <p className="text-gray-300">
              From concept to creation, we bring ideas to life through 3D printing, full-stack web development, and precision PCB design.
            </p>
          </div>
          <div className="relative">
            <Card className="liquid-glass border-gray-800 text-center p-8">
              <div className="text-6xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-lg text-gray-300 mb-4">Core Services</div>
              <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-lg text-gray-300">Possibilities</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl font-bold text-center mb-12 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precision", description: "Every project demands accuracy, from code to circuits to 3D models." },
              { icon: Lightbulb, title: "Innovation", description: "We embrace cutting-edge technologies to deliver tomorrow's solutions today." },
              { icon: Users, title: "Collaboration", description: "Your vision combined with our expertise creates extraordinary results." },
              { icon: Award, title: "Excellence", description: "We don't just meet expectations—we exceed them in every project." },
            ].map((value, index) => (
              <Card key={index} className="liquid-glass border-gray-800 hover:scale-[1.02] transition-transform">
                <CardContent className="p-6 text-center">
                  <div className={`p-4 rounded-xl mb-4 bg-gradient-to-r ${mainGradient} inline-block`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}>
            Our Expertise
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our multidisciplinary team brings years of experience in engineering, design, and technology to deliver comprehensive solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "3D Printing Specialists", description: "Expert knowledge in additive manufacturing, materials science, and rapid prototyping.", badge: ["PLA", "CAD", "3D Modeling"] },
              { title: "Full-Stack Developers", description: "Proficient in modern web technologies, cloud platforms, and scalable architectures.", badge: ["React", "Next.js", "Node.js"] },
              { title: "PCB Design Engineers", description: "Specialized in circuit design, component selection, and manufacturing optimization.", badge: ["Altium", "KiCad", "SPICE"] },
            ].map((expertise, index) => (
              <Card key={index} className="liquid-glass border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">{expertise.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{expertise.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {expertise.badge.map((b, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300">
                      {b}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className={`text-3xl font-bold mb-12 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}>
            Meet Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hadi Zahir */}
            <Card className="liquid-glass border-gray-800 p-6 flex flex-col items-center">
              <Image
                src="/images/hadi-zahir.jpg"
                alt="Hadi Zahir"
                width={150}
                height={150}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Hadi Zahir</h3>
              <p className="text-gray-300 text-sm mb-2">Chief Operation Officer (COO)</p>
              <p className="text-gray-400 text-sm text-center">
                Leads operations, ensuring projects are delivered efficiently and meet the highest standards.
              </p>
            </Card>

            {/* Hassaan Rauf */}
            <Card className="liquid-glass border-gray-800 p-6 flex flex-col items-center">
              <Image
                src="/images/hassaan-rauf.jpg"
                alt="Hassaan Rauf"
                width={150}
                height={150}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Hassaan Rauf</h3>
              <p className="text-gray-300 text-sm mb-2">Business Developer Officer</p>
              <p className="text-gray-400 text-sm text-center">
                Drives business growth and strategy, connecting our solutions to clients and opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="liquid-glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Meta3D Labs can bring your next project to life.
            </p>
            <Button
              asChild
              className="bg-cyan-400 text-black font-medium rounded-lg px-8 py-3 text-lg
                         hover:bg-cyan-300 hover:shadow-md hover:scale-[1.02] transition-all"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </main>
  );
}
