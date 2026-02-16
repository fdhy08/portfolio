import Image from "next/image";

export default function AboutMe () {
    return(
        <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-40">
            <h1 className="py-4 md:py-8 lg:py-12 text-center text-xl md:text-2xl lg:text-3xl font-bold">
                A Little <span className="text-[#D4AF37]">About Me</span>
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* IMAGE */}
                <div className="basis-1/3 flex justify-center lg:justify-start">
                <Image
                    src="/about-felicia.jpg"
                    alt="Felicia Ding Hui Yin"
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 100px, (max-width: 1024px) 200px, 300px"
                    className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[420px] h-auto"
                />
                </div>
                {/* TEXT */}
                <div className="text-justify text-sm md:text-md lg:text-xl basis-2/3">
                    <p>I&apos;m a Business and Financial Technology student at Nanyang Polytechnic with a strong interest in software development and a knack for business. I enjoy building user-centered designs across platforms, with a focus on maintainable code and entrepreneurship.</p>
                    <p className="pt-2">Beyond technical skills, I value collaboration and leadership. My experience during projects allowed me to refine my communication and my ability to lead a team.</p>
                </div>
            </div>
        </div>
    )
}
