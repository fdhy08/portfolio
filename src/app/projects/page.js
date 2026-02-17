import ProjectCard from "@/components/projects/projectCard"
import { projects } from "@/components/projects/projectsData"

export const metadata = {
  title: "Projects | Felicia Ding Hui Yin",
}

export default function Projects() {
  const featuredProject = projects[0]

  return (
    <section className="relative z-10 min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#D4AF37]">Projects</h1>
        <p className="mt-4 text-[#E9D48A]">
          Major projects i have worked on
        </p>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6">
        {featuredProject && (
          <ProjectCard
            project={featuredProject}
            layout="horizontal"
            className="w-full max-w-4xl"
          />
        )}

        <div className="w-full max-w-4xl overflow-hidden rounded-2xl border-2 border-[#D4AF37] bg-white/5 px-6 py-14 text-center text-2xl font-semibold text-[#E9D48A] backdrop-blur shadow-md shadow-[#D4AF37]/20">
          More to come!
        </div>
      </div>
    </section>
  )
}
