import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, Users, Lightbulb, Shield, Zap, CheckCircle, Star, Target } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-static"

export default function WhyChooseUsPage() {
  const advantages = [
    {
      icon: Award,
      title: "Multi-Disciplinary Expertise",
      description: "Unique combination of 3D printing, web development, and PCB design under one roof.",
      highlight: "3-in-1 Solution",
    },
    {
      icon: Clock,
      title: "Faster Time-to-Market",
      description: "Streamlined processes and integrated services reduce project timelines significantly.",
      highlight: "50% Faster",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal project managers and direct access to our technical team throughout your project.",
      highlight: "24/7 Support",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for your projects.",
      highlight: "Latest Tech",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Rigorous testing and quality assurance processes ensure reliable, production-ready results.",
      highlight: "100% Quality",
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description: "From prototypes to production, our solutions grow with your business needs.",
      highlight: "Future-Proof",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "3", label: "Core Services", icon: Target },
    { number: "24/7", label: "Support Available", icon: Clock },
  ]

  const testimonials = [
    {
      quote:
        "Meta 3D Labs transformed our product development process. Having 3D printing, web development, and PCB design in one place saved us months of coordination time.",
      author: "Sarah Chen",
      role: "CTO, TechStart Inc.",
      rating: 5,
    },
    {
      quote:
        "The quality of their work is exceptional. From the initial prototype to the final web application, everything exceeded our expectations.",
      author: "Michael Rodriguez",
      role: "Product Manager, InnovateCorp",
      rating: 5,
    },
    {
      quote:
        "Their integrated approach to technology solutions is exactly what we needed. One team, multiple expertise areas, outstanding results.",
      author: "Emily Johnson",
      role: "Founder, NextGen Devices",
      rating: 5,
    },
  ]

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Why Choose Meta 3D Labs?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're not just another service provider. We're your technology partner, combining multiple expertise areas
              to deliver comprehensive solutions that drive results.
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
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Competitive Advantages</h2>
              <p className="text-xl text-gray-300">What sets us apart in the technology services landscape.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="liquid-glass border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600">
                        <advantage.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30">
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
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Meta 3D Labs vs. Traditional Approach</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Approach */}
              <Card className="liquid-glass border-red-500/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-400 mb-4">Traditional Approach</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Multiple vendors to coordinate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Longer project timelines</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Communication gaps between teams</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Higher overall costs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Inconsistent quality standards</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Meta 3D Labs Approach */}
              <Card className="liquid-glass border-cyan-400/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Meta 3D Labs Approach</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Single point of contact</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Accelerated delivery timelines</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Seamless team collaboration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Cost-effective bundled services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Consistent quality across all services</span>
                    </div>
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
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">What Our Clients Say</h2>
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
                    <blockquote className="text-lg text-gray-300 mb-6 italic">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
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

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="liquid-glass rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Experience the Meta 3D Labs Difference</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of satisfied clients who chose integrated technology solutions.
              </p>
              <Button
                asChild
                className="bg-cyan-400 text-black font-medium rounded-lg px-8 py-3 text-lg
                           hover:bg-cyan-300 hover:shadow-md hover:scale-[1.02]
                           transition-all"
              >
                <Link href="/contact">Start Your Project Today</Link>
              </Button>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>
    </>
  )
}
