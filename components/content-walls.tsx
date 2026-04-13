"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

interface ContentItem {
  id: string;
  number: string;
  title: string;
  project: string;
  function: string;
  location: string;
  client: string;
  value: string;
  year: string;
  keyConcept: string[];
  features: string[];
  grossArea: string;
  image: string;
}

const categoryContents: Record<string, ContentItem[]> = {
  "building-designs": [
    {
      id: "alibira-hospital",
      number: "01",
      title: "HEALTHCARE",
      project: "DR. AR. ALIBIRA GENERAL HOSPITAL",
      function: "Healthcare Facility",
      location: "Haramaya, Ethiopia",
      client: "Ali Birra Foundation",
      value: "2,829,723,466 ETB",
      year: "2025",
      keyConcept: [
        "Modern healthcare design",
        "Patient-centered spaces",
        "Natural lighting integration",
      ],
      features: [
        "Healing gardens",
        "Advanced HVAC systems",
        "Accessibility compliant",
        "Energy efficient",
      ],
      grossArea: "45,000 sqm",
      image: "/images/hospital.jpg",
    },
    {
      id: "kebede-tower",
      number: "02",
      title: "MIXED-USE",
      project: "KEBEDE MIXED USE G+34",
      function: "Mixed-use Development",
      location: "Addis Ababa, Ethiopia",
      client: "Kebede Chkual",
      value: "6,600,000,000 ETB",
      year: "2025",
      keyConcept: [
        "Vertical urbanism",
        "Sky gardens integration",
        "Smart building systems",
      ],
      features: [
        "Grade A offices",
        "Retail podium",
        "Underground parking",
        "Green certification",
      ],
      grossArea: "85,000 sqm",
      image: "/images/mixed-use-tower.jpg",
    },
    {
      id: "churchill-hotel",
      number: "03",
      title: "HOSPITALITY",
      project: "CHURCHILL HOTEL",
      function: "Luxury Hotel",
      location: "Addis Ababa, Ethiopia",
      client: "Endale and Families PLC",
      value: "1,302,723,466 ETB",
      year: "2025",
      keyConcept: [
        "Heritage integration",
        "Luxury hospitality",
        "Cultural storytelling",
      ],
      features: [
        "Premium suites",
        "Conference facilities",
        "Rooftop restaurant",
        "Spa center",
      ],
      grossArea: "35,000 sqm",
      image: "/images/hotel.jpg",
    },
    {
      id: "haramaya-guest",
      number: "04",
      title: "INSTITUTIONAL",
      project: "HARAMAYA UNIVERSITY GUEST HOUSE",
      function: "University Accommodation",
      location: "Haramaya, Ethiopia",
      client: "Haramaya University",
      value: "1,960,447,567 ETB",
      year: "2025",
      keyConcept: [
        "Academic hospitality",
        "Sustainable design",
        "Campus integration",
      ],
      features: [
        "Modern rooms",
        "Conference halls",
        "Dining facilities",
        "Landscaped gardens",
      ],
      grossArea: "12,000 sqm",
      image: "/images/university.jpg",
    },
    {
      id: "teskaro-tower",
      number: "05",
      title: "COMMERCIAL",
      project: "TESKARO BEHAME G+12",
      function: "Commercial Building",
      location: "Addis Ababa, Ethiopia",
      client: "Teskaro Behame PLC",
      value: "780,010,894 ETB",
      year: "2025",
      keyConcept: [
        "Modern office design",
        "Energy efficiency",
        "Urban connectivity",
      ],
      features: [
        "Open floor plans",
        "Smart systems",
        "Green spaces",
        "Parking structure",
      ],
      grossArea: "28,000 sqm",
      image: "/images/hero-building.jpg",
    },
    {
      id: "tsehay-apartment",
      number: "06",
      title: "RESIDENTIAL",
      project: "TSEHAY 36 APARTMENT",
      function: "Residential Complex",
      location: "Addis Ababa, Ethiopia",
      client: "Tsehay 36 Housing Cooperative",
      value: "888,000,000 ETB",
      year: "2025",
      keyConcept: ["Community living", "Modern amenities", "Affordable luxury"],
      features: [
        "Family units",
        "Common areas",
        "Security systems",
        "Playground",
      ],
      grossArea: "42,000 sqm",
      image: "/images/apartment.jpg",
    },
    {
      id: "bule-hora-stadium",
      number: "07",
      title: "SPORTS",
      project: "BULE HORA INTERNATIONAL STADIUM",
      function: "Sports & Entertainment Venue",
      location: "Bule Hora, Oromia, Ethiopia",
      client: "Bule Hora University",
      value: "4,000,000,000 ETB",
      year: "2022",
      keyConcept: [
        "Crowd management",
        "Acoustic optimization",
        "Multi-purpose flexibility",
      ],
      features: [
        "60,000 seats",
        "VIP facilities",
        "Media center",
        "Training facilities",
      ],
      grossArea: "95,000 sqm",
      image: "/images/stadium.jpg",
    },
    {
      id: "merkato-mixed",
      number: "08",
      title: "COMMERCIAL",
      project: "MERKATO MIXED-USE",
      function: "Commercial Complex",
      location: "Addis Ketema, Addis Ababa",
      client: "Merkato Ye Biloket Betoch PLC",
      value: "500,000,000 ETB",
      year: "2023",
      keyConcept: ["Urban renewal", "Commercial hub", "Pedestrian-friendly"],
      features: ["Retail spaces", "Offices", "Food court", "Parking"],
      grossArea: "32,000 sqm",
      image: "/images/real-estate.jpg",
    },
  ],
  "terminal-design": [
    {
      id: "axum-airport",
      number: "01",
      title: "AVIATION",
      project: "AXUM INTERNATIONAL AIRPORT",
      function: "Aviation Terminal & Airfield",
      location: "Axum, Tigray, Ethiopia",
      client: "Ethiopian Airlines Group",
      value: "290,000,000 ETB",
      year: "2020",
      keyConcept: [
        "Passenger flow optimization",
        "Ethiopian architectural motifs",
        "Sustainable systems",
      ],
      features: [
        "Smart check-in",
        "Biometric systems",
        "Modular design",
        "Climate responsive",
      ],
      grossArea: "45,000 sqm",
      image: "/images/airport-terminal.jpg",
    },
    {
      id: "jima-airport",
      number: "02",
      title: "AVIATION",
      project: "JIMMA INTERNATIONAL AIRPORT",
      function: "Aviation Terminal",
      location: "Jimma, Ethiopia",
      client: "Ethiopian Airlines Group",
      value: "269,752,753 ETB",
      year: "2017",
      keyConcept: [
        "Regional connectivity",
        "Modern facilities",
        "Efficient operations",
      ],
      features: [
        "Terminal building",
        "Control tower",
        "Cargo facilities",
        "Parking",
      ],
      grossArea: "38,000 sqm",
      image: "/images/airport-terminal.jpg",
    },
    {
      id: "gambela-airport",
      number: "03",
      title: "AVIATION",
      project: "GAMBELA INTERNATIONAL AIRPORT",
      function: "Aviation Terminal",
      location: "Gambela Regional State, Ethiopia",
      client: "Ethiopian Airlines Group",
      value: "342,730,288 ETB",
      year: "2021",
      keyConcept: [
        "Regional hub",
        "Modern infrastructure",
        "Sustainable design",
      ],
      features: [
        "Passenger terminal",
        "Cargo handling",
        "Fire station",
        "Access roads",
      ],
      grossArea: "42,000 sqm",
      image: "/images/airport-terminal.jpg",
    },
    {
      id: "haramaya-bus",
      number: "04",
      title: "TRANSPORTATION",
      project: "HARAMAYA UNIVERSITY BUS TERMINAL",
      function: "Bus Terminal Complex",
      location: "Haramaya, Ethiopia",
      client: "Haramaya University",
      value: "150,000,000 ETB",
      year: "2022",
      keyConcept: [
        "Campus connectivity",
        "Modern facilities",
        "Sustainable systems",
      ],
      features: ["Modern garage", "Fuel station", "Cafeteria", "Tools store"],
      grossArea: "8,000 sqm",
      image: "/images/infrastructure.jpg",
    },
  ],
  "bridge-design": [
    {
      id: "sidama-bridges",
      number: "01",
      title: "INFRASTRUCTURE",
      project: "SIDAMA ROADS AUTHORITY BRIDGES",
      function: "River Crossing Infrastructure",
      location: "Sidama Region, Ethiopia",
      client: "Sidama Roads Authority",
      value: "Supplementary Detail Engineering",
      year: "2023",
      keyConcept: [
        "Structural elegance",
        "Seismic resilience",
        "Regional connectivity",
      ],
      features: [
        "Sherero Bridge",
        "Burure Bridge",
        "Aredo Bridge",
        "Boreshebele Bridge",
      ],
      grossArea: "4 Bridge Projects",
      image: "/images/bridge-design.jpg",
    },
  ],
  infrastructures: [
    {
      id: "tiya-heritage",
      number: "01",
      title: "HERITAGE",
      project: "TIYA-SUTEN WORLD HERITAGE PARK",
      function: "Tourism Development",
      location: "Tiya Town, Ethiopia",
      client: "Central Ethiopia Regional Government",
      value: "UNESCO Heritage Project",
      year: "2023",
      keyConcept: [
        "Heritage preservation",
        "Tourism development",
        "Cultural storytelling",
      ],
      features: [
        "Visitor center",
        "Museum",
        "Landscaping",
        "Access infrastructure",
      ],
      grossArea: "Heritage Site",
      image: "/images/heritage-park.jpg",
    },
    {
      id: "haramaya-admin",
      number: "02",
      title: "INSTITUTIONAL",
      project: "HARAMAYA UNIVERSITY ADMIN BUILDING",
      function: "Administrative Complex",
      location: "Haramaya, Ethiopia",
      client: "Haramaya University",
      value: "1,400,000,000 ETB",
      year: "2021",
      keyConcept: [
        "Academic excellence",
        "Modern administration",
        "Campus landmark",
      ],
      features: [
        "Executive offices",
        "Conference halls",
        "Archives",
        "Landscaping",
      ],
      grossArea: "15,000 sqm",
      image: "/images/university.jpg",
    },
    {
      id: "suzo-industrial",
      number: "03",
      title: "INDUSTRIAL",
      project: "SUZO INDUSTRY PLC",
      function: "Industrial Complex",
      location: "Gelan, Ethiopia",
      client: "Suzo Industry PLC",
      value: "190,020,000 ETB",
      year: "2016",
      keyConcept: [
        "Industrial efficiency",
        "Modern facilities",
        "Sustainable operations",
      ],
      features: [
        "Production halls",
        "Warehouses",
        "Admin building",
        "Utilities",
      ],
      grossArea: "25,000 sqm",
      image: "/images/industrial.jpg",
    },
    {
      id: "habesha-steel",
      number: "04",
      title: "INDUSTRIAL",
      project: "HABESHA STEEL PLC FACTORY",
      function: "Steel Manufacturing",
      location: "Dukem, Ethiopia",
      client: "Habesha Steel PLC",
      value: "300,115,000 ETB",
      year: "2016",
      keyConcept: [
        "Heavy industry",
        "Modern manufacturing",
        "Safety standards",
      ],
      features: ["Production facility", "Storage", "Quality control", "Admin"],
      grossArea: "35,000 sqm",
      image: "/images/industrial.jpg",
    },
    {
      id: "bule-hora-uni",
      number: "05",
      title: "EDUCATIONAL",
      project: "BULE HORA UNIVERSITY",
      function: "University Campus",
      location: "Bule Hora, Ethiopia",
      client: "Bule Hora University",
      value: "7,000,000,000 ETB",
      year: "2019",
      keyConcept: [
        "Academic excellence",
        "Campus master plan",
        "Student-centered",
      ],
      features: [
        "Academic buildings",
        "Libraries",
        "Dormitories",
        "Sports facilities",
      ],
      grossArea: "Campus Master Plan",
      image: "/images/university.jpg",
    },
  ],
  "road-works": [
    {
      id: "bule-hora-road-a",
      number: "01",
      title: "HIGHWAY",
      project: "BULE HORA UNIVERSITY ROAD A",
      function: "Campus Road Network",
      location: "Bule Hora, Ethiopia",
      client: "Bule Hora University",
      value: "D+780 to O+860",
      year: "2022",
      keyConcept: [
        "Campus connectivity",
        "Modern standards",
        "Drainage integration",
      ],
      features: [
        "Curb stone work",
        "Asphalt paving",
        "Sub base work",
        "Drainage",
      ],
      grossArea: "Road Section A",
      image: "/images/road-construction.jpg",
    },
    {
      id: "bule-hora-road-b",
      number: "02",
      title: "HIGHWAY",
      project: "BULE HORA UNIVERSITY ROAD B",
      function: "Campus Road Network",
      location: "Bule Hora, Ethiopia",
      client: "Bule Hora University",
      value: "0+780 to O+860",
      year: "2022",
      keyConcept: [
        "Infrastructure development",
        "Quality construction",
        "Campus mobility",
      ],
      features: [
        "Curb stone work",
        "Asphalt paving",
        "Road markings",
        "Lighting",
      ],
      grossArea: "Road Section B",
      image: "/images/road-construction.jpg",
    },
  ],
  irrigations: [
    {
      id: "irrigation-1",
      number: "01",
      title: "WATER RESOURCE",
      project: "AGRICULTURAL IRRIGATION SYSTEM",
      function: "Agricultural Infrastructure",
      location: "Ethiopia",
      client: "Regional Agricultural Office",
      value: "Engineering Services",
      year: "2023",
      keyConcept: [
        "Water management",
        "Sustainable farming",
        "Resource efficiency",
      ],
      features: [
        "Canal design",
        "Pump stations",
        "Distribution networks",
        "Control systems",
      ],
      grossArea: "5,000 hectares",
      image: "/images/irrigation.jpg",
    },
  ],
  "feasibility-study": [
    {
      id: "tomato-factory",
      number: "01",
      title: "AGRO-INDUSTRY",
      project: "TOMATO FACTORY",
      function: "Food Processing Facility",
      location: "Kombolcha, Ethiopia",
      client: "Nur Belay Business PLC",
      value: "130,000,000 ETB",
      year: "2014",
      keyConcept: ["Agro-industry", "Food security", "Value addition"],
      features: [
        "Processing lines",
        "Cold storage",
        "Packaging",
        "Quality lab",
      ],
      grossArea: "8,000 sqm",
      image: "/images/industrial.jpg",
    },
    {
      id: "ersido-food",
      number: "02",
      title: "FOOD COMPLEX",
      project: "ERSIDO LEMENGO FOOD COMPLEX",
      function: "Food Processing Complex",
      location: "Doyogena Town, Ethiopia",
      client: "Ersido Lemengo Food Complex",
      value: "30,000,000 ETB",
      year: "2016",
      keyConcept: [
        "Food processing",
        "Regional development",
        "Employment creation",
      ],
      features: [
        "Processing facility",
        "Storage",
        "Admin building",
        "Utilities",
      ],
      grossArea: "5,000 sqm",
      image: "/images/industrial.jpg",
    },
  ],
  "site-works": [
    {
      id: "niss-building",
      number: "01",
      title: "INSTITUTIONAL",
      project: "NISS BUILDING",
      function: "Government Facility",
      location: "Addis Ababa, Ethiopia",
      client: "Ethiopian Airlines Group",
      value: "7,903,831 ETB",
      year: "2020",
      keyConcept: ["Security design", "Modern facilities", "Efficient layout"],
      features: ["Office spaces", "Security systems", "Parking", "Utilities"],
      grossArea: "12,000 sqm",
      image: "/images/hero-building.jpg",
    },
    {
      id: "city-light",
      number: "02",
      title: "REAL ESTATE",
      project: "CITY LIGHT REAL ESTATE",
      function: "Residential Development",
      location: "Jemo, Addis Ababa",
      client: "City Light",
      value: "1,000,000,000 ETB",
      year: "2016",
      keyConcept: ["Urban development", "Modern living", "Community design"],
      features: [
        "Residential units",
        "Landscaping",
        "Amenities",
        "Infrastructure",
      ],
      grossArea: "Large Scale Development",
      image: "/images/real-estate.jpg",
    },
  ],
  presentations: [
    {
      id: "ecole-school",
      number: "01",
      title: "EDUCATIONAL",
      project: "ECOLE DES LUMIERES SCHOOL",
      function: "International School",
      location: "Republic of Djibouti",
      client: "Ecole des Lumieres",
      value: "USD 25,000",
      year: "2020",
      keyConcept: [
        "International standards",
        "Modern education",
        "Cultural integration",
      ],
      features: ["Classrooms", "Labs", "Library", "Sports facilities"],
      grossArea: "Educational Campus",
      image: "/images/school.jpg",
    },
    {
      id: "institut-africa",
      number: "02",
      title: "EDUCATIONAL",
      project: "INSTITUT AFRICAIN DE DJIBOUTI",
      function: "Educational Institution",
      location: "Republic of Djibouti",
      client: "Institut Africain de Djibouti",
      value: "USD 25,000",
      year: "2021",
      keyConcept: ["African education", "Modern facilities", "Regional hub"],
      features: [
        "Master plan",
        "Academic buildings",
        "Landscape design",
        "Infrastructure",
      ],
      grossArea: "Campus Development",
      image: "/images/school.jpg",
    },
  ],
  "potential-clients": [
    {
      id: "greenland-hotel",
      number: "01",
      title: "HOSPITALITY",
      project: "GREENLAND TOUR AND HOTEL",
      function: "Hotel Development",
      location: "Addis Ababa, Ethiopia",
      client: "Greenland Tour and Hotel PLC",
      value: "19,000,000 ETB",
      year: "2015",
      keyConcept: [
        "Tourism hospitality",
        "Ethiopian heritage",
        "Modern comfort",
      ],
      features: ["Guest rooms", "Restaurant", "Landscaping", "Amenities"],
      grossArea: "Hotel Complex",
      image: "/images/hotel.jpg",
    },
    {
      id: "hazal-real-estate",
      number: "02",
      title: "REAL ESTATE",
      project: "HAZAL REAL ESTATE",
      function: "Property Development",
      location: "Addis Ababa, Ethiopia",
      client: "Hazal Real Estate",
      value: "19,000,000 ETB",
      year: "2017",
      keyConcept: ["Quality housing", "Urban development", "Modern amenities"],
      features: ["Residential units", "Landscaping", "Security", "Utilities"],
      grossArea: "Development Project",
      image: "/images/real-estate.jpg",
    },
  ],
};

