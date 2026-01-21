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
} from "react-icons/ri";

export default function TechStack() {
  const icons = [
    { Icon: RiReactjsLine, color: "text-blue-500", name: "React" },
    { Icon: RiNextjsLine, color: "text-black", name: "Next.js" },
    { Icon: RiTailwindCssLine, color: "text-cyan-400", name: "Tailwind" },
    { Icon: RiNodejsLine, color: "text-green-500", name: "Node.js" },
    { Icon: RiFirebaseLine, color: "text-orange-500", name: "Firebase" },
    { Icon: RiJavascriptLine, color: "text-yellow-400", name: "JavaScript" },
    { Icon: RiGithubFill, color: "text-slate-800", name: "GitHub" },
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
      className='bg-white rounded-[2rem] p-6 shadow-sm border border-white flex flex-col justify-between overflow-hidden relative h-full group/main'
      onMouseLeave={onMouseLeave}
    >
      <div className='z-10'>
        <p className='font-bold text-slate-900'>Tech Stack</p>
        <p className='text-[10px] text-slate-400 font-medium uppercase tracking-widest'>
          Always Learning
        </p>
      </div>

      <div
        className='overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]'
        ref={emblaRef}
      >
        <div className='flex'>
          {[...icons, ...icons, ...icons].map(
            ({ Icon, color, name }, index) => (
              <div
                key={index}
                className='flex-[0_0_90px] min-w-0 flex flex-col items-center justify-center relative group/icon'
              >
                {/* Tooltip Name */}
                <span className='absolute -top-4 text-[10px] font-bold text-slate-500 opacity-0 group-hover/icon:opacity-100 group-hover/icon:-translate-y-2 transition-all duration-300 pointer-events-none uppercase tracking-tighter'>
                  {name}
                </span>

                <Icon
                  className={`${color} transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:drop-shadow-sm`}
                  size={45}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
