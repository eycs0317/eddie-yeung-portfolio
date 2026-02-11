import {
  X,
  Briefcase,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";

export default function ExperienceModal({
  isOpen,
  onClose,
  role,
  company,
  duration,
  detail,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) {
  // Close modal on ESC key, navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
      onClick={onClose}
    >
      {/* Left Arrow - Hidden on mobile */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className='hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors z-10'
          aria-label='Previous experience'
        >
          <ChevronLeft size={24} className='text-slate-600 dark:text-slate-300' />
        </button>
      )}

      {/* Right Arrow - Hidden on mobile */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className='hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors z-10'
          aria-label='Next experience'
        >
          <ChevronRight size={24} className='text-slate-600 dark:text-slate-300' />
        </button>
      )}

      <div
        className='bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className='sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 md:px-8 py-4 md:py-6 rounded-t-3xl'>
          {/* Mobile Navigation - Top Row */}
          {totalCount > 1 && (
            <div className='flex md:hidden items-center justify-between mb-3'>
              <button
                onClick={onPrev}
                className='p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors'
                aria-label='Previous experience'
              >
                <ChevronLeft size={20} className='text-slate-600 dark:text-slate-300' />
              </button>
              <span className='text-sm text-slate-400 dark:text-slate-500 font-medium'>
                {currentIndex + 1} / {totalCount}
              </span>
              <button
                onClick={onNext}
                className='p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors'
                aria-label='Next experience'
              >
                <ChevronRight size={20} className='text-slate-600 dark:text-slate-300' />
              </button>
            </div>
          )}

          {/* Main Header Row */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 md:gap-3 flex-1 min-w-0'>
              <Briefcase className='text-blue-600' size={24} />
              <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white truncate'>
                {role}
              </h2>
            </div>
            <div className='flex items-center gap-3 ml-2'>
              {/* Counter - Desktop only */}
              {totalCount > 1 && (
                <span className='hidden md:block text-sm text-slate-400 dark:text-slate-500 font-medium'>
                  {currentIndex + 1} / {totalCount}
                </span>
              )}
              <button
                onClick={onClose}
                className='p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors flex-shrink-0'
                aria-label='Close modal'
              >
                <X size={24} className='text-slate-600 dark:text-slate-300' />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='p-8 space-y-6'>
          {/* Company & Duration */}
          <div className='flex flex-col md:flex-row gap-4 pb-4 border-b border-slate-200 dark:border-slate-700'>
            <div className='flex items-center gap-2 text-slate-700 dark:text-slate-300'>
              <Building2 size={20} className='text-slate-400 dark:text-slate-500' />
              <span className='font-semibold'>{company}</span>
            </div>
            <div className='flex items-center gap-2 text-slate-600 dark:text-slate-400'>
              <Calendar size={20} className='text-slate-400 dark:text-slate-500' />
              <span>{duration}</span>
            </div>
          </div>

          {/* Job Description */}
          <ul className='text-slate-600 dark:text-slate-300 leading-relaxed space-y-2 list-none text-left'>
            {detail.split("\n").map((line, index) => {
              if (!line.trim()) return null;
              // Remove the bullet if it exists
              const text = line.trim().replace(/^•\s*/, "");
              return (
                <li key={index} className='flex gap-2'>
                  <span className='text-blue-600 dark:text-blue-400 flex-shrink-0'>•</span>
                  <span className='flex-1'>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
