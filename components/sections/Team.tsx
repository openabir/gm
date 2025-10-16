const team = [
  {
    name: "Arijit Biswas",
    role: "Founder",
    image: "👨‍💼",
    color: "bg-gradient-to-br from-orange-100 to-orange-200",
  },
  {
    name: "Abhimoy Debnath",
    role: "Co-Founder",
    image: "👨‍💼",
    color: "bg-gradient-to-br from-blue-100 to-blue-200",
  },
];

export default function Team() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal mb-4">
            Who we <span className="font-cursive text-orange-600">are!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the minds behind the mission
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
            >
              <div
                className={`${member.color} h-64 flex items-center justify-center text-8xl`}
              >
                {member.image}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
