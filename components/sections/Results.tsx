import { ChevronRight, TrendingUp } from "lucide-react";

interface Project {
  name: string;
  metric: string;
  description: string;
  icon: string;
  color: string;
}

const projects: Project[] = [
  {
    name: "XYZ Startup",
    metric: "250%",
    description: "Organic traffic growth",
    icon: "📈",
    color: "bg-orange-50",
  },
  {
    name: "ABC E-commerce",
    metric: "180%",
    description: "Conversion rate increase",
    icon: "🎯",
    color: "bg-blue-50",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className={`${project.color} dark:bg-opacity-20 p-8 rounded-2xl border-2 border-orange-600 dark:border-orange-500 hover:shadow-xl transition-all duration-300 hover:scale-105`}
  >
    <div className="text-5xl mb-4" role="img" aria-label={project.description}>
      {project.icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 dark:text-white">
      {project.name}
    </h3>
    <div className="text-4xl font-bold text-orange-600 dark:text-orange-500 mb-2 flex items-center gap-2">
      {project.metric}
      <TrendingUp className="w-8 h-8" aria-hidden="true" />
    </div>
    <p className="text-muted-foreground">{project.description}</p>
  </div>
);

const ExploreLink = () => (
  <a href="/services" className="inline-block group">
    <p className="text-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">
      Our <span className="font-cursive text-orange-600">Works</span>
      <ChevronRight className="inline-block ml-1 text-orange-600 transition-transform duration-300 group-hover:translate-x-1" />
    </p>
  </a>
);

export default function Results() {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      aria-labelledby="results-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal mb-4">
            Results,
            <br />
            <span className="block md:inline">
              not <span className="font-cursive text-orange-600">just</span>{" "}
              reports
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re proud of the work we do and the growth we&apos;ve driven
            for our partners.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.name}-${index}`} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <ExploreLink />
        </div>
      </div>
    </section>
  );
}
