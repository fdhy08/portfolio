export default function Resume() {
  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          My <span className="text-[#D4AF37]">Resume</span>
        </h1>

        <p className="text-[#E9D48A] mb-8 text-xs md:text-sm lg:text-base">You can view my resume directly below or download it for later.</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center text-xs md:text-sm lg:text-base">
          <a href="/resume/Felicia-Ding-Hui-Yin-Resume.pdf" download className="px-6 py-3 rounded-lg bg-[#D4AF37] text-[#081a33] hover:bg-[#b8921e] transition">
            Download Resume
          </a>

          <a href="/resume/Felicia-Ding-Hui-Yin-Resume.pdf" target="_blank" className="px-6 py-3 rounded-lg border border-[#D4AF37] hover:bg-[#D4AF37]/15 transition">
            Open in New Tab
          </a>
        </div>

        {/* PDF Preview */}
        <div className="w-full h-[80vh] rounded-xl overflow-hidden border border-white/10">
          <iframe src="/resume/Felicia-Ding-Hui-Yin-Resume.pdf" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
