"use client";

import { SiteHeader } from "@/components/site-header";
import { AppverseFooter } from "@/components/appverse-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Clock,
  Users,
  Lightbulb,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-static";

export default function Meta3DPage() {
  const mainGradient = "from-cyan-400 to-blue-600"; // consistent gradient

  const advantages = [
    {
      icon: Award,
      title: "Multi-Disciplinary Expertise",
      description:
        "Unique combination of 3D printing, web development, and PCB design under one roof.",
      highlight: "3-in-1 Solution",
    },
    {
      icon: Clock,
      title: "Faster Time-to-Market",
      description:
        "Streamlined processes and integrated services reduce project timelines significantly.",
      highlight: "50% Faster",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description:
        "Personal project managers and direct access to our technical team throughout your project.",
      highlight: "24/7 Support",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions for your projects.",
      highlight: "Latest Tech",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description:
        "Rigorous testing and quality assurance processes ensure reliable, production-ready results.",
      highlight: "100% Quality",
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description:
        "From prototypes to production, our solutions grow with your business needs.",
      highlight: "Future-Proof",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: CheckCircle },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "3", label: "Core Services", icon: Target },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const testimonials = [
    {
      quote:
        "Meta 3D Labs helped me bring my architectural models to life with incredible precision. The team understood my vision perfectly.",
      author: "Ali Khan",
      role: "NCA Student – Architecture Projects",
      rating: 5,
    },
    {
      quote:
        "Their 3D printed parts were crucial for our robotics competition. The precision and delivery speed were unmatched.",
      author: "Sara Ahmed",
      role: "COMSATS Student – Robotics Competition",
      rating: 5,
    },
    {
      quote:
        "I needed highly specialized models for my project. Meta 3D Labs delivered exactly what I envisioned, with excellent guidance throughout.",
      author: "Affnan Wariach",
      role: "Product Designer – Specialized Models",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-[100dvh] text-white bg-gray-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}
          >
            Why Choose Meta3D Labs?
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're not just another service provider. We're your technology
            partner, combining multiple expertise areas to deliver comprehensive
            solutions that drive results.
          </p>
        </div>
      </section>

      

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="liquid-glass border-gray-800 text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold mb-6 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}
            >
              Our Competitive Advantages
            </h2>
            <p className="text-xl text-gray-300">
              What sets us apart in the technology services landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="liquid-glass border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${mainGradient}`}>
                      <advantage.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className={`bg-cyan-400/20 text-cyan-400 border-cyan-400/30`}
                    >
                      {advantage.highlight}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold mb-6 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}
            >
              Meta3D Labs vs. Traditional Approach
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="liquid-glass border-red-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-4">Traditional Approach</h3>
                <div className="space-y-3">
                  {[
                    "Multiple vendors to coordinate",
                    "Longer project timelines",
                    "Communication gaps between teams",
                    "Higher overall costs",
                    "Inconsistent quality standards",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="liquid-glass border-cyan-400/30">
              <CardContent className="p-6">
                <h3
                  className={`text-xl font-semibold mb-4 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}
                >
                  Meta 3D Labs Approach
                </h3>
                <div className="space-y-3">
                  {[
                    "Single point of contact",
                    "Accelerated delivery timelines",
                    "Seamless team collaboration",
                    "Cost-effective bundled services",
                    "Consistent quality across all services",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl font-bold mb-6 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}
            >
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="liquid-glass border-gray-800">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${mainGradient} rounded-full flex items-center justify-center`}
                    >
                      <span className="text-white font-semibold text-sm">
                        {testimonial.author.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className={`text-3xl font-bold mb-6 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}
            >
              Our Story
            </h2>
            <p className="text-gray-300 mb-4">
              Founded to democratize technology, Meta3D Labs emerged at the
              intersection of digital creativity and physical manufacturing.
            </p>
            <p className="text-gray-300 mb-4">
              We blend software solutions with hardware innovation, providing
              full-service solutions spanning the product development lifecycle.
            </p>
            <p className="text-gray-300">
              From concept to creation, we bring ideas to life through 3D
              printing, full-stack web development, and precision PCB design.
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
          <h2
            className={`text-3xl font-bold text-center mb-12 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Precision",
                description:
                  "Every project demands accuracy, from code to circuits to 3D models.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We embrace cutting-edge technologies to deliver tomorrow's solutions today.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "Your vision combined with our expertise creates extraordinary results.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We don't just meet expectations—we exceed them in every project.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="liquid-glass border-gray-800 hover:scale-[1.02] transition-transform"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`p-4 rounded-xl mb-4 bg-gradient-to-r ${mainGradient} inline-block`}
                  >
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
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
          <h2
            className={`text-3xl font-bold mb-6 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}
          >
            Our Expertise
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our multidisciplinary team brings years of experience in engineering,
            design, and technology to deliver comprehensive solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "3D Printing Specialists",
                description:
                  "Expert knowledge in additive manufacturing, materials science, and rapid prototyping.",
                badge: ["PLA", "CAD", "3D Modeling"],
              },
              {
                title: "Full-Stack Developers",
                description:
                  "Proficient in modern web technologies, cloud platforms, and scalable architectures.",
                badge: ["React", "Next.js", "Node.js"],
              },
              {
                title: "PCB Design Engineers",
                description:
                  "Specialized in circuit design, component selection, and manufacturing optimization.",
                badge: ["Altium", "KiCad", "SPICE"],
              },
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
          <h2
            className={`text-3xl font-bold mb-12 bg-gradient-to-r ${mainGradient} bg-clip-text text-transparent`}
          >
            Meet Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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

      {/* Final CTA */}
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
