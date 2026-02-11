import React, { useState, useEffect } from "react";
import "./Experience.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import ExperienceModal from "./ExperienceModal";

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const workExperience = [
    {
      role: "Software Engineer",
      company: "EFXDesign",
      duration: "2024 — Present",
      detail: `• Developed and maintained full-stack web applications using modern frameworks and technologies
• Collaborated with cross-functional teams to design and implement scalable solutions
• Participated in code reviews and contributed to improving development processes
• Built responsive user interfaces with focus on performance and user experience`,
    },
    {
      role: "UI Engineer",
      company: "Indeed",
      duration: "2022 — 2023",
      detail: `• Designed and implemented user interface components for Indeed's job search platform
• Worked closely with UX designers to translate mockups into high-quality code
• Optimized front-end performance and ensured cross-browser compatibility
• Contributed to the company's design system and component library
• Collaborated with backend engineers to integrate APIs and data services`,
    },
    {
      role: "Frontend Developer",
      company: "OQlus360",
      duration: "2021 — 2022",
      detail: `• Built responsive web applications using React and modern JavaScript frameworks
• Implemented pixel-perfect designs while maintaining code quality and best practices
• Worked with REST APIs to integrate frontend with backend services
• Participated in agile development processes and sprint planning
• Contributed to improving development workflows and tooling`,
    },
    {
      role: "Service Consultant",
      company: "Lexus of Serramonte",
      duration: "2004 — 2020",
      detail: `• Provided exceptional customer service and support for luxury automotive clients
• Managed client relationships and maintained high customer satisfaction ratings
• Coordinated service appointments and communicated technical information to clients
• Developed strong problem-solving and communication skills through client interactions
• Consistently exceeded performance targets and received recognition for service excellence`,
    },
  ];

  const handleExperienceClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev > 0 ? prev - 1 : workExperience.length - 1,
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev < workExperience.length - 1 ? prev + 1 : 0,
    );
  };

  const OPTIONS = { axis: "y", dragFree: true, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 1800 }),
  ]);

  // Restart autoplay when modal closes
  useEffect(() => {
    if (!isModalOpen && emblaApi) {
      const autoplay = emblaApi.plugins()?.autoplay;
      if (autoplay) {
        autoplay.play();
      }
    }
  }, [isModalOpen, emblaApi]);

  return (
    <>
      <section className='embla col-span-4 sm:col-span-2 md:col-span-2  bg-white dark:bg-slate-800 rounded-[2rem] p-6 shadow-sm border border-white dark:border-slate-700 flex flex-col group cursor-pointer hover:shadow-lg transition-all'>
        {/* Static Header */}
        <p className='text-sm text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-center'>
          Work Experience
        </p>

        {/* Scrolling Content */}
        <div
          className='embla__viewport w-full overflow-hidden flex-1'
          ref={emblaRef}
        >
          <div className='embla__container'>
            {workExperience.map((experience, index) => (
              <div
                className='embla__slide flex flex-col items-center justify-center'
                key={index}
                onClick={() => handleExperienceClick(index)}
              >
                <p className='text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors'>
                  {experience.role}
                </p>
                <p className='text-slate-700 dark:text-slate-300'>
                  {experience.company}
                </p>
                <p className='text-slate-500 dark:text-slate-400 text-sm'>
                  {experience.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        role={workExperience[selectedIndex].role}
        company={workExperience[selectedIndex].company}
        duration={workExperience[selectedIndex].duration}
        detail={workExperience[selectedIndex].detail}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={selectedIndex}
        totalCount={workExperience.length}
      />
    </>
  );
}

// <div
//   className='md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-white flex items-center justify-between'
// >
//   <div>
//     <p className='text-sm text-slate-400 font-bold uppercase tracking-widest'>
//       Latest Work
//     </p>
//     <div>
//       <p className='text-lg font-bold'>Freelance Developer</p>
//       <p className='text-slate-500'>2023 — Present</p>
//     </div>
//   </div>
//   <div className='hidden sm:block h-12 w-12 bg-slate-100 rounded-xl'></div>
// </div>
