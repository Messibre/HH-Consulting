"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  image: string
  category: string
}

const projects: Project[] = [
  {
    id: "airport",
    number: "01",
    title: "AIRPORT",
    subtitle: "TERMINAL",
    image: "/images/airport-terminal.jpg",
    category: "Aviation",
  },
  {
    id: "stadium",
    number: "02",
    title: "NATIONAL",
    subtitle: "STADIUM",
    image: "/images/stadium.jpg",
    category: "Sports",
  },
  {
    id: "bridge",
    number: "03",
    title: "CABLE",
    subtitle: "BRIDGE",
    image: "/images/bridge-design.jpg",
    category: "Infrastructure",
  },
  {
    id: "hospital",
    number: "04",
    title: "MEDICAL",
    subtitle: "CENTER",
    image: "/images/hospital.jpg",
    category: "Healthcare",
  },
  {
    id: "tower",
    number: "05",
    title: "MIXED-USE",
    subtitle: "TOWER",
    image: "/images/hero-building.jpg",
    category: "Commercial",
  },
  {
    id: "highway",
    number: "06",
    title: "HIGHWAY",
    subtitle: "INTERCHANGE",
    image: "/images/infrastructure.jpg",
    category: "Infrastructure",
  },
]

interface StaggeredGridProps {
  onSelectProject: (project: Project) => void
}

export function StaggeredGrid({ onSelectProject }: StaggeredGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="min-h-screen bg-background px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="font-heading text-xs tracking-widest text-muted-foreground uppercase">
            Portfolio
          </h2>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Our Projects
          </h1>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
          <svg
            className="h-5 w-5 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </button>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0
          const heights = ["h-48", "h-56", "h-44", "h-52", "h-60", "h-40"]
          const height = heights[index % heights.length]
          
          return (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl ${height} ${isEven ? "mt-0" : "mt-6"}`}
              onClick={() => onSelectProject(project)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500"
                style={{
                  transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="font-heading text-[10px] tracking-wider text-primary/80">
                  {project.category}
                </p>
                <h3 className="font-heading text-xs font-medium tracking-wider text-white/70">
                  {project.subtitle}
                </h3>
                <h2 className="font-heading text-lg font-bold tracking-wide text-white">
                  {project.title}
                </h2>
              </div>
              <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm">
                <span className="font-heading text-[10px] font-medium text-white">
                  {project.number}
                </span>
              </div>
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}

export type { Project }
