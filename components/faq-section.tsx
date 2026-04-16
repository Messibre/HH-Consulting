"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronDown, HelpCircle } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

interface FAQProps {
  onBack: () => void;
  onContact: () => void;
}

const faqs = [
  {
    category: "Services",
    questions: [
      {
        q: "What services does HH Consulting offer?",
        a: "We provide comprehensive architectural design, structural engineering, MEP engineering, project management, construction supervision, feasibility studies, and urban planning services for buildings, infrastructure, airports, bridges, and more.",
      },
      {
        q: "Do you work on residential projects?",
        a: "Yes, we handle projects of all scales including residential (single-family to high-rise apartments), commercial, industrial, institutional, and infrastructure projects.",
      },
      {
        q: "What is your design process?",
        a: "Our process includes: 1) Initial consultation & site analysis, 2) Concept design & feasibility, 3) Schematic design, 4) Design development, 5) Construction documents, 6) Bidding assistance, 7) Construction administration & supervision.",
      },
    ],
  },
  {
    category: "Projects",
    questions: [
      {
        q: "What types of projects have you completed?",
        a: "We have completed 350+ projects including airports (Axum, Jimma, Gambela), stadiums, hospitals, universities, hotels, bridges, roads, irrigation systems, and mixed-use developments across Ethiopia and East Africa.",
      },
      {
        q: "Do you work on international projects?",
        a: "Yes, we have successfully completed projects in Djibouti, Kenya, and other East African countries. We are equipped to handle international projects with our experienced team.",
      },
      {
        q: "Can I see examples of your work?",
        a: "Absolutely! Visit our Projects section to explore our portfolio with detailed project information, images, and specifications. You can also download our company profile for more comprehensive documentation.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        q: "How long does a typical project take?",
        a: "Project timelines vary based on scope and complexity. A residential design might take 2-4 months, while large commercial or infrastructure projects can take 6-18 months for design phase. We provide detailed timelines during initial consultation.",
      },
      {
        q: "Do you provide construction supervision?",
        a: "Yes, we offer comprehensive construction supervision services to ensure the built project matches the design intent and meets quality standards. This is highly recommended for complex projects.",
      },
      {
        q: "What deliverables can I expect?",
        a: "Depending on project scope: architectural drawings, structural calculations and drawings, MEP designs, 3D renderings, specifications, BOQ (Bill of Quantities), and construction supervision reports.",
      },
    ],
  },
  {
    category: "Business",
    questions: [
      {
        q: "How do I request a consultation?",
        a: "You can reach us through our Contact page, call us at +251 11 868 3830, or email hhconsultingarchitectengineers@gmail.com. We typically respond within 24-48 hours.",
      },
      {
        q: "What are your payment terms?",
        a: "Payment terms are discussed during contract negotiation and typically involve milestone-based payments. We offer flexible arrangements based on project type and client requirements.",
      },
      {
        q: "Do you offer remote consultations?",
        a: "Yes, we conduct virtual consultations via video conferencing for clients who cannot visit our office. We also use digital collaboration tools for project coordination.",
      },
    ],
  },
];

export function FAQSection({ onBack, onContact }: FAQProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 text-foreground/80 hover:text-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-xs tracking-wider">BACK</span>
        </motion.button>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-primary/30">
            <Image
              src="/images/hh-logo.jpg"
              alt="HH"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="px-5 py-8 pb-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <HelpCircle className="w-6 h-6 text-primary" />
            <p className="text-primary text-[10px] tracking-[0.3em] uppercase">
              Common Questions
            </p>
          </div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            FAQ
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Find answers to frequently asked questions
          </p>
        </motion.div>

        {/* FAQ Categories */}
        {faqs.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIdx * 0.1 }}
            className="mb-6"
          >
            <p className="text-[10px] text-primary tracking-[0.2em] uppercase mb-3">
              {category.category}
            </p>
            <div className="space-y-2">
              {category.questions.map((item, qIdx) => {
                const itemId = `${catIdx}-${qIdx}`;
                const isOpen = openItems.includes(itemId);

                return (
                  <motion.div
                    key={qIdx}
                    className="bg-card border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full p-4 flex items-start justify-between gap-3 text-left"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {item.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-4 pb-4 pt-0">
                            <div className="border-t border-border pt-3">
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card border border-border rounded-xl p-5 text-center"
        >
          <p className="text-sm text-foreground mb-2">Still have questions?</p>
          <p className="text-xs text-muted-foreground mb-4">
            Our team is here to help you with any inquiries
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContact}
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
