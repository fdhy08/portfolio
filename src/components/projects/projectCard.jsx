import Image from "next/image"
import { FaLink } from "react-icons/fa"

export default function ProjectCard({ project, layout = "vertical", className = "" }) {
  const isHorizontal = layout === "horizontal"
  const imageFitClass = project.imageFit === "contain" ? "object-contain p-2" : "object-cover"
  const imagePositionClass = project.imagePosition || "object-center"
  const imageWrapperClass = project.imageFit === "contain" ? "bg-zinc-900/60" : ""

  return (
    <div
      className={`group overflow-hidden rounded-2xl border-2 border-[#D4AF37] bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-[#D4AF37]/80 hover:shadow-lg shadow-md shadow-[#D4AF37]/20 ${className}`}
    >

      {/* IMAGE */}
      <div className={isHorizontal ? "flex flex-col md:flex-row" : ""}>
        <div
          className={
            isHorizontal
              ? `relative w-full overflow-hidden aspect-[16/10] md:w-5/12 md:aspect-[4/3] ${imageWrapperClass}`
              : "relative h-48 overflow-hidden"
          }
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`${imageFitClass} ${imagePositionClass} transition duration-500 group-hover:scale-105`}
          />
        </div>

        {/* CONTENT */}
        <div className={isHorizontal ? "p-6 md:w-7/12" : "p-6"}>
          <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
          <p className="mb-4 text-sm text-zinc-300 text-justify">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-4">
            {project.tech.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-full bg-[#D4AF37]/15 px-3 py-1 text-xs text-[#E9D48A] transition hover:scale-105"
              >
                <i className={`${tech.icon} text-base`} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS (ALWAYS VISIBLE) */}
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-[#D4AF37] hover:text-[#081a33] transition"
              >
                <FaLink /> Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
