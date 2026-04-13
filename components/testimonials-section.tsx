"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

interface TestimonialsProps {
  onBack: () => void;
}

const testimonials = [
  {
    id: 1,
    name: "Ministry of Culture & Tourism",
    role: "Government Client",
    content:
      "HH Consulting delivered exceptional work on the Tiya Heritage Park project. Their attention to detail and respect for our cultural heritage while implementing modern infrastructure was remarkable.",
    rating: 5,
    project: "Tiya World Heritage Site",
  },
  {
    id: 2,
    name: "Ethiopian Airports Enterprise",
    role: "Government Client",
    content:
      "The terminal designs for Axum, Jimma, and Gambela airports exceeded our expectations. Professional team with deep understanding of aviation infrastructure requirements.",
    rating: 5,
    project: "Multiple Airport Terminals",
  },
  {
    id: 3,
    name: "Haramaya University",
    role: "Educational Institution",
    content:
      "Outstanding architectural design for our guest house and conference facilities. The team was responsive, innovative, and delivered on time and within budget.",
    rating: 5,
    project: "University Guest House & Conference",
  },
  {
    id: 4,
    name: "Sidama Roads Authority",
    role: "Regional Government",
    content:
      "Their bridge designs for our regional roads have significantly improved connectivity. Engineering excellence combined with practical solutions.",
    rating: 5,
    project: "Multiple Bridge Projects",
  },
  {
    id: 5,
    name: "Djibouti International School",
    role: "International Client",
    content:
      "Working with HH Consulting on our school expansion was a pleasure. They understood our vision for a modern learning environment and delivered beautifully.",
    rating: 5,
    project: "International School Design",
  },
];

const clientLogos = [
  { name: "Ethiopian Airports Enterprise", abbr: "EAE" },
  { name: "Ministry of Culture & Tourism", abbr: "MoCT" },
  { name: "Haramaya University", abbr: "HU" },
  { name: "Sidama Roads Authority", abbr: "SRA" },
  { name: "Addis Ababa City Administration", abbr: "AACA" },
  { name: "Ethiopian Roads Authority", abbr: "ERA" },
  { name: "Ministry of Education", abbr: "MoE" },
  { name: "Djibouti Government", abbr: "DJ" },
];

export function TestimonialsSection({ onBack }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 text-foreground/80 hover:text-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-xs tracking-wider">BACK</span>
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

      <div className="px-5 py-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-2">
            Client Feedback
          </p>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Testimonials
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            What our clients say about working with us
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-card border border-border rounded-2xl p-6 mb-6"
        >
          <Quote className="w-8 h-8 text-primary/30 mb-4" />

          <p className="text-sm leading-relaxed text-foreground mb-6">
            {`"${testimonials[currentIndex].content}"`}
          </p>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>

          <div className="border-t border-border pt-4">
            <p className="font-semibold text-sm text-foreground">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
              {testimonials[currentIndex].role}
            </p>
            <p className="text-[10px] text-primary mt-1">
              Project: {testimonials[currentIndex].project}
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-4">
            Trusted By
          </p>
          <div className="grid grid-cols-4 gap-3">
            {clientLogos.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-3 flex flex-col items-center justify-center aspect-square"
              >
                <span className="text-lg font-bold text-primary">
                  {client.abbr}
                </span>
                <span className="text-[7px] text-muted-foreground text-center mt-1 leading-tight">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
