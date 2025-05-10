"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/team-working.png"
              alt="GIP Team working on technology solutions"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About GIP</h2>
            <p className="text-lg text-muted-foreground">
              PT. Galactic Indonesia Perkasa (GIP) is a leading technology solutions provider specializing in integrated
              AI, IoT, and infrastructure solutions for Indonesian businesses and government agencies.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Innovation-Driven</h3>
                  <p className="text-muted-foreground">
                    We continuously explore and implement cutting-edge technologies to solve complex challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Local Expertise</h3>
                  <p className="text-muted-foreground">
                    Our team understands the unique needs and challenges of Indonesian industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">End-to-End Solutions</h3>
                  <p className="text-muted-foreground">
                    From planning to implementation and maintenance, we provide comprehensive support.
                  </p>
                </div>
              </div>
            </div>

            <Button onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}>
              Discover Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
