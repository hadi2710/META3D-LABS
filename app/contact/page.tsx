import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Printer, Code, Cpu } from "lucide-react"

export const dynamic = "force-static"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@meta3dlabs.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Drive, Tech City, TC 12345",
      description: "Schedule an appointment",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      description: "Weekend support available",
    },
  ]

  const services = [
    { icon: Printer, name: "3D Printing", description: "Prototyping & Production" },
    { icon: Code, name: "Web Development", description: "Full-Stack Solutions" },
    { icon: Cpu, name: "PCB Design", description: "Custom Electronics" },
  ]

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and explore how our integrated technology
              solutions can help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="liquid-glass border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-cyan-400" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-300">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-300">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300">
                      Company (Optional)
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="services" className="text-gray-300">
                      Services Interested In
                    </Label>
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <label
                          key={service.name}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-gray-600 text-cyan-400 focus:ring-cyan-400"
                          />
                          {service.icon && <service.icon className="h-5 w-5 text-cyan-400" />}
                          <div>
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-gray-400 text-sm">{service.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-gray-300">
                      Project Budget Range
                    </Label>
                    <select className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white">
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-gray-300">
                      Project Timeline
                    </Label>
                    <select className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white">
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Project Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, requirements, and any specific questions you have..."
                      rows={5}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <Button
                    className="w-full bg-cyan-400 text-black font-medium rounded-lg py-3 text-lg
                               hover:bg-cyan-300 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="liquid-glass border-gray-800">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600">
                              {info.icon && <info.icon className="h-5 w-5 text-white" />}
                            </div>
                            <div>
                              <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                              <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                              <p className="text-gray-400 text-sm">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Quick Response Promise */}
                <Card className="liquid-glass border-cyan-400/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Quick Response Guarantee</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      We respond to all inquiries within 24 hours during business days. Urgent projects get priority
                      attention.
                    </p>
                    <div className="text-cyan-400 font-medium">&lt; 24 Hour Response Time</div>
                  </CardContent>
                </Card>

                {/* FAQ Link */}
                <Card className="liquid-glass border-gray-800">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Have Questions?</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Check out our frequently asked questions for quick answers about our services, pricing, and
                      process.
                    </p>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 bg-transparent"
                    >
                      View FAQ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="liquid-glass border-gray-800 overflow-hidden">
              <div className="aspect-video bg-gray-900/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Our Office</h3>
                  <p className="text-gray-300">123 Innovation Drive, Tech City, TC 12345</p>
                  <Button className="mt-4 bg-cyan-400 text-black hover:bg-cyan-300">Get Directions</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <AppverseFooter />
      </main>
    </>
  )
}
