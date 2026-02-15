export default function Skills() {
  const skills = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Flask", icon: "devicon-flask-original colored" },
    { name: "Javascript", icon: "devicon-javascript-plain colored" },
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    
  ]

  return (
    <section
      id="skills"
      className="
        py-4
        bg-[#081a33]
        text-[#D4AF37]
      "
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#D4AF37]">
          Skillset
        </h2>

        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                flex items-center gap-2
                rounded-full
                border-2 border-[#D4AF37]
                bg-[#071429]/40
                shadow-md shadow-[#D4AF37]/20
                px-4 py-2
                transition
                duration-300
                ease-out
                hover:scale-110
                hover:bg-[#071429]/60
                hover:shadow-lg hover:shadow-[#D4AF37]/30
              "
            >
              <i
                className={`${skill.icon} text-base md:text-xl lg:text-2xl text-[#D4AF37]`}
              />
              <span className="text-xs md:text-sm lg:text-base font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
