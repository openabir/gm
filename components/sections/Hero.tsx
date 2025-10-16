import Link from "next/link";
import TextType from "../ui/TextType";
import { Button } from "../ui/button";
import { WavyBackground } from "../ui/wavy-background";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <WavyBackground
        containerClassName="min-h-screen"
        className="text-center mx-auto px-4 sm:px-6 lg:px-8"
        colors={["#FF7A00", "#facc15", "#c084fc", "#ffffff"]}
        waveWidth={50}
        backgroundFill="#0a0a0a"
        blur={15}
        speed="slow"
        waveOpacity={0.5}
      >
        <div className="pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-normal leading-normal">
            Your growth,
            <br />
            <TextType
              className="font-cursive"
              text={[
                "amplified",
                "our obsession",
                "Happy coding!",
              ]}
              typingSpeed={120}
              pauseDuration={2000}
              deletingSpeed={60}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          <p className="text-xl md:text-xl mb-8">
            Tripura&apos;s first AI driven marketing agency, from the comfort of
            your home.
          </p>
          <div>
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
      </WavyBackground>
    </section>
  );
}