interface ContentWallsProps {
  categoryId: string;
  categoryName: string;
  onBack: () => void;
}

export function ContentWalls({
  categoryId,
  categoryName,
  onBack,
}: ContentWallsProps) {
  const contents =
    categoryContents[categoryId] || categoryContents["building-designs"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentContent = contents[currentIndex];

  const goNext = () => {
    if (currentIndex < contents.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-4 bg-gradient-to-b from-black/70 to-transparent"
      >
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-1.5 text-foreground/80 hover:text-foreground transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-[10px] tracking-wider uppercase">Back</span>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[10px] tracking-[0.2em] text-primary uppercase font-medium"
        >
          {categoryName}
        </motion.p>

        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex h-6 w-6 items-center justify-center rounded bg-primary overflow-hidden"
          >
            <Image
              src="/images/hh-logo.jpg"
              alt="HH"
              width={24}
              height={24}
              className="object-cover"
            />
          </motion.div>
          <ThemeToggle />
        </div>
      </motion.div>

      {/* Main Content - Two Walls Side by Side */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentContent.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex h-full"
        >
          {/* Left Wall - Image */}
          <div className="w-1/2 h-full relative">
            <Image
              src={currentContent.image}
              alt={currentContent.project}
              fill
              className="object-cover"
              quality={100}
            />
            {/* Project title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-[8px] text-primary tracking-[0.15em] uppercase">
                {currentContent.title}
              </p>
              <p className="text-[11px] font-semibold text-white leading-tight mt-0.5">
                {currentContent.project}
              </p>
            </div>
            {/* Subtle gradient overlay at edges */}
            <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-stone-100/30 to-transparent" />
          </div>

          {/* Right Wall - Description Panel */}
          <div className="w-1/2 h-full bg-gradient-to-b from-stone-50 to-stone-100 relative flex flex-col justify-center px-3 py-16 overflow-y-auto">
            {/* Wall texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              }}
            />

            {/* Content */}
            <div className="relative space-y-3">
              {/* Number and Title */}
              <div className="border-b border-stone-300 pb-2">
                <p className="text-xl font-light text-stone-800 tracking-wider">
                  {currentContent.number}
                </p>
                <p className="text-[8px] font-semibold tracking-[0.2em] text-primary mt-0.5">
                  PROJECT DETAILS
                </p>
              </div>

              {/* Project Name */}
              <div>
                <p className="text-[7px] tracking-[0.15em] text-stone-400 uppercase mb-0.5">
                  Project
                </p>
                <p className="text-[10px] font-semibold text-stone-800 leading-tight">
                  {currentContent.project}
                </p>
              </div>

              {/* Location & Client */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-[7px] tracking-[0.15em] text-stone-400 uppercase mb-0.5">
                    Location
                  </p>
                  <p className="text-[8px] text-stone-700 leading-tight">
                    {currentContent.location}
                  </p>
                </div>
                <div>
                  <p className="text-[7px] tracking-[0.15em] text-stone-400 uppercase mb-0.5">
                    Client
                  </p>
                  <p className="text-[8px] text-stone-700 leading-tight">
                    {currentContent.client}
                  </p>
                </div>
              </div>

              {/* Function */}
              <div>
                <p className="text-[7px] tracking-[0.15em] text-stone-400 uppercase mb-0.5">
                  Function
                </p>
                <p className="text-[9px] text-stone-700 leading-tight">
                  {currentContent.function}
                </p>
              </div>

              {/* Key Concept */}
              <div>
                <p className="text-[7px] tracking-[0.15em] text-stone-400 uppercase mb-1">
                  Key Concept
                </p>
                <ul className="space-y-0.5">
                  {currentContent.keyConcept.map((concept, i) => (
                    <li
                      key={i}
                      className="text-[8px] text-stone-600 leading-tight flex items-start gap-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-1 flex-shrink-0" />
                      {concept}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <p className="text-[7px] tracking-[0.15em] text-stone-400 uppercase mb-1">
                  Features
                </p>
                <div className="flex flex-wrap gap-1">
                  {currentContent.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-[7px] bg-stone-200 text-stone-600 px-1.5 py-0.5 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Value, Year, Area */}
              <div className="pt-2 border-t border-stone-200 grid grid-cols-2 gap-2">
                <div>
                  <p className="text-[7px] tracking-[0.15em] text-stone-400 uppercase mb-0.5">
                    Value
                  </p>
                  <p className="text-[8px] font-semibold text-primary">
                    {currentContent.value}
                  </p>
                </div>
                <div>
                  <p className="text-[7px] tracking-[0.15em] text-stone-400 uppercase mb-0.5">
                    Year
                  </p>
                  <p className="text-[8px] font-semibold text-stone-800">
                    {currentContent.year}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-[7px] tracking-[0.15em] text-stone-400 uppercase mb-0.5">
                    Gross Area
                  </p>
                  <p className="text-[9px] font-semibold text-stone-800">
                    {currentContent.grossArea}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 right-4 z-20 flex items-center gap-2"
      >
        {/* Page indicator */}
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[9px] text-stone-500 font-medium bg-white/80 px-2 py-1 rounded"
        >
          {currentIndex + 1} / {contents.length}
        </motion.span>

        {/* Previous */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all
            ${
              currentIndex === 0
                ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                : "bg-white text-stone-700 hover:bg-primary hover:text-primary-foreground shadow-lg"
            }`}
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        {/* Next */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goNext}
          disabled={currentIndex === contents.length - 1}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all
            ${
              currentIndex === contents.length - 1
                ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                : "bg-white text-stone-700 hover:bg-primary hover:text-primary-foreground shadow-lg"
            }`}
        >
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
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
