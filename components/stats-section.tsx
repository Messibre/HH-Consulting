"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 54, suffix: "+", label: "Expert Engineers" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "B+", label: "ETB Project Value" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary">
      {count}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 px-5 bg-secondary/50">
      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-xs mt-2 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
