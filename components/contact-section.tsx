"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 px-5 bg-background">
      <div className="max-w-lg mx-auto">
        <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-3">
          Contact
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
          Let&apos;s discuss your project
        </h2>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
          For any international projects, we are your dedicated global partner in design and construction supervision.
        </p>

        <div className="space-y-4 mb-8">
          <a 
            href="tel:+251911127819" 
            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
              <p className="text-foreground font-medium text-sm">+251 911 127 819</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <a 
            href="mailto:info@hhconsulting.com" 
            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-0.5">Email</p>
              <p className="text-foreground font-medium text-sm">info@hhconsulting.com</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-0.5">Location</p>
              <p className="text-foreground font-medium text-sm">Addis Ababa, Ethiopia</p>
              <p className="text-muted-foreground text-xs mt-1">Serving clients worldwide</p>
            </div>
          </div>
        </div>

        <Button 
          size="lg" 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
        >
          Start a Conversation
        </Button>
      </div>
    </section>
  )
}
