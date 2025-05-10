import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Building, Leaf, Shield } from "lucide-react"

const portfolioItems = [
  {
    title: "Enterprise Data Center",
    description:
      "Built state-of-the-art data center facility with energy-efficient design and advanced cooling systems for a major financial institution.",
    location: "Jakarta Business District",
    icon: Server,
    image: "/images/data-center.png",
  },
  {
    title: "Digital Twin of Urban Development",
    description:
      "Developed comprehensive digital twin solution for a major urban development, enabling real-time monitoring, simulation, and urban planning optimization.",
    location: "Central Jakarta",
    icon: Building,
    image: "/images/digital-twin.png",
  },
  {
    title: "IoT System for Palm Oil Plantation",
    description:
      "Implemented IoT ecosystem across 3000Ha of palm oil plantation, optimizing irrigation, monitoring crop health, and improving yield.",
    location: "3000Ha Plantation",
    icon: Leaf,
    image: "/images/palm-plantation.png",
  },
  {
    title: "Integrated Security Management System",
    description:
      "Designed and deployed integrated security solution with CCTV surveillance and visitor management system for a major data center.",
    location: "Jakarta",
    icon: Shield,
    image: "/images/security-system.png",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Successful projects we've delivered for leading Indonesian enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                    {item.location}
                  </span>
                </div>
              </div>
              <div className="flex flex-col h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
