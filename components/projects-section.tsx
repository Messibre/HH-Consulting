"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "building", label: "Buildings" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "terminal", label: "Terminals" },
  { id: "bridge", label: "Bridges" },
];

const projects = [
  {
    id: 1,
    category: "building",
    title: "Dr. Ali Birra General Hospital",
    location: "Haramaya, Ethiopia",
    value: "2.8B ETB",
    image: "/images/hospital.jpg",
    description:
      "13-story state-of-the-art medical facility with complete architectural and engineering design.",
  },
  {
    id: 2,
    category: "building",
    title: "Kebede Mixed Use G+34",
    location: "Addis Ababa, Ethiopia",
    value: "6.6B ETB",
    image: "/images/hero-building.jpg",
    description:
      "Premium 34-story mixed-use development featuring modern architectural excellence.",
  },
  {
    id: 3,
    category: "terminal",
    title: "Axum International Airport",
    location: "Axum, Tigray",
    value: "290M ETB",
    image: "/images/airport-terminal.jpg",
    description:
      "Complete airport terminal design with airfield and facility building maintenance.",
  },
  {
    id: 4,
    category: "infrastructure",
    title: "Bule Hora International Stadium",
    location: "Oromia, Ethiopia",
    value: "4B ETB",
    image: "/images/stadium.jpg",
    description:
      "60,000 seat international stadium with world-class facilities and infrastructure.",
  },
  {
    id: 5,
    category: "bridge",
    title: "Tiya-Suten Heritage Park",
    location: "Tiya Town, Ethiopia",
    value: "Project Value",
    image: "/images/bridge-design.jpg",
    description:
      "UNESCO World Heritage site tourism development with architectural and landscape design.",
  },
  {
    id: 6,
    category: "infrastructure",
    title: "Highway Infrastructure",
    location: "Multiple Regions",
    value: "Varies",
    image: "/images/infrastructure.jpg",
    description:
      "Road and highway design projects connecting communities across Ethiopia.",
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 px-5 bg-background">
      <div className="max-w-lg mx-auto">
        <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-3">
          Selected Work
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
          Featured Projects
        </h2>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() =>
                setSelectedProject(
                  selectedProject?.id === project.id ? null : project,
                )
              }
              className={cn(
                "group cursor-pointer rounded-xl overflow-hidden border border-border bg-card transition-all duration-300",
                selectedProject?.id === project.id && "border-primary",
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={index < 2 ? "eager" : "lazy"}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Project Number */}
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-mono px-2 py-1 rounded">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-foreground font-bold text-lg mb-1 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              <div
                className={cn(
                  "grid transition-all duration-300",
                  selectedProject?.id === project.id
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-4 pt-0 border-t border-border mt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 pt-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Project Value
                        </p>
                        <p className="text-primary font-bold">
                          {project.value}
                        </p>
                      </div>
                      <button className="flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
