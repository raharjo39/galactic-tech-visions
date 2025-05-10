"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 z-0"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Infra & AI Ecosystem for Indonesia's Digital Future
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering industries with integrated AI, IoT, and Infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Solutions
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/hero-infrastructure.png"
              alt="Digital infrastructure visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
