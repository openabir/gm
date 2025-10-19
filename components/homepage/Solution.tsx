import Image from "next/image";
import { Check } from "lucide-react";

export default function Solution() {
  const solutions = [
    {
      text: "Custom Web Design Solutions",
      highlight: "To Drive Conversions",
    },
    {
      text: "Effective Marketing Campaigns",
      highlight: "To Generate Growth",
    },
    {
      text: "Tailored Branding Strategies",
      highlight: "To Drive Engagement",
    },
  ];

  return (
    <section className=" relative mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl font-bold">
              Creative Web Agency Delivering Custom Solutions
            </h2>

            {/* Solution List with Check Icons */}
            <ul className="space-y-6">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1 text-orange-600" />
                  <p className="text-lg md:text-xl">
                    {solution.text}{" "}
                    <span className="font-semibold">{solution.highlight}</span>
                  </p>
                </li>
              ))}
            </ul>

            {/* Description */}
            <p className="text-base md:text-lg text-justify leading-tight">
              <span className="text-orange-600 text-xl">Growth Marg </span> is a
              web design company & digital marketing agency focused on growing
              brands online. We create effective brand strategies, custom web
              design, development, and digital marketing solutions to generate
              greater brand engagement and conversions. We work closely with our
              clients to ensure each project meets their brand guidelines and
              business goals and provide technical and marketing expertise to
              ensure optimal results.
            </p>
          </div>

          {/* Right Column - Image with 3D Effect */}
          <div className="relative hidden lg:block h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Device Mockup Image */}
            <div className="relative h-full w-full perspective-1000">
              <Image
                src="/solution-mockup.png"
                alt="Digital Agency Solutions"
                fill
                className="object-contain drop-shadow-2xl"
                style={{
                  transform: "rotateY(-15deg) rotateX(5deg)",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
