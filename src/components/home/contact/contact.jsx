import { FaLinkedinIn } from "react-icons/fa"

export default function Contacts() {
  return (
    <section id="contacts" className="mt-8 md:mt-12 lg:mt-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-1 text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Find Me On
        </h2>
        <h2 className="mb-4 text-center text-xs md:text-sm lg:text-md ">
          Feel free to <span className="text-[#D4AF37]">connect</span> with me
        </h2>

        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
          <div
            className="
              group
              flex items-center gap-2
              rounded-full
              border-2 border-[#D4AF37]
              bg-[#071429]/70
              shadow-sm shadow-[#D4AF37]/20
              px-4 py-2
              transition
              duration-300
              ease-out
              hover:shadow-md
            "
          >
            <a
              href="https://www.linkedin.com/in/felicia-ding-91291b3ab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-base md:text-xl lg:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
