import { Building2, Lightbulb, Factory, Leaf, Landmark, HardDrive } from "lucide-react"

const industries = [
  {
    name: "Real Estate",
    description: "Smart building solutions and property management systems.",
    icon: Building2,
  },
  {
    name: "Energy & Mining",
    description: "Optimized operations and predictive maintenance for resource industries.",
    icon: Lightbulb,
  },
  {
    name: "Manufacturing",
    description: "Industry 4.0 solutions for modern factories and production lines.",
    icon: Factory,
  },
  {
    name: "Agriculture",
    description: "Precision farming and agricultural supply chain optimization.",
    icon: Leaf,
  },
  {
    name: "Public Sector",
    description: "Digital transformation solutions for government and public services.",
    icon: Landmark,
  },
  {
    name: "Data Infrastructure",
    description: "Scalable and secure data storage and processing solutions.",
    icon: HardDrive,
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for Indonesia's key economic sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <industry.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
