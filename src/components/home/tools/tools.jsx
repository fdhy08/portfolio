export default function Tools() {
  const tools = [
    { name: "Windows", icon: "devicon-windows11-original colored" },
    { name: "Vs Code", icon: "devicon-vscode-plain colored" },
    { name: "Chrome", icon: "devicon-chrome-plain" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Power BI", icon: "devicon-powerbi-plain colored" },
    { name: "Oracle APEX", icon: "devicon-oracle-original colored" },
    { name: "Canva", icon: "devicon-canva-original colored" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
  ]

  return (
    <section id="tools">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
          {tools.map((tools) => (
            <div
              key={tools.name}
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
              <i className={`${tools.icon} text-base md:text-xl lg:text-2xl text-[#D4AF37]`} />
              <span className="text-xs md:text-sm lg:text-base font-medium">
                {tools.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
