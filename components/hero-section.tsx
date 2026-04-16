"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

interface HeroSectionProps {
  onExplore: () => void;
  onMenuOpen: () => void;
  onContact: () => void;
}

export function HeroSection({
  onExplore,
  onMenuOpen,
  onContact,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 px-5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-building.jpg"
          alt="Modern architectural building at dusk"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />
        {/* Gradient Overlay - balanced for both modes */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent dark:from-background dark:via-background/60 dark:to-background/20" />
      </div>

      {/* Logo/Brand */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-6 left-5 z-10"
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative h-11 w-11 rounded-xl overflow-hidden shadow-lg ring-2 ring-primary/30"
          >
            <Image
              src="/images/hh-logo.jpg"
              alt="HH Consulting Logo"
              fill
              className="object-cover"
              sizes="44px"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-heading text-sm font-bold tracking-wide text-white dark:text-foreground">
              HH Consulting
            </span>
            <span className="text-[10px] text-white/70 dark:text-muted-foreground tracking-wider">
              Architects & Engineers
            </span>
          </div>
        </div>
      </motion.div>

      {/* Menu & Theme Buttons */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute top-6 right-5 z-10 flex items-center gap-2"
      >
        <ThemeToggle />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMenuOpen}
          className="w-9 h-9 rounded-full bg-white/90 dark:bg-card/80 backdrop-blur-sm border border-white/20 dark:border-border flex items-center justify-center text-slate-700 dark:text-foreground hover:bg-white transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 max-w-[65%] pr-4"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-primary font-medium tracking-[0.15em] text-[10px] uppercase mb-2"
        >
          Worldwide Consulting
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-heading text-2xl font-bold leading-[1.15] tracking-tight text-white dark:text-foreground mb-3"
        >
          Engineering the Future,{" "}
          <span className="text-primary">Designing Spaces.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/80 dark:text-muted-foreground text-xs leading-relaxed mb-5 max-w-[90%]"
        >
          Your dedicated global partner in design and construction supervision
          since 1992.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-2"
        >
          <Button
            onClick={onExplore}
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wide px-4 rounded-full group text-xs"
          >
            <span>Explore Portfolio</span>
            <motion.span
              className="ml-1.5 inline-block"
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Button>
          <Button
            onClick={onContact}
            size="sm"
            variant="outline"
            className="border-white/50 text-yellow-500 hover:bg-white/10 dark:border-foreground/30 dark:text-foreground dark:hover:bg-foreground/10 font-medium tracking-wide px-4 rounded-full text-xs"
          >
            Consult Us
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-32 right-4 z-10 flex flex-col gap-1.5"
      >
        <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm border border-white/20 dark:border-border rounded-md px-2.5 py-1.5 text-right shadow-sm">
          <p className="text-sm font-bold text-primary leading-none">30+</p>
          <p className="text-[7px] text-slate-600 dark:text-muted-foreground uppercase tracking-wider mt-0.5">
            Years
          </p>
        </div>
        <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm border border-white/20 dark:border-border rounded-md px-2.5 py-1.5 text-right shadow-sm">
          <p className="text-sm font-bold text-primary leading-none">500+</p>
          <p className="text-[7px] text-slate-600 dark:text-muted-foreground uppercase tracking-wider mt-0.5">
            Projects
          </p>
        </div>
        <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm border border-white/20 dark:border-border rounded-md px-2.5 py-1.5 text-right shadow-sm">
          <p className="text-sm font-bold text-primary leading-none">200+</p>
          <p className="text-[7px] text-slate-600 dark:text-muted-foreground uppercase tracking-wider mt-0.5">
            Staff
          </p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onExplore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        aria-label="Scroll to projects"
      >
        <span className="text-[10px] text-white/70 dark:text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/70 dark:text-muted-foreground animate-bounce" />
      </motion.button>
    </section>
  );
}
