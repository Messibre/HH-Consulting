"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Mail, Phone, Linkedin, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import staffData from "../staff.json";

interface StaffSectionProps {
  onBack: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  experience: string;
  education: string;
  specialization: string[];
  initials: string;
  bio: string;
  image: string | null;
  phone?: string;
  isLeadership: boolean;
}

type JsonLeadership = {
  id: string;
  name: string;
  position: string;
  department: string;
  role: string;
  responsibilities?: string[];
  experience?: string;
  expertise?: string[];
  education?: string;
  initials?: string;
  contact?: { phone?: string };
};

type JsonSupport = {
  id: string;
  name: string;
  position: string;
  department: string;
  role: string;
  responsibilities?: string[];
  initials?: string;
};

type JsonDepartment = {
  id: string;
  name: string;
  headCount: number;
};

type JsonStaffData = {
  statistics: {
    totalPermanentStaff: number;
  };
  leadership: JsonLeadership[];
  supportStaff: JsonSupport[];
  departments: JsonDepartment[];
  softwareTools?: Array<{ name: string }>;
};

const staffImageByName: Record<string, string> = {
  "Hailemichael Solomon": "/images/hailemichael-solomon.jpg",
  "Feven Girma": "/images/feven-girma.jpg",
  "Yitbarek Tekle": "/images/yitbarek-tekle.jpg",
  "Dibora Mesfin": "/images/dibora-mesfin.jpg",
  "Hailegiorgis Solomon": "/images/hailegiyorgis-solomon.jpg",
  Helen: "/images/helen-receptionist.jpg",
  "Mekdes Gebru": "/images/mekdes-receptionist.jpg",
};

const staffGalleryImages = [
  "/images/staff-1.jpg",
  "/images/staff-2.jpg",
  "/images/staff-3.jpg",
  "/images/staff-4.jpg",
  "/images/staff-5.jpg",
  "/images/staff-6.jpg",
  "/images/staff-7.jpg",
  "/images/staff-8.jpg",
  "/images/staff-9.jpg",
  "/images/staff-10.jpg",
];

const typedStaff = staffData as JsonStaffData;

function joinShort(items: string[] | undefined, fallback: string) {
  if (!items || items.length === 0) return fallback;
  return items.slice(0, 3).join(", ");
}

function mapLeadershipToMember(member: JsonLeadership): TeamMember {
  const summary =
    member.responsibilities?.[0] ?? `${member.role} at HH Consulting.`;
  return {
    id: member.id,
    name: member.name,
    title: member.position,
    department: member.department,
    experience: member.experience || "Experience not listed",
    education: member.education || "Education details available on request",
    specialization: member.expertise?.slice(0, 4) || [
      "Professional leadership",
    ],
    initials:
      member.initials ||
      member.name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join(""),
    bio: summary,
    image: staffImageByName[member.name] || null,
    phone: member.contact?.phone,
    isLeadership: true,
  };
}

function mapSupportToMember(member: JsonSupport): TeamMember {
  return {
    id: member.id,
    name: member.name,
    title: member.position,
    department: member.department,
    experience: "Support team",
    education: "Internal training and administrative operations",
    specialization: member.responsibilities?.slice(0, 3) || [
      "Administrative support",
    ],
    initials:
      member.initials ||
      member.name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join(""),
    bio: `${member.role}. ${joinShort(member.responsibilities, "Supports daily company operations.")}.`,
    image: staffImageByName[member.name] || null,
    isLeadership: false,
  };
}

const leadership = typedStaff.leadership.map(mapLeadershipToMember);
const supportTeam = typedStaff.supportStaff.map(mapSupportToMember);

const departmentColors = [
  "bg-amber-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-slate-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-indigo-500",
];

const departments = typedStaff.departments
  .slice()
  .sort((a, b) => b.headCount - a.headCount)
  .slice(0, 5)
  .map((dept, index) => ({
    name: dept.name,
    count: dept.headCount,
    color: departmentColors[index % departmentColors.length],
  }));

