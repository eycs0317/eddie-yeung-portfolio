import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Code2,
  Facebook,
  Globe,
  Youtube,
} from "lucide-react";
import Avator from "./Avator";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Experience from "./Experience/Experience";
import ThemeToggle from "./ThemeToggle";

const Portfolio = () => {
  return (
    <div className='min-h-screen bg-[#f5f5f7] dark:bg-neutral-900 p-4 md:p-8 font-sans text-slate-900 dark:text-slate-100 rounded-[2rem] overflow-x-hidden'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-4 gap-4 auto-rows-[180px] w-full'>
        {/* 1. Name & Image (Large) */}
        <Avator />
        {/* 2. About Me (Wide) */}
        <div className='col-span-4 row-span-1 sm:row-span-1 md:col-span-2 bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm border border-white dark:border-slate-700 flex flex-col justify-center text-left'>
          <h3 className='text-sm text-center uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold mb-2'>
            About
          </h3>
          <p className='text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-sm md:text-sm lg:text-base'>
            I’m a Frontend Engineer with a Full-Stack backbone, specializing in
            interactive storytelling. By blending design sensibility with an
            AI-driven workflow, I translate complex ideas into web app, I build
            for high-impact visuals and peak performance.
          </p>
        </div>
        {/* 6. Experience (Wide) */}
        <Experience />
        {/* 3. Tech Stack (Square) */}
        <TechStack />
        {/* 4. Work Status (Square) */}
        <div className='col-span-2 sm:col-span-1  bg-emerald-50 dark:bg-emerald-900/30 rounded-[2rem] p-6 border border-emerald-100 dark:border-emerald-800 flex flex-col justify-between'>
          <div className='flex justify-between items-start'>
            <div className='h-3 w-3 bg-emerald-500 rounded-full animate-pulse' />
          </div>
          <div>
            <p className='text-emerald-700 dark:text-emerald-400 font-bold'>
              Available
            </p>
            <p className='text-xs text-emerald-600 dark:text-emerald-500'>
              Open for new projects
            </p>
          </div>
        </div>
        {/* 5. Resume (Square) */}
        <a
          href='/EddieYeung.pdf'
          className='col-span-2 sm:col-span-1  group bg-slate-900 dark:bg-slate-700 rounded-[2rem] p-6 flex flex-col justify-between text-white hover:bg-slate-800 dark:hover:bg-slate-600 transition-all '
        >
          <FileText
            className='group-hover:rotate-12 transition-transform'
            size={28}
          />
          <p className='font-bold'>Resume</p>
        </a>

        {/* 7. Social Links (Small) */}
        <div className='col-span-2 sm:col-span-1  bg-white dark:bg-slate-800 rounded-[2rem] p-6 shadow-sm border border-white dark:border-slate-700 flex justify-around items-center md:flex-col'>
          <a
            href='https://github.com/eycs0317'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform hover:scale-110'
          >
            <Github className='text-slate-400 dark:text-slate-500 hover:text-black dark:hover:text-white cursor-pointer' />
          </a>
          <a
            href='https://www.linkedin.com/in/eddiecyeung/'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform hover:scale-110'
          >
            <Linkedin className='text-slate-400 dark:text-slate-500 hover:text-blue-600 cursor-pointer' />
          </a>
          <a
            href='mailto:eycs0317@gmail.com'
            className='transition-transform hover:scale-110'
          >
            <Mail className='text-slate-400 dark:text-slate-500 hover:text-green-500 cursor-pointer' />
          </a>
        </div>
        {/* Location */}
        <div className='col-span-2 sm:col-span-1  bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-white dark:border-slate-700 overflow-hidden relative group h-full'>
          {/* The Map iframe */}
          <div className='absolute inset-0 -bottom-15 -top-10'>
            <iframe
              title='Google Map'
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d433959.7553627028!2d-122.28722824664096!3d37.50066425345607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1767912605331!5m2!1sen!2sus'
              className='w-full h-full grayscale-[20%] contrast-[1.1] brightness-[1.05] dark:brightness-[0.8] border-0'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
        <ThemeToggle />
        {/* 8. Projects (Extra Wide) */}
        <Projects
          title='Monchhichi E-card Kiosk'
          description={
            <>
              "Designed for 55-inch Android touch-screens, creating an immersive
              'large-format' experience for HK MTR malls. Users design custom
              digital cards and retrieve them via QR code for social sharing.
              <span className='mt-2 block text-xs text-slate-400 italic'>
                {" "}
                *Original kiosk version utilized QR/AWS S3 storage; this demo is
                optimized for Vercel (minus the server bills! 😂).{" "}
              </span>
              "
            </>
          }
          videoSource='/pcd001.mp4'
          links={[
            {
              type: "github",
              url: "https://github.com/eycs0317/pcd001",
              label: "Source",
            },
            {
              type: "facebook",
              url: "https://www.facebook.com/groups/2204857406/posts/10161452786522407/",
              label: "Event Buzz",
            },
            {
              type: "demo",
              url: "https://pcd001.vercel.app/step-welcome",
              label: "Live Demo",
            },
          ]}
        />
        <Projects
          title='Fruity Land Appointment System'
          description='Appointment system made for Fruity Land.'
          images={["/01.png", "/02.png", "/03.png", "/04.png"]}
          links={[
            {
              type: "github",
              url: "https://github.com/eycs0317/fruityland?tab=readme-ov-file",
              label: "Source",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
