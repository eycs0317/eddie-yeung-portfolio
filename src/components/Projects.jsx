import { ExternalLink, Github, Facebook, Globe } from "lucide-react";

const linkConfig = {
  github: { icon: Github, color: "bg-slate-900", label: "Source" },
  facebook: { icon: Facebook, color: "bg-[#1877F2]", label: "Facebook" },
  demo: { icon: ExternalLink, color: "bg-blue-600", label: "Live Demo" },
  default: { icon: Globe, color: "bg-slate-500", label: "Link" },
};

export default function Projects({
  title,
  description,
  videoSource,
  images,
  links,
}) {
  return (
    <div className='md:col-span-4 row-span-1 bg-white rounded-[3rem] p-4 shadow-sm border border-white group cursor-pointer overflow-hidden'>
      <div className='flex flex-col md:flex-row gap-8 items-center h-full'>
        <div className=' hidden md:flex w-1/3 h-full bg-slate-100 rounded-2xl flex items-center justify-center text-slate-300 overflow-hidden'>
          {videoSource && (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster='/monchhichi-poster.png'
              className='h-full object-cover p-2'
            >
              <source src={videoSource} type='video/mp4' />
            </video>
          )}
          {!videoSource && images && (
            <div
              className={`grid h-full w-full p-2 gap-2 ${images.length > 1 ? "grid-cols-4" : "grid-cols-1"}`}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Project screenshot ${index}`}
                  className='w-full h-full object-cover rounded-xl shadow-sm'
                />
              ))}
            </div>
          )}
        </div>
        {/* Text content */}
        <div className='flex-1 w-full'>
          <div className='flex items-center gap-2 mb-2'>
            {/* <span className='px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full'>
              New
            </span> */}
            <h2 className='text-3xl md:text-2xl font-bold'>{title}</h2>
          </div>
          <p className='text-slate-500 mb-6'>{description}</p>
          <div className='flex gap-4'>
            {links.map((link, index) => {
              const config = linkConfig[link.type] || linkConfig.default;
              const Icon = config.icon;
              return (
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-900 rounded-xl font-bold transition-colors hover:bg-slate-300 shadow-sm'
                >
                  <Icon size={18} />
                  {link.label}
                </a>
              );
            })}
            {/* <a
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-900 rounded-xl font-bold transition-colors hover:bg-slate-300 shadow-sm'
            >
              <Github size={18} />
              Source
            </a>
            {facebookLink && (
              <a
                href='https://www.facebook.com/groups/2204857406/posts/10161452786522407/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 bg-slate-100 text-white rounded-xl font-bold transition-all hover:opacity-90 shadow-sm'
              >
                <Facebook size={18} fill='currentColor' />
                Event Buzz
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
