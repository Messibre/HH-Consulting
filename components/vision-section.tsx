"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  Compass,
  Eye,
  Lightbulb,
  Target,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

interface VisionSectionProps {
  onBack: () => void;
}

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with creative solutions",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Uncompromising quality in every project",
  },
  {
    icon: Compass,
    title: "Integrity",
    description: "Ethical practices and transparent dealings",
  },
  {
    icon: Sparkles,
    title: "Sustainability",
    description: "Building for future generations",
  },
];

const goals = [
  "Become the leading architectural consultancy in East Africa by 2030",
  "Pioneer sustainable and green building practices in the region",
  "Expand global partnerships and international collaborations",
  "Nurture the next generation of African architects and engineers",
  "Achieve carbon-neutral operations across all offices",
];

export function VisionSection({ onBack }: VisionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-xs tracking-wider uppercase">Back</span>
        </motion.button>

        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-primary/30">
            <Image
              src="/images/hh-logo.jpg"
              alt="HH"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Hero with Vision Statement */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src="/images/bridge-design.jpg"
          alt="Vision for the future"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-6 left-5 right-5"
        >
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-1">
            Our Direction
          </p>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Vision & Goals
          </h1>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-8">
        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
          <div className="pl-4">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-primary" />
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Our Vision
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              &ldquo;To be the most trusted and innovative architectural and
              engineering consultancy in Africa, creating spaces that inspire,
              endure, and contribute to sustainable development.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Our Mission
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To deliver world-class design and engineering solutions that exceed
            client expectations, foster innovation, embrace sustainability, and
            contribute to the built environment of Ethiopia and beyond.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Core Values
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-card border border-border rounded-xl p-4 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary transition-colors"
                >
                  <value.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-4 pb-8"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Strategic Goals
          </h2>
          <div className="space-y-2">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 bg-secondary/50 rounded-lg p-3 group cursor-default"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary transition-colors">
                  <span className="text-[10px] font-bold text-primary group-hover:text-primary-foreground transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {goal}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
