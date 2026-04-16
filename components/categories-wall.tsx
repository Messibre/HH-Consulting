"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

interface Category {
  id: string;
  name: string;
  position: { top: string; left: string };
}

const categories: Category[] = [
  { id: "site-works", name: "SITE WORKS", position: { top: "8%", left: "5%" } },
  {
    id: "presentations",
    name: "PRESENTATIONS",
    position: { top: "12%", left: "55%" },
  },
  {
    id: "building-designs",
    name: "BUILDING DESIGNS",
    position: { top: "23%", left: "48%" },
  },
  {
    id: "infrastructures",
    name: "INFRASTRUCTURES",
    position: { top: "33%", left: "12%" },
  },
  {
    id: "terminal-design",
    name: "TERMINAL DESIGN",
    position: { top: "41%", left: "52%" },
  },
  {
    id: "road-works",
    name: "ROAD WORKS",
    position: { top: "50%", left: "6%" },
  },
  {
    id: "irrigations",
    name: "IRRIGATIONS",
    position: { top: "58%", left: "55%" },
  },
  {
    id: "bridge-design",
    name: "BRIDGE DESIGN",
    position: { top: "67%", left: "15%" },
  },
  {
    id: "feasibility-study",
    name: "FEASIBILITY STUDY",
    position: { top: "74%", left: "45%" },
  },
  {
    id: "environmental-assessment",
    name: "ENVIRONMENTAL ASSESSMENT",
    position: { top: "80%", left: "8%" },
  },
];

interface CategoriesWallProps {
  onSelectCategory: (categoryId: string) => void;
  onBack: () => void;
  onMenuOpen: () => void;
}

export function CategoriesWall({
  onSelectCategory,
  onBack,
  onMenuOpen,
}: CategoriesWallProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background"
    >
      {/* Building Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-building.jpg"
          alt="Building facade"
          fill
          className="object-cover"
          quality={90}
          sizes="100vw"
          priority
        loading="eager"
        />
        {/* Overlay - lighter for light mode */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="absolute top-6 left-5 z-20 flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="text-xs tracking-wider">BACK</span>
      </motion.button>

      {/* Header */}
      <div className="absolute top-6 right-5 z-20 flex items-center gap-3">
        <div className="relative h-8 w-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-primary/30">
          <Image
            src="/images/hh-logo.jpg"
            alt="HH"
            fill
            className="object-cover"
            sizes="32px"
          loading="eager"
          />
        </div>
        <ThemeToggle />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMenuOpen}
          className="w-8 h-8 rounded bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Category Labels - Positioned like building signage */}
      <div className="absolute inset-0 z-10">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(category.id)}
            className="absolute group"
            style={{ top: category.position.top, left: category.position.left }}
          >
            <motion.div
              className="relative"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {/* Label */}
              <div
                className="bg-black/60 backdrop-blur-md border border-primary/40 px-3 py-1.5 rounded-sm
                            group-hover:bg-primary/40 group-hover:border-primary transition-all duration-300
                            shadow-lg group-hover:shadow-primary/20"
              >
                <span
                  className="text-[9px] sm:text-[10px] font-semibold tracking-[0.12em] text-white 
                               group-hover:text-white transition-colors whitespace-nowrap"
                >
                  {category.name}
                </span>
              </div>

              {/* Pulsing indicator dot */}
              <motion.div
                className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-primary
                          group-hover:bg-white transition-colors"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.1,
                }}
              />
            </motion.div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
