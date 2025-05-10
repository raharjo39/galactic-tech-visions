import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Database, Radio, DrillIcon as Drone, Server } from "lucide-react"

const solutions = [
  {
    title: "AI SaaS Suite",
    description: "Enterprise-grade AI solutions tailored for Indonesian businesses.",
    icon: Brain,
  },
  {
    title: "Digital Twin as a Service",
    description: "Virtual replicas of physical assets for real-time monitoring and simulation.",
    icon: Database,
  },
  {
    title: "IoT as a Service",
    description: "Connected device ecosystems with real-time analytics and control.",
    icon: Radio,
  },
  {
    title: "Aerial Mapping & Drone Solutions",
    description: "High-precision aerial data collection and analysis for various industries.",
    icon: Drone,
  },
  {
    title: "Data Center Build & Rebuild",
    description: "Modern, efficient, and scalable data infrastructure solutions.",
    icon: Server,
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform Indonesian industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
