import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

const faqs = [
  {
    title: "What services do you offer?",
    content:
      "We offer a comprehensive range of digital marketing services including SEO, social media marketing, content creation, email marketing, PPC advertising, and AI-driven marketing automation.",
  },
  {
    title: "How does AI improve marketing results?",
    content:
      "Our AI technology analyzes data patterns, predicts customer behavior, optimizes ad spend, and personalizes content at scale — resulting in higher ROI and more effective campaigns.",
  },
  {
    title: "What industries do you work with?",
    content:
      "We work with businesses across various industries including e-commerce, SaaS, healthcare, education, real estate, and local businesses looking to expand their digital presence.",
  },
  {
    title: "How long does it take to see results?",
    content:
      "While some improvements can be seen within weeks, sustainable growth typically takes 3-6 months. We focus on long-term strategies that deliver consistent, measurable results.",
  },
  {
    title: "Do you work with businesses outside Tripura?",
    content:
      "Absolutely! While we're based in Tripura, we serve clients globally. Our digital-first approach allows us to deliver exceptional results regardless of location.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal mb-4">
            Frequently{" "}
            <span className="font-cursive text-orange-600">asked</span>{" "}
            questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We&apos;ve got answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:text-orange-600">
                  {faq.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            asChild
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            <a href="#services">
              Learn more
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
