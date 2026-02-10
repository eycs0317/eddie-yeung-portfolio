import { X, ExternalLink, Github, Facebook, Globe } from "lucide-react";
import { useEffect } from "react";

const linkConfig = {
  github: { icon: Github, color: "bg-slate-900", label: "Source" },
  facebook: { icon: Facebook, color: "bg-[#1877F2]", label: "Facebook" },
  demo: { icon: ExternalLink, color: "bg-blue-600", label: "Live Demo" },
  default: { icon: Globe, color: "bg-slate-500", label: "Link" },
};

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  videoSource,
  images,
  links,
}) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className='sticky top-0 bg-white border-b border-slate-200 px-8 py-6 flex items-center justify-between rounded-t-3xl'>
          <h2 className='text-2xl md:text-3xl font-bold text-slate-900'>
            {title}
          </h2>
          <button
            onClick={onClose}
            className='p-2 hover:bg-slate-100 rounded-full transition-colors'
            aria-label='Close modal'
          >
            <X size={24} className='text-slate-600' />
          </button>
        </div>

        {/* Content */}
        <div className='p-8 space-y-6'>
          {/* Media Section */}
          {videoSource && (
            <div className='w-full bg-slate-100 rounded-2xl overflow-hidden'>
              <video
                autoPlay
                muted
                loop
                playsInline
                poster='/monchhichi-poster.png'
                className='w-full object-cover'
              >
                <source src={videoSource} type='video/mp4' />
              </video>
            </div>
          )}

          {!videoSource && images && (
            <div
              className={`grid gap-4 ${
                images.length === 1
                  ? "grid-cols-1"
                  : images.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-2 md:grid-cols-4"
              }`}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${title} screenshot ${index + 1}`}
                  className=' rounded-xl shadow-sm'
                />
              ))}
            </div>
          )}

          {/* Description */}
          <div className='text-slate-600 leading-relaxed'>{description}</div>

          {/* Links */}
          <div className='flex flex-wrap gap-3 pt-4'>
            {links.map((link, index) => {
              const config = linkConfig[link.type] || linkConfig.default;
              const Icon = config.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-xl font-bold transition-all hover:bg-slate-700 shadow-sm'
                >
                  <Icon size={18} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
