"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import emailjs from "@emailjs/browser";

interface ContactSectionProps {
  onBack: () => void;
}

const officeLocations = [
  {
    city: "Addis Ababa",
    country: "Ethiopia",
    address: "22 Mazoriya, Efrata Building, 3rd Floor",
    phone: "+251 11 868 3830",
    isHQ: true,
  },
  {
    city: "Djibouti",
    country: "Republic of Djibouti",
    address: "International Projects Office",
    phone: "+251 91 359 2121",
    isHQ: false,
  },
];

export function ContactSectionNew({ onBack }: ContactSectionProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(
        formState.subject || "Consultation Request",
      );
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
      );
      window.location.href = `mailto:hhconsultingarchitectengineers@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setIsSending(true);
      setSendError(null);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_email: "hhconsultingarchitectengineers@gmail.com",
        },
        {
          publicKey,
        },
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      setSendError(
        "Unable to send message right now. Please try again or use email.",
      );
    } finally {
      setIsSending(false);
    }
  };

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
            loading="eager"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src="/images/axum-intern-airport.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          quality={80}
          sizes="100vw"
          priority
        loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-6 left-5 right-5"
        >
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-1">
            Get in Touch
          </p>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Contact Us
          </h1>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-6">
        {/* Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-3"
        >
          <motion.a
            href="tel:+251118683830"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
              Call Us
            </p>
            <p className="text-xs font-medium text-foreground">
              +251 11 868 3830
            </p>
          </motion.a>

          <motion.a
            href="mailto:hhconsultingarchitectengineers@gmail.com"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
              Email Us
            </p>
            <p className="text-[10px] font-medium text-foreground break-all">
              hhconsulting@gmail.com
            </p>
          </motion.a>
        </motion.div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Our Offices
          </h2>
          {officeLocations.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 4 }}
              className="bg-card border border-border rounded-xl p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {office.city}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {office.country}
                    </p>
                  </div>
                </div>
                {office.isHQ && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-medium rounded-full">
                    Headquarters
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {office.address}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Phone className="w-3 h-3" />
                  {office.phone}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-secondary/50 rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">
              Business Hours
            </h3>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Monday - Friday</span>
              <span className="text-foreground font-medium">
                8:30 AM - 5:30 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Saturday</span>
              <span className="text-foreground font-medium">
                9:00 AM - 1:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Sunday</span>
              <span className="text-foreground font-medium">Closed</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-4 pb-8"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Send a Message
          </h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 flex flex-col items-center text-center"
            >
              <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
              <p className="text-sm font-semibold text-foreground">
                Message Sent!
              </p>
              <p className="text-xs text-muted-foreground">
                We&apos;ll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <motion.div whileFocus={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>
              {sendError && (
                <p className="text-xs text-red-500 text-center">{sendError}</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
