import { FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/30 bg-[#071429]/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-12 py-2 md:py-3 lg:py-4 sm:flex-row">
        {/* Left */}
        <p className="text-xs md:text-sm lg:text-base text-center">
          © {new Date().getFullYear()} Felicia Ding Hui Yin. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/felicia-ding-91291b3ab"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#D4AF37]"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}
