import React from "react";
import "./Experience.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
export default function Experience() {
  const workExperience = [
    {
      role: "Software Engineer",
      company: "EFXDesign",
      duration: "2024 — Present",
    },
    {
      role: "UI Engineer",
      company: "Indeed",
      duration: "2022 — 2023",
    },
    {
      role: "Frontend Developer",
      company: "OQlus360",
      duration: "2021 — 2022",
    },
    {
      role: "Service Consultant",
      company: "Lexus of Serramonte",
      duration: "2004 — 2020",
    },
  ];

  const OPTIONS = { axis: "y", dragFree: true, loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 2800 }),
  ]);
  return (
    <section className='embla md:col-span-1 bg-white rounded-[2rem] p-8 shadow-sm border border-white flex justify-between'>
      <div className='embla__viewport w-full overflow-hidden' ref={emblaRef}>
        <div className='embla__container'>
          {workExperience.map((experience, index) => (
            <div
              className='embla__slide flex flex-col items-center '
              key={index}
            >
              <p className='text-sm text-slate-400 font-bold uppercase tracking-widest'>
                Work Experience
              </p>
              <p className='text-lg font-bold'>{experience.role}</p>
              <p>{experience.company}</p>
              <p className='text-slate-500'>{experience.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
