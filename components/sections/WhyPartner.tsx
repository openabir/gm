const benefits = [
  {
    title: "AI-Driven Strategy",
    description:
      "Leverage cutting-edge AI technology to optimize your marketing campaigns and stay ahead of the competition.",
    icon: "🤖",
  },
  {
    title: "Proven Results",
    description:
      "Our track record speaks for itself with consistent growth and measurable outcomes for our clients.",
    icon: "📊",
  },
  {
    title: "Dedicated Support",
    description:
      "Get personalized attention from our expert team who are committed to your success every step of the way.",
    icon: "💼",
  },
];

export default function WhyPartner() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal mb-4">
            Why partner{" "}
            <span className="font-cursive text-orange-600">with us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Because your brand deserves more than just marketing — it deserves
            momentum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50/50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/20 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-100 dark:border-orange-900/30"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
