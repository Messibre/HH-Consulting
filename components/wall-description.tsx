"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Project } from "./staggered-grid";

interface ProjectDetails {
  function: string;
  concept: string[];
  area: string;
  location: string;
  year: string;
}

const projectDetails: Record<string, ProjectDetails> = {
  airport: {
    function: "International passenger transport hub",
    concept: [
      "Modern terminal design",
      "Sustainable energy systems",
      "Smart passenger flow",
      "Cultural integration",
    ],
    area: "150,000 sqm",
    location: "Addis Ababa",
    year: "2023",
  },
  stadium: {
    function: "National sports & entertainment venue",
    concept: [
      "60,000 seat capacity",
      "Retractable roof system",
      "Multi-purpose design",
      "Olympic standard facilities",
    ],
    area: "85,000 sqm",
    location: "National Capital",
    year: "2022",
  },
  bridge: {
    function: "Urban transit infrastructure",
    concept: [
      "Cable-stayed structure",
      "Seismic resistance",
      "Aesthetic lighting",
      "Pedestrian accessibility",
    ],
    area: "2.4 km span",
    location: "River Crossing",
    year: "2024",
  },
  hospital: {
    function: "Regional healthcare facility",
    concept: [
      "500-bed capacity",
      "Healing environment",
      "Advanced medical systems",
      "Energy efficient design",
    ],
    area: "45,000 sqm",
    location: "Regional Center",
    year: "2023",
  },
  tower: {
    function: "Mixed-use commercial complex",
    concept: [
      "Grade-A office space",
      "Retail podium",
      "Sky gardens",
      "Smart building systems",
    ],
    area: "120,000 sqm",
    location: "Business District",
    year: "2024",
  },
  highway: {
    function: "Urban highway interchange",
    concept: [
      "Multi-level design",
      "Traffic optimization",
      "Green corridors",
      "Future expansion ready",
    ],
    area: "15 km network",
    location: "Metropolitan Area",
    year: "2023",
  },
};

interface WallDescriptionProps {
  project: Project;
  onBack: () => void;
}

export function WallDescription({ project, onBack }: WallDescriptionProps) {
  const details = projectDetails[project.id];

  return (
    <section className="relative min-h-screen bg-background">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-4">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </div>
      </header>

      {/* Content - Wall Panel */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mx-4 mt-8"
      >
        {/* 3D Wall Effect Panel */}
        <div className="relative">
          {/* Shadow layer for depth */}
          <div className="absolute -right-2 top-2 h-full w-full rounded-3xl bg-black/30" />

          {/* Main panel */}
          <div className="relative rounded-3xl bg-gradient-to-br from-stone-100 to-stone-200 p-6 shadow-2xl">
            {/* Project number */}
            <div className="mb-6 flex items-baseline gap-2">
              <span className="font-heading text-5xl font-bold text-stone-800">
                {project.number}
              </span>
              <span className="font-heading text-sm tracking-widest text-stone-500 uppercase">
                Description
              </span>
            </div>

            {/* Project title */}
            <div className="mb-6 border-b border-stone-300 pb-4">
              <p className="font-heading text-xs tracking-wider text-stone-500 uppercase">
                Project
              </p>
              <h2 className="font-heading text-xl font-bold text-stone-800">
                {project.subtitle} {project.title}
              </h2>
            </div>

            {/* Function */}
            <div className="mb-4">
              <p className="font-heading text-xs tracking-wider text-stone-500 uppercase">
                Function
              </p>
              <p className="mt-1 text-sm text-stone-700">{details.function}</p>
            </div>

            {/* Key Concept */}
            <div className="mb-4">
              <p className="font-heading text-xs tracking-wider text-stone-500 uppercase">
                Key Concept
              </p>
              <ul className="mt-2 space-y-1">
                {details.concept.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-stone-700"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Area & Location */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-stone-300 pt-4">
              <div>
                <p className="font-heading text-xs tracking-wider text-stone-500 uppercase">
                  Gross Area
                </p>
                <p className="mt-1 font-heading text-lg font-bold text-stone-800">
                  {details.area}
                </p>
              </div>
              <div>
                <p className="font-heading text-xs tracking-wider text-stone-500 uppercase">
                  Year
                </p>
                <p className="mt-1 font-heading text-lg font-bold text-stone-800">
                  {details.year}
                </p>
              </div>
            </div>

            {/* Location tag */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-800 px-4 py-2">
              <svg
                className="h-4 w-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-xs font-medium text-white">
                {details.location}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom navigation hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-0 right-0 z-10 flex justify-center"
      >
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="text-xs text-white/70">Swipe for more</span>
          <svg
            className="h-4 w-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
