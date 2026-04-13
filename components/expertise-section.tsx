"use client"

import { Building2, Compass, FileSearch, HardHat, MapPin } from "lucide-react"

const expertiseItems = [
  {
    icon: Building2,
    number: "01",
    title: "Architectural & Engineering Design",
    description: "Architectural, Structural, Electrical, Mechanical, Sanitary and Plumbing Systems Design"
  },
  {
    icon: Compass,
    number: "02", 
    title: "Urban & Environmental",
    description: "Urban and Regional Master Plans, Environmental Impact Assessments, Landscape Architecture"
  },
  {
    icon: FileSearch,
    number: "03",
    title: "Feasibility & Planning",
    description: "Feasibility Studies, Strategic Planning, Site Analysis, Concept Development and Cost Estimations"
  },
  {
    icon: HardHat,
    number: "04",
    title: "Construction Supervision",
    description: "Contract Administration, Quality Control, Site Supervision, Project Scheduling and Monitoring"
  },
  {
    icon: MapPin,
    number: "05",
    title: "Infrastructure & Civil",
    description: "Road and Highway Design, Bridge Structures, Irrigation Systems, Infrastructure Master Planning"
  }
]

export function ExpertiseSection() {
  return (
    <section className="py-16 px-5 bg-card">
      <div className="max-w-lg mx-auto">
        <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-3">
          Our Expertise
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 leading-tight">
          Comprehensive Solutions for Every Project
        </h2>

        <div className="space-y-6">
          {expertiseItems.map((item) => (
            <div 
              key={item.number}
              className="group flex gap-4 p-4 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-primary/60 text-xs font-mono">{item.number}</span>
                  <h3 className="text-foreground font-semibold text-sm">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
