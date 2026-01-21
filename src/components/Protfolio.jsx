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

const Portfolio = () => {
  return (
    <div className='min-h-screen bg-[#f5f5f7] p-4 md:p-10 font-sans text-slate-900 rounded-[2rem]'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]'>
        {/* 1. Name & Image (Large) */}
        <Avator />
        {/* 2. About Me (Wide) */}
        <div className='md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-white flex flex-col justify-center'>
          <h3 className='text-sm uppercase tracking-widest text-slate-400 font-bold mb-2'>
            About
          </h3>
          <p className='text-slate-600 leading-relaxed'>
            I build scalable web applications with a focus on clean code and
            intuitive user interfaces. Currently exploring the intersection of
            AI and web performance.
          </p>
        </div>
        {/* 3. Tech Stack (Square) */}
        {/* <div className='bg-white rounded-[2rem] p-6 shadow-sm border border-white flex flex-col justify-between hover:scale-[1.02] transition-transform'>
          <Code2 className='text-blue-500' size={28} />
          <div>
            <p className='font-bold'>Tech Stack</p>
            <p className='text-xs text-slate-400'>
              React, Nextjs, Tailwind, Node, Firebase
            </p>
          </div>
        </div> */}
        <TechStack />
        {/* 4. Work Status (Square) */}
        <div className='bg-emerald-50 rounded-[2rem] p-6 border border-emerald-100 flex flex-col justify-between'>
          <div className='flex justify-between items-start'>
            <div className='h-3 w-3 bg-emerald-500 rounded-full animate-pulse' />
          </div>
          <div>
            <p className='text-emerald-700 font-bold'>Available</p>
            <p className='text-xs text-emerald-600'>Open for new projects</p>
          </div>
        </div>
        {/* 5. Resume (Square) */}
        <a
          href='/EddieYeung.pdf'
          className='group bg-slate-900 rounded-[2rem] p-6 flex flex-col justify-between text-white hover:bg-slate-800 transition-all'
        >
          <FileText
            className='group-hover:rotate-12 transition-transform'
            size={28}
          />
          <p className='font-bold'>Resume</p>
        </a>
        {/* 6. Experience (Wide) */}
        <Experience />
        <div className='md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-white flex items-center justify-between'>
          <div>
            <p className='text-sm text-slate-400 font-bold uppercase tracking-widest'>
              Latest Work
            </p>
            <div>
              <p className='text-lg font-bold'>Freelance Developer</p>
              <p className='text-slate-500'>2023 — Present</p>
            </div>
          </div>
          <div className='hidden sm:block h-12 w-12 bg-slate-100 rounded-xl'></div>
        </div>

        {/* 7. Social Links (Small) */}
        <div className='bg-white rounded-[2rem] p-6 shadow-sm border border-white flex justify-around items-center md:flex-col'>
          <a
            href='https://github.com/eycs0317'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform hover:scale-110'
          >
            <Github className='text-slate-400 hover:text-black cursor-pointer' />
          </a>
          <a
            href='https://www.linkedin.com/in/eddiecyeung/'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-transform hover:scale-110'
          >
            <Linkedin className='text-slate-400 hover:text-blue-600 cursor-pointer' />
          </a>
          <a
            href='mailto:eycs0317@gmail.com'
            className='transition-transform hover:scale-110'
          >
            <Mail className='text-slate-400 hover:text-green-500 cursor-pointer' />
          </a>
        </div>
        {/* Location */}
        <div className='bg-white rounded-[2rem] shadow-sm border border-white overflow-hidden relative group h-full'>
          {/* The Map iframe */}
          <div className='absolute inset-0 -bottom-15 -top-10'>
            <iframe
              title='Google Map'
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d433959.7553627028!2d-122.28722824664096!3d37.50066425345607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1767912605331!5m2!1sen!2sus'
              className='w-full h-full grayscale-[20%] contrast-[1.1] brightness-[1.05] border-0'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
        {/* 8. Projects (Extra Wide) */}
        <Projects
          title='Monchhichi E-card Kiosk'
          description='Interactive 55" touchscreen experience for HK MTR malls. Users design custom digital cards and retrieve them via QR code.'
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
          ]}
        />
        <Projects
          title='Fruity Land Online Appointment System'
          description='Interactive 55" touchscreen experience for HK MTR malls. Users design custom digital cards and retrieve them via QR code.'
          images={["/01.png", "/02.png", "/03.png", "/04.png"]}
          links={[
            {
              type: "github",
              url: "https://github.com/eycs0317/pcd001",
              label: "Source",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
