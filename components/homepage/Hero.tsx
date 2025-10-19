import Link from "next/link";
import TextType from "../ui/TextType";
import { Button } from "../ui/button";
import { TextHoverEffect } from "../ui/text-hover-effect";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="min-h-screen relative text-center mx-auto">
        <div className="absolute -top-30 w-full h-auto space-y-0 z-0 flex flex-col">
          <TextHoverEffect text="INNOVATIVE⟡INSIGHTFUL" />
          <TextHoverEffect text="Your Growth Partner" />
          <TextHoverEffect text="DIGITAL⟡DYNAMIC⟡DRIVEN" />
          <TextHoverEffect text="We Build Strategies That Drive Growth" />
          <TextHoverEffect text="ARTISTIC⟡CREATIVE⟡SIMPLICITY" />
        </div>
        <div className="pt-20 relative z-10 pointer-events-none">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-normal">
            YOUR GROWTH,
          </h1>

          <TextType
            className="font-cursive text-6xl md:text-8xl lg:text-9xl mt-15"
            text={["amplified", "our obsession", "Happy coding!"]}
            typingSpeed={120}
            pauseDuration={2000}
            deletingSpeed={60}
            showCursor={true}
            cursorCharacter=""
          />

          <p className="text-lg md:text-xl my-8 pointer-events-auto">
            Tripura&apos;s first AI driven marketing agency, from the comfort of
            your home.
          </p>
          <div className="pointer-events-auto">
            <Link href="/services">
              <Button>
                Get Started
                <svg
                  className="w-5 h-5"
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
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </section>
  );
}
