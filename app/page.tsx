"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { CategoriesWall } from "@/components/categories-wall";
import { ContentWalls } from "@/components/content-walls";
import { SidebarNav } from "@/components/sidebar-nav";
import { AboutSection } from "@/components/about-section";
import { VisionSection } from "@/components/vision-section";
import { StaffSection } from "@/components/staff-section";
import { ContactSectionNew } from "@/components/contact-section-new";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CredentialsSection } from "@/components/credentials-section";
import { FAQSection } from "@/components/faq-section";
import { ProcessSection } from "@/components/process-section";
import { LegalSection } from "@/components/legal-section";

type View =
  | "hero"
  | "categories"
  | "content"
  | "about"
  | "vision"
  | "staff"
  | "contact"
  | "testimonials"
  | "credentials"
  | "faq"
  | "process"
  | "privacy"
  | "terms"
  | "disclaimer";

const categoryNames: Record<string, string> = {
  "site-works": "Site Works",
  presentations: "Presentations",
  "potential-clients": "Potential Clients",
  "building-designs": "Building Designs",
  infrastructures: "Infrastructures",
  "terminal-design": "Terminal Design",
  "road-works": "Road Works",
  irrigations: "Irrigations",
  "bridge-design": "Bridge Design",
  "feasibility-study": "Feasibility Study",
  "environmental-assessment": "Environmental Assessment",
};

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("hero");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleExplore = () => {
    setCurrentView("categories");
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView("content");
  };

  const handleBack = () => {
    if (currentView === "content") {
      setCurrentView("categories");
      setSelectedCategory(null);
    } else if (currentView === "categories") {
      setCurrentView("hero");
    } else if (
      [
        "about",
        "vision",
        "staff",
        "contact",
        "testimonials",
        "credentials",
        "faq",
        "process",
        "privacy",
        "terms",
        "disclaimer",
      ].includes(currentView)
    ) {
      setCurrentView("hero");
    }
  };

  const handleNavigate = (section: string) => {
    if (section === "projects") {
      setCurrentView("categories");
    } else {
      setCurrentView(section as View);
    }
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        {currentView === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HeroSection
              onExplore={handleExplore}
              onMenuOpen={() => setIsSidebarOpen(true)}
              onContact={() => setCurrentView("contact")}
            />
          </motion.div>
        )}

        {currentView === "categories" && (
          <CategoriesWall
            onSelectCategory={handleSelectCategory}
            onBack={handleBack}
            onMenuOpen={() => setIsSidebarOpen(true)}
          />
        )}

        {currentView === "content" && selectedCategory && (
          <ContentWalls
            categoryId={selectedCategory}
            categoryName={categoryNames[selectedCategory] || "Category"}
            onBack={handleBack}
          />
        )}

        {currentView === "about" && <AboutSection onBack={handleBack} />}

        {currentView === "vision" && <VisionSection onBack={handleBack} />}

        {currentView === "staff" && <StaffSection onBack={handleBack} />}

        {currentView === "contact" && <ContactSectionNew onBack={handleBack} />}

        {currentView === "testimonials" && (
          <TestimonialsSection onBack={handleBack} />
        )}

        {currentView === "credentials" && (
          <CredentialsSection onBack={handleBack} />
        )}

        {currentView === "faq" && (
          <FAQSection
            onBack={handleBack}
            onContact={() => setCurrentView("contact")}
          />
        )}

        {currentView === "process" && (
          <ProcessSection
            onBack={handleBack}
            onContact={() => setCurrentView("contact")}
          />
        )}

        {currentView === "privacy" && (
          <LegalSection type="privacy" onBack={handleBack} />
        )}

        {currentView === "terms" && (
          <LegalSection type="terms" onBack={handleBack} />
        )}

        {currentView === "disclaimer" && (
          <LegalSection type="disclaimer" onBack={handleBack} />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <SidebarNav
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={handleNavigate}
      />
    </main>
  );
}
