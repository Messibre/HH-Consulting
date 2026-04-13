"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "#" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">HH</span>
            </div>
            <span className="text-foreground font-semibold text-sm">HH Consulting</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary text-secondary-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ paddingTop: "72px" }}
      >
        <nav className="px-5 py-8">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-card transition-colors group text-left"
                >
                  <span className="text-primary/60 text-xs font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground font-medium text-lg group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
