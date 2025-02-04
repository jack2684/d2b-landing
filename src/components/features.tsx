import { Brain, Workflow, Shield, Plug } from "lucide-react"

const features = [
  {
    name: "AI Searh Engine for Construcionts",
    description: "An AI search engine for your construction projet.",
    icon: Brain,
  },
  {
    name: "Documentation Assistant",
    description: "Code Review, Cross Discipline Review, Shope Drawing Reviews",
    icon: Workflow,
  },
  {
    name: "Enterprise-Grade Security",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
  },
  {
    name: "Seamless Interation",
    description: "Work seamlessly with your day-to-day tools and workflow",
    icon: Plug,
  },
]

export default function Features() {
  return (
    <section id="solutions" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Cutting-Edge Solutions</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how D2B AI can transform your business with our innovative technologies.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

