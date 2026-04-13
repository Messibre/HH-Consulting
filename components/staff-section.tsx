"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Mail, Phone, Linkedin, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

interface StaffSectionProps {
  onBack: () => void
}

interface TeamMember {
  id: string
  name: string
  title: string
  department: string
  experience: string
  education: string
  specialization: string[]
  initials: string
  bio: string
}

const leadership: TeamMember[] = [
  {
    id: "1",
    name: "Hailemichael Solomon",
    title: "General Manager",
    department: "Executive",
    experience: "30+ years",
    education: "MSc Civil Engineering",
    specialization: ["Strategic Planning", "Project Management", "Structural Design"],
    initials: "HS",
    bio: "Founder and General Manager of HH Consulting with over three decades of experience in leading major infrastructure projects across Ethiopia and East Africa."
  },
  {
    id: "2",
    name: "Feven Girma",
    title: "Deputy General Manager",
    department: "Executive",
    experience: "20+ years",
    education: "M.Arch, Architecture",
    specialization: ["Operations Management", "Design Review", "Quality Control"],
    initials: "FG",
    bio: "Deputy General Manager overseeing daily operations and ensuring excellence in all project deliverables."
  },
  {
    id: "3",
    name: "Yitbarek Tekle",
    title: "Human Resource Department",
    department: "Administration",
    experience: "15+ years",
    education: "MBA, Human Resources",
    specialization: ["HR Management", "Talent Development", "Organizational Culture"],
    initials: "YT",
    bio: "Leading the HR department with focus on building and nurturing a world-class engineering team."
  },
  {
    id: "4",
    name: "Dibora Mesfin",
    title: "Bid Department Head",
    department: "Business Development",
    experience: "12+ years",
    education: "BSc Civil Engineering",
    specialization: ["Tender Management", "Contract Negotiation", "Cost Estimation"],
    initials: "DM",
    bio: "Head of Bid Department responsible for securing major projects through competitive tendering."
  },
  {
    id: "5",
    name: "Hailegiorgis Solomon",
    title: "IT Department Head",
    department: "Technology",
    experience: "10+ years",
    education: "MSc Information Technology",
    specialization: ["BIM Implementation", "Digital Infrastructure", "CAD Systems"],
    initials: "HS",
    bio: "Leading digital transformation initiatives and maintaining cutting-edge technology infrastructure."
  },
]

const departments = [
  { name: "Architecture", count: 45, color: "bg-amber-500" },
  { name: "Structural", count: 38, color: "bg-blue-500" },
  { name: "MEP", count: 32, color: "bg-green-500" },
  { name: "Project Management", count: 25, color: "bg-purple-500" },
  { name: "Admin & Support", count: 60, color: "bg-slate-500" },
]

export function StaffSection({ onBack }: StaffSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [expandedDept, setExpandedDept] = useState<string | null>(null)

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
            <Image src="/images/hh-logo.jpg" alt="HH" width={32} height={32} className="object-cover" />
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src="/images/stadium.jpg"
          alt="Our Team"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-6 left-5 right-5"
        >
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-1">Meet Our</p>
          <h1 className="font-heading text-2xl font-bold text-foreground">Team</h1>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-8">
        {/* Staff Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-lg font-semibold text-foreground">Our Workforce</h2>
            <span className="text-2xl font-bold text-primary">200+</span>
          </div>
          <div className="space-y-3">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-muted-foreground">{dept.name}</span>
                  <span className="text-[11px] font-medium text-foreground">{dept.count}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(dept.count / 60) * 100}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className={`h-full ${dept.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">Leadership Team</h2>
          <div className="space-y-3">
            {leadership.map((member, index) => (
              <motion.button
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedMember(member)}
                className="w-full bg-card border border-border rounded-xl p-4 flex items-center gap-4 text-left group"
              >
                {/* Avatar */}
                <motion.div 
                  whileHover={{ rotate: 5 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0"
                >
                  <span className="font-heading text-lg font-bold text-primary-foreground">{member.initials}</span>
                </motion.div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {member.name}
                  </p>
                  <p className="text-[11px] text-primary mb-1">{member.title}</p>
                  <p className="text-[10px] text-muted-foreground">{member.experience} experience</p>
                </div>

                {/* Arrow indicator */}
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-4 pb-8"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">Technical Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "AutoCAD", "Revit", "SketchUp", "ETABS", "SAP2000", 
              "Primavera", "MS Project", "Rhino", "Lumion", "ArchiCAD"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
                className="px-3 py-1.5 bg-secondary text-[10px] text-foreground rounded-full font-medium cursor-default transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setSelectedMember(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl max-h-[80vh] overflow-y-auto"
            >
              {/* Handle */}
              <div className="flex justify-center py-3">
                <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
              </div>

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </motion.button>

              {/* Content */}
              <div className="px-6 pb-8">
                {/* Avatar & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-primary-foreground">{selectedMember.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{selectedMember.name}</h3>
                    <p className="text-sm text-primary">{selectedMember.title}</p>
                    <p className="text-xs text-muted-foreground">{selectedMember.department} Department</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {selectedMember.bio}
                </p>

                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Education</p>
                      <p className="text-xs text-foreground">{selectedMember.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Specializations</p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedMember.specialization.map((spec) => (
                          <span key={spec} className="px-2 py-1 bg-primary/10 text-primary text-[10px] rounded-md">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex gap-3 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-secondary rounded-xl text-sm text-foreground"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary rounded-xl text-sm text-primary-foreground"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
