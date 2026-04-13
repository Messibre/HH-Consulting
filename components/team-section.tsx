"use client"

import { User } from "lucide-react"

const teamMembers = [
  {
    name: "Hailemichael Solomon",
    role: "General Manager",
    initial: "HS"
  },
  {
    name: "Feven Girma",
    role: "Deputy General Manager",
    initial: "FG"
  },
  {
    name: "Yitbarek Tekle",
    role: "Human Resource Department",
    initial: "YT"
  },
  {
    name: "Dibora Mesfin",
    role: "Bid Department Head",
    initial: "DM"
  },
  {
    name: "Hailegiorgis Solomon",
    role: "IT Department",
    initial: "HS"
  },
]

export function TeamSection() {
  return (
    <section className="py-16 px-5 bg-card">
      <div className="max-w-lg mx-auto">
        <p className="text-primary font-medium tracking-[0.2em] text-xs uppercase mb-3">
          Leadership
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
          Our Team
        </h2>

        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{member.initial}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-foreground font-semibold text-sm">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-xs mt-0.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <User className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold text-sm">54+ Professional Staff</span>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Including architects, engineers, CAD experts, contract administrators, and quantity surveyors.
          </p>
        </div>
      </div>
    </section>
  )
}
