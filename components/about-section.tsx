"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Award, Building2, Calendar } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

interface AboutSectionProps {
  onBack: () => void;
}

const milestones = [
  {
    year: "1992",
    event: "Company Founded",
    description: "Started as a small consultancy firm in Addis Ababa",
  },
  {
    year: "2000",
    event: "Regional Expansion",
    description: "Expanded operations to East African markets",
  },
  {
    year: "2010",
    event: "Major Projects",
    description: "Awarded contracts for national infrastructure",
  },
  {
    year: "2020",
    event: "Global Reach",
    description: "International partnerships and worldwide presence",
  },
];

const services = [
  "Building Design (Architectural, Structure, Electrical, Sanitary, Mechanical & Others)",
  "Urban Design and Planning Works",
  "Infrastructures",
  "Terminal design",
  "Road works",
  "Irrigations",
  "Feasibility study",
  "Topography Survey",
  "Landscape Design and Specification",
  "Contract Administration and Supervision (Quality Control)",
];

export function AboutSection({ onBack }: AboutSectionProps) {
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
          <div className="relative h-8 w-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-primary/30">
            <Image
              src="/images/hh-logo.jpg"
              alt="HH"
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/images/dr ali bira guesthouse.jpg"
          alt="HH Consulting Office"
          fill
          className="object-cover"
          quality={80}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-background/12 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-6 left-5 right-5"
        >
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-1">
            Discover
          </p>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            About Us
          </h1>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            HH Consulting Architects & Engineers is a premier architectural and
            engineering consultancy firm with over three decades of excellence
            in design, construction supervision, and project management across
            Ethiopia and beyond.
          </p>
        </motion.div>

        {/* Key Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { icon: Calendar, value: "1992", label: "Established" },
            { icon: Building2, value: "500+", label: "Projects" },
            { icon: Award, value: "30+", label: "Years" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-4 text-center"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="font-heading text-lg font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Our Story
          </h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Founded in 1992, HH Consulting has grown from a small
              architectural practice to become one of Ethiopia&apos;s leading
              multidisciplinary design firms. Our portfolio spans buildings,
              infrastructure, airports, bridges, and urban planning projects.
            </p>
            <p>
              We pride ourselves on delivering innovative, sustainable solutions
              that blend modern engineering excellence with respect for local
              context and culture. Our team of dedicated professionals brings
              together expertise in architecture, structural engineering, MEP
              design, and project management.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Milestones
          </h2>
          <div className="relative pl-6 space-y-6">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background"
                />
                <div className="bg-card border border-border rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-semibold text-primary tracking-wider">
                      {milestone.year}
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {milestone.event}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-4 pb-8"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Our Services
          </h2>
          <div className="space-y-2">
            {services.map((service, index) => (
              <motion.div
                key={service}
                whileHover={{ scale: 1.01, x: 2 }}
                className="flex items-start gap-2 rounded-lg bg-secondary px-3 py-2.5 text-[11px] text-foreground font-medium transition-colors cursor-default"
              >
                <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-primary" />
                {service}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
