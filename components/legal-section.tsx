"use client"

import { motion } from "framer-motion"
import { ChevronLeft, Shield, FileText, AlertCircle } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"

interface LegalProps {
  type: "privacy" | "terms" | "disclaimer"
  onBack: () => void
}

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    icon: Shield,
    lastUpdated: "January 2024",
    sections: [
      {
        heading: "Information We Collect",
        content: "We collect information you provide directly to us, such as when you request a consultation, submit a contact form, or communicate with us. This may include your name, email address, phone number, company name, and project details."
      },
      {
        heading: "How We Use Your Information",
        content: "We use the information we collect to respond to your inquiries, provide consulting services, send you project updates and communications, improve our services, and comply with legal obligations."
      },
      {
        heading: "Information Sharing",
        content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to protect our rights and safety."
      },
      {
        heading: "Data Security",
        content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      },
      {
        heading: "Contact Us",
        content: "For questions about this Privacy Policy, please contact us at hhconsultingarchitectengineers@gmail.com or +251 11 868 3830."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    icon: FileText,
    lastUpdated: "January 2024",
    sections: [
      {
        heading: "Services",
        content: "HH Consulting Architects & Engineers PLC provides architectural design, engineering consulting, project management, and construction supervision services. All services are subject to a formal agreement between the parties."
      },
      {
        heading: "Intellectual Property",
        content: "All designs, drawings, specifications, and documents produced by HH Consulting remain our intellectual property until full payment is received. Unauthorized use, reproduction, or distribution is prohibited."
      },
      {
        heading: "Client Responsibilities",
        content: "Clients are responsible for providing accurate project information, timely feedback, necessary permits and approvals, and access to project sites when required."
      },
      {
        heading: "Payment Terms",
        content: "Payment terms are outlined in individual service agreements. Standard terms involve milestone-based payments as specified in the contract."
      },
      {
        heading: "Limitation of Liability",
        content: "HH Consulting's liability is limited to the fees paid for services. We are not liable for indirect, consequential, or incidental damages arising from our services."
      }
    ]
  },
  disclaimer: {
    title: "Disclaimer",
    icon: AlertCircle,
    lastUpdated: "January 2024",
    sections: [
      {
        heading: "Professional Advice",
        content: "Information on this website is for general informational purposes only and does not constitute professional engineering or architectural advice. For specific project advice, please consult with our team directly."
      },
      {
        heading: "Project Accuracy",
        content: "Project images and descriptions on this website are representative of our work. Actual project outcomes may vary based on site conditions, client requirements, and other factors."
      },
      {
        heading: "Website Content",
        content: "While we strive to keep the information on our website accurate and current, we make no warranties about the completeness, reliability, or accuracy of this information."
      },
      {
        heading: "External Links",
        content: "Our website may contain links to external sites. We are not responsible for the content or privacy practices of these external sites."
      },
      {
        heading: "Changes",
        content: "We reserve the right to modify these terms and the content of our website at any time without prior notice."
      }
    ]
  }
}

export function LegalSection({ type, onBack }: LegalProps) {
  const content = legalContent[type]
  const IconComponent = content.icon

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
            <Image src="/images/hh-logo.jpg" alt="HH" width={32} height={32} className="object-cover" />
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
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-foreground">{content.title}</h1>
              <p className="text-[10px] text-muted-foreground">Last updated: {content.lastUpdated}</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          {content.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-sm font-semibold text-foreground mb-2">{section.heading}</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 pt-6 border-t border-border"
        >
          <p className="text-xs text-muted-foreground">
            For questions regarding this policy, contact us at{" "}
            <a href="mailto:hhconsultingarchitectengineers@gmail.com" className="text-primary hover:underline">
              hhconsultingarchitectengineers@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
