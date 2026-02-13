import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  RiReactjsLine,
  RiNextjsLine,
  RiTailwindCssLine,
  RiNodejsLine,
  RiFirebaseLine,
  RiJavascriptLine,
  RiGithubFill,
  RiHtml5Line,
  RiCss3Line,
} from "react-icons/ri";
import { SiTypescript, SiStorybook, SiPrisma } from "react-icons/si";

export default function TechStack() {
  const icons = [
    { Icon: RiHtml5Line, color: "text-orange-600", name: "HTML5" },
    { Icon: RiCss3Line, color: "text-blue-600", name: "CSS3" },
    { Icon: RiJavascriptLine, color: "text-yellow-400", name: "JavaScript" },
    { Icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
    { Icon: RiReactjsLine, color: "text-blue-500", name: "React" },
    {
      Icon: RiNextjsLine,
      color: "text-black dark:text-white",
      name: "Next.js",
    },
    { Icon: RiTailwindCssLine, color: "text-cyan-400", name: "Tailwind" },
    { Icon: RiNodejsLine, color: "text-green-500", name: "Node.js" },
    { Icon: SiPrisma, color: "text-slate-700 dark:text-slate-300", name: "Prisma" },
    { Icon: RiFirebaseLine, color: "text-orange-500", name: "Firebase" },
    { Icon: SiStorybook, color: "text-pink-500", name: "Storybook" },
    {
      Icon: RiGithubFill,
      color: "text-slate-800 dark:text-slate-300",
      name: "GitHub",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1.2,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const onMouseLeave = () => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    autoScroll.play();
  };

  return (
    <div
      className='col-span-2 sm:col-span-1  bg-white dark:bg-slate-800 rounded-[2rem] p-6 shadow-sm border border-white dark:border-slate-700 flex flex-col justify-between overflow-hidden relative h-full group/main'
      onMouseLeave={onMouseLeave}
    >
      <div className='z-10'>
        <p className='font-bold text-slate-900 dark:text-white'>Tech Stack</p>
        <p className='text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-widest'>
          Always Learning
        </p>
      </div>

      <div
        className='overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]'
        ref={emblaRef}
      >
        <div className='flex'>
          {[...icons, ...icons, ...icons].map(
            ({ Icon, color, name }, index) => (
              <div
                key={index}
                className='flex-[0_0_90px] min-w-0 flex flex-col items-center justify-center relative group/icon'
              >
                <Icon
                  className={`${color} transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:drop-shadow-sm`}
                  size={45}
                />
                <span className='text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight text-center'>
                  {name}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