function StaffAvatar({
  member,
  className,
  initialsClassName,
}: {
  member: TeamMember;
  className: string;
  initialsClassName?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = member.image;
  const showImage = Boolean(imageSrc) && !imageFailed;

  if (showImage) {
    return (
      <div className={`${className} overflow-hidden bg-secondary`}>
        <Image
          src={imageSrc as string}
          alt={member.name}
          width={160}
          height={160}
          className="h-full w-full object-cover"
          onError={() => setImageFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${className} bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center`}
    >
      <span
        className={`font-heading font-bold text-primary-foreground ${initialsClassName || "text-lg"}`}
      >
        {member.initials}
      </span>
    </div>
  );
}

export function StaffSection({ onBack }: StaffSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const maxDepartmentCount = Math.max(
    ...departments.map((dept) => dept.count),
    1,
  );
  const skills = typedStaff.softwareTools
    ?.slice(0, 10)
    .map((tool) => tool.name) || ["AutoCAD", "Revit", "ETABS", "SAP2000"];

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

      {/* Hero */}
      <div className="relative h-40 overflow-hidden md:h-60 lg:h-72">
        <Image
          src="/images/staff-3.jpg"
          alt="Our Team"
          fill
          className="object-cover object-[center_top] md:object-left-top lg:object-left-top"
          quality={80}
          sizes="100vw"
          priority
        />
        <button
          type="button"
          onClick={() =>
            setPreviewImage({ src: "/images/staff-3.jpg", alt: "Our Team" })
          }
          className="absolute inset-0 z-10"
          aria-label="View team hero image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/18 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-6 left-5 right-5 z-20 pointer-events-none"
        >
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-1">
            Meet Our
          </p>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Team
          </h1>
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
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Our Workforce
            </h2>
            <span className="text-2xl font-bold text-primary">
              {typedStaff.statistics.totalPermanentStaff}+
            </span>
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
                  <span className="text-[11px] text-muted-foreground">
                    {dept.name}
                  </span>
                  <span className="text-[11px] font-medium text-foreground">
                    {dept.count}
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(dept.count / maxDepartmentCount) * 100}%`,
                    }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
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
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Leadership Team
          </h2>
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
                  className="flex-shrink-0"
                >
                  <StaffAvatar
                    member={member}
                    className="w-24 h-14 rounded-xl"
                    initialsClassName="text-base"
                  />
                </motion.div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {member.name}
                  </p>
                  <p className="text-[11px] text-primary mb-1">
                    {member.title}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {member.experience} experience
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Support Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Support Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {supportTeam.map((member, index) => (
              <motion.button
                key={member.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.08 }}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedMember(member)}
                className="w-full bg-card border border-border rounded-xl p-3 flex items-center gap-3 text-left"
              >
                <StaffAvatar
                  member={member}
                  className="w-16 h-11 rounded-lg flex-shrink-0"
                  initialsClassName="text-sm"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {member.name}
                  </p>
                  <p className="text-[11px] text-primary truncate">
                    {member.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Team Moments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="space-y-4"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Team Moments
          </h2>
          <div className="-mx-5 px-5 overflow-x-auto pb-2">
            <div className="flex gap-3 w-max">
              {staffGalleryImages.map((src, index) => (
                <motion.button
                  key={src}
                  type="button"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.04 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setPreviewImage({ src, alt: `Staff group ${index + 1}` })
                  }
                  className="relative w-52 h-32 rounded-xl overflow-hidden border border-border bg-card shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`Staff group ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="208px"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="space-y-4 pb-8"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Technical Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
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
              className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl h-[86vh] overflow-y-auto"
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
                <div className="mb-6 flex flex-col items-center text-center gap-3">
                  {selectedMember.image ? (
                    <button
                      type="button"
                      onClick={() =>
                        setPreviewImage({
                          src: selectedMember.image as string,
                          alt: selectedMember.name,
                        })
                      }
                      className="relative w-full max-w-[18rem] aspect-[1.55] rounded-2xl overflow-hidden border border-border bg-secondary"
                      aria-label={`View full photo of ${selectedMember.name}`}
                    >
                      <Image
                        src={selectedMember.image as string}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 88vw, 18rem"
                      />
                    </button>
                  ) : (
                    <StaffAvatar
                      member={selectedMember}
                      className="w-full max-w-[18rem] aspect-[1.55] rounded-2xl"
                      initialsClassName="text-2xl"
                    />
                  )}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {selectedMember.name}
                    </h3>
                    <p className="text-sm text-primary">
                      {selectedMember.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {selectedMember.department}
                    </p>
                    {selectedMember.image && (
                      <p className="text-[10px] text-muted-foreground mt-2">
                        Tap photo to view full image
                      </p>
                    )}
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
                      <svg
                        className="w-4 h-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                        Education
                      </p>
                      <p className="text-xs text-foreground">
                        {selectedMember.education}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                        Specializations
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedMember.specialization.map((spec) => (
                          <span
                            key={spec}
                            className="px-2 py-1 bg-primary/10 text-primary text-[10px] rounded-md"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex gap-3 mt-6">
                  {selectedMember.phone ? (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={`tel:${selectedMember.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-secondary rounded-xl text-sm text-foreground"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </motion.a>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-secondary rounded-xl text-sm text-foreground"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </motion.button>
                  )}
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

      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 p-4 flex items-center justify-center"
            onClick={() => setPreviewImage(null)}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              className="relative w-full max-w-5xl h-[78vh]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={previewImage.src}
                alt={previewImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
