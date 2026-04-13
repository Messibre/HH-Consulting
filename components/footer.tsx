"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

interface FooterProps {
  onNavigate?: (section: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="py-10 px-5 bg-card border-t border-border">
      <div className="max-w-lg mx-auto">
        {/* Logo & Description */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-xl overflow-hidden shadow-lg ring-2 ring-primary/30">
            <Image 
              src="/images/hh-logo.jpg" 
              alt="HH Consulting Logo" 
              width={48} 
              height={48} 
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-foreground font-heading font-bold text-sm">HH Consulting</p>
            <p className="text-muted-foreground text-[10px] tracking-wider">Architects & Engineers PLC</p>
          </div>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed mb-6">
          Worldwide consulting for architectural and engineering excellence. Your dedicated global partner in design and construction supervision since 1992.
        </p>

        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          <a href="tel:+251118683830" className="flex items-center gap-3 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>+251 11 868 3830</span>
          </a>
          <a href="mailto:hhconsultingarchitectengineers@gmail.com" className="flex items-center gap-3 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <span>hhconsultingarchitectengineers@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>22 Mazoriya, Efrata Building, 3rd Floor, Addis Ababa, Ethiopia</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
          <div>
            <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">Company</p>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Credentials", "Process"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate?.(item.toLowerCase().replace(" ", "-").replace("our-", ""))}
                    className="text-xs text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">Resources</p>
            <ul className="space-y-2">
              {["Projects", "Testimonials", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate?.(item.toLowerCase())}
                    className="text-xs text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-6">
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            href="#" 
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            href="#" 
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, y: -2 }}
            href="#" 
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-muted-foreground text-[10px]">
            &copy; {new Date().getFullYear()} HH Consulting Architects & Engineers PLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button className="text-muted-foreground hover:text-primary text-[10px] transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-primary text-[10px] transition-colors">
              Terms of Service
            </button>
            <button className="text-muted-foreground hover:text-primary text-[10px] transition-colors">
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
