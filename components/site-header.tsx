"use client"

import Link from "next/link"
import { SimpleButton } from "@/components/simple-button"
import { SimpleSheet, SimpleSheetContent, SimpleSheetTrigger } from "@/components/simple-sheet"
import { Menu, Home, Wrench, Award, Briefcase, Phone, Users } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Wrench },
    { href: "/about", label: "About", icon: Users }, // Added About link
    { href: "/why-choose-us", label: "Why Choose Us", icon: Award },
    { href: "/portfolio", label: "Portfolio", icon: Briefcase },
    { href: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          
          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <SimpleButton
              asChild
              className="bg-cyan-400 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-cyan-300 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="/contact">Get Started</Link>
            </SimpleButton>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <SimpleSheet>
              <SimpleSheetTrigger asChild>
                <SimpleButton
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </SimpleButton>
              </SimpleSheetTrigger>
              <SimpleSheetContent
                side="right"
                className="liquid-glass border-gray-800 p-0 w-64 flex flex-col"
              >
                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-4 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-cyan-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <SimpleButton
                    asChild
                    className="w-full bg-cyan-400 text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-cyan-300 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="/contact">Get Started</Link>
                  </SimpleButton>
                </div>
              </SimpleSheetContent>
            </SimpleSheet>
          </div>
        </div>
      </div>
    </header>
  )
}
