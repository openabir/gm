"use client";
import Why from "../others/why";

export default function Choose() {
  return (
    <>
      <section className="relative lg:mt-25">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal mb-4">
              Why Choose A Professional <br /> Digital Marketing Company?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Because your brand deserves more than just marketing — it deserves
              momentum
            </p>
          </div>
          <Why />
        </div>
      </section>
    </>
  );
}
