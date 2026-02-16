"use client";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="">
      <div className="mt-8 flex justify-center">
        <div className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">
          <h1 className="">Hey!</h1>
          <h1 className="lg:py-4">
            I&apos;m <span className="text-[#D4AF37]">Felicia Ding Hui Yin</span>
          </h1>
          <div className="relative flex h-8 justify-center">
            <TypeAnimation
              sequence={[
                "FinTech Student",
                1500,
                "Business Enthusiast",
                1500,
                "Junior Web Developer",
                1500,
              ]}
              speed={60}
              repeat={Infinity}
              className="absolute left-1/2 top-0 -translate-x-1/2 text-[#D4AF37]/80 whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
