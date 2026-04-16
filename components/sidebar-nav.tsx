"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  X,
  Users,
  Target,
  Info,
  Phone,
  ChevronRight,
  FolderOpen,
  Award,
  MessageSquare,
  HelpCircle,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

interface SidebarNavProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const menuItems = [
  {
    id: "projects",
    label: "Projects",
    icon: FolderOpen,
    description: "Our Portfolio",
  },
  {
    id: "process",
    label: "Our Process",
    icon: Settings,
    description: "How We Work",
  },
  {
    id: "about",
    label: "About Us",
    icon: Info,
    description: "Our Story & History",
  },
  {
    id: "vision",
    label: "Vision & Goals",
    icon: Target,
    description: "Our Mission Forward",
  },
  {
    id: "staff",
    label: "Our Team",
    icon: Users,
    description: "Leadership & Experts",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    icon: MessageSquare,
    description: "Client Feedback",
  },
  {
    id: "credentials",
    label: "Credentials",
    icon: Award,
    description: "Certifications & Tools",
  },
  {
    id: "faq",
    label: "FAQ",
    icon: HelpCircle,
    description: "Common Questions",
  },
  { id: "contact", label: "Contact", icon: Phone, description: "Get in Touch" },
];

export function SidebarNav({ isOpen, onClose, onNavigate }: SidebarNavProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-card z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-lg overflow-hidden shadow-lg ring-2 ring-primary/30">
                  <Image
                    src="/images/hh-logo.jpg"
                    alt="HH Consulting Logo"
                    fill
                    className="object-cover"
                    sizes="40px"
                  loading="eager"
                  />
                </div>
                <div>
                  <p className="font-heading text-xs font-bold text-foreground">
                    HH Consulting
                  </p>
                  <p className="text-[9px] text-muted-foreground tracking-wider">
                    Architects & Engineers
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Menu Items - Scrollable */}
            <nav className="flex-1 overflow-y-auto p-3">
              <p className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase mb-3 px-2">
                Navigation
              </p>
              <ul className="space-y-0.5">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <motion.button
                      onClick={() => {
                        onNavigate(item.id);
                        onClose();
                      }}
                      onHoverStart={() => setHoveredItem(item.id)}
                      onHoverEnd={() => setHoveredItem(null)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/80 transition-colors group"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          hoveredItem === item.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-xs font-medium text-foreground">
                          {item.label}
                        </p>
                        <p className="text-[9px] text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-all ${
                          hoveredItem === item.id
                            ? "text-primary translate-x-1"
                            : "text-muted-foreground"
                        }`}
                      />
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom Stats - Fixed at bottom */}
            <div className="shrink-0 p-4 border-t border-border bg-card">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="font-heading text-lg font-bold text-primary">
                    30+
                  </p>
                  <p className="text-[8px] text-muted-foreground uppercase tracking-wider">
                    Years
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-primary">
                    500+
                  </p>
                  <p className="text-[8px] text-muted-foreground uppercase tracking-wider">
                    Projects
                  </p>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-primary">
                    200+
                  </p>
                  <p className="text-[8px] text-muted-foreground uppercase tracking-wider">
                    Staff
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
