"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { allContentByCategory, type ContentItem } from "@/lib/project-content";

interface ContentWallsProps {
  categoryId: string;
  categoryName: string;
  onBack: () => void;
}

function ProjectPlaceholder({ item }: { item: ContentItem }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-stone-950 via-stone-800 to-stone-900 px-6 text-center text-white">
      <p className="text-[10px] uppercase tracking-[0.35em] text-primary/80">
        {item.title}
      </p>
      <h3 className="mt-3 max-w-[80%] text-xl font-semibold leading-tight tracking-wide">
        {item.project}
      </h3>
      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/55">
        {item.placeholder}
      </p>
    </div>
  );
}

export function ContentWalls({
  categoryId,
  categoryName,
  onBack,
}: ContentWallsProps) {
  const contents = allContentByCategory[categoryId] ?? [];
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

  if (!currentContent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background"
      >
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-md space-y-4 rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.3em] text-primary uppercase">
              {categoryName}
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              No projects added yet
            </h2>
            <p className="text-sm text-muted-foreground">
              This category is ready, but its project entries have not been
              added to the JSON yet.
            </p>
            <button
              onClick={onBack}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Back
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent px-4 py-4"
      >
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-1.5 text-foreground/80 transition-colors hover:text-foreground"
        >
          <svg
            className="h-4 w-4"
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
          className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary"
        >
          {categoryName}
        </motion.p>

        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex h-6 w-6 items-center justify-center overflow-hidden rounded bg-primary"
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

      <AnimatePresence mode="wait">
        <motion.div
          key={currentContent.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex h-full flex-col lg:flex-row"
        >
          <div className="relative h-[42vh] w-full lg:h-full lg:w-1/2">
            {currentContent.hasImage && currentContent.image ? (
              <Image
                src={currentContent.image}
                alt={currentContent.project}
                fill
                className="object-cover"
                quality={85}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            ) : (
              <ProjectPlaceholder item={currentContent} />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-[8px] uppercase tracking-[0.15em] text-primary">
                {currentContent.title}
              </p>
              <p className="mt-0.5 text-[11px] font-semibold leading-tight text-white">
                {currentContent.project}
              </p>
              {!currentContent.hasImage && (
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/65">
                  Image coming soon
                </p>
              )}
            </div>

            <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-stone-100/30 to-transparent" />
          </div>

          <div className="flex h-full w-full flex-col justify-center overflow-y-auto bg-gradient-to-b from-stone-50 to-stone-100 px-4 py-10 lg:w-1/2 lg:px-5 lg:py-16">
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative space-y-3">
              <div className="border-b border-stone-300 pb-2">
                <p className="text-xl font-light tracking-wider text-stone-800">
                  {currentContent.number}
                </p>
                <p className="mt-0.5 text-[8px] font-semibold tracking-[0.2em] text-primary">
                  PROJECT DETAILS
                </p>
              </div>

              <div>
                <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                  Project
                </p>
                <p className="text-[10px] font-semibold leading-tight text-stone-800">
                  {currentContent.project}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                    Location
                  </p>
                  <p className="text-[8px] leading-tight text-stone-700">
                    {currentContent.location}
                  </p>
                </div>
                <div>
                  <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                    Client
                  </p>
                  <p className="text-[8px] leading-tight text-stone-700">
                    {currentContent.client}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                  Function
                </p>
                <p className="text-[9px] leading-tight text-stone-700">
                  {currentContent.function}
                </p>
              </div>

              <div>
                <p className="mb-1 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                  Key Concept
                </p>
                <ul className="space-y-0.5">
                  {currentContent.keyConcept.map((concept, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-1 text-[8px] leading-tight text-stone-600"
                    >
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      {concept}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-1 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                  Features
                </p>
                <div className="flex flex-wrap gap-1">
                  {currentContent.features.map((feature, index) => (
                    <span
                      key={index}
                      className="rounded bg-stone-200 px-1.5 py-0.5 text-[7px] text-stone-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-t border-stone-200 pt-2">
                <div>
                  <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                    Value
                  </p>
                  <p className="text-[8px] font-semibold text-primary">
                    {currentContent.value}
                  </p>
                </div>
                <div>
                  <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                    Year
                  </p>
                  <p className="text-[8px] font-semibold text-stone-800">
                    {currentContent.year}
                  </p>
                </div>
                <div>
                  <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                    Duration
                  </p>
                  <p className="text-[8px] font-semibold text-stone-800">
                    {currentContent.duration}
                  </p>
                </div>
                <div>
                  <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                    Status
                  </p>
                  <p className="text-[8px] font-semibold text-stone-800">
                    {currentContent.status}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 border-t border-stone-200 pt-2 sm:grid-cols-2">
                <div>
                  <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                    Team
                  </p>
                  <p className="text-[8px] leading-tight text-stone-700">
                    {currentContent.team}
                  </p>
                </div>
                <div>
                  <p className="mb-0.5 text-[7px] uppercase tracking-[0.15em] text-stone-400">
                    Consultant
                  </p>
                  <p className="text-[8px] leading-tight text-stone-700">
                    {currentContent.consultant}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 right-4 z-20 flex items-center gap-2"
      >
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded bg-white/80 px-2 py-1 text-[9px] font-medium text-stone-500"
        >
          {currentIndex + 1} / {contents.length}
        </motion.span>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-all
            ${
              currentIndex === 0
                ? "cursor-not-allowed bg-stone-200 text-stone-400"
                : "bg-white text-stone-700 shadow-lg hover:bg-primary hover:text-primary-foreground"
            }`}
        >
          <svg
            className="h-4 w-4"
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

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goNext}
          disabled={currentIndex === contents.length - 1}
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-all
            ${
              currentIndex === contents.length - 1
                ? "cursor-not-allowed bg-stone-200 text-stone-400"
                : "bg-white text-stone-700 shadow-lg hover:bg-primary hover:text-primary-foreground"
            }`}
        >
          <svg
            className="h-4 w-4"
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

export type { ContentItem };
