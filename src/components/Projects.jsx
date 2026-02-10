import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function Projects({
  title,
  description,
  videoSource,
  images,
  links,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className='md:col-span-4 row-span-1 bg-white rounded-[2rem] p-6 shadow-sm border border-white group cursor-pointer overflow-hidden hover:shadow-lg transition-all'
      >
        <div className='flex flex-col md:flex-row gap-6 items-start md:items-center h-full'>
          {/* Preview Media - Left Side */}
          <div className='w-full md:w-1/3 h-40 md:h-full bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center'>
            {videoSource && (
              <video
                muted
                loop
                playsInline
                poster='/monchhichi-poster.png'
                className='w-full h-full object-contain'
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              >
                <source src={videoSource} type='video/mp4' />
              </video>
            )}
            {!videoSource && images && (
              <div
                className={`grid w-full h-full gap-2 p-2 ${
                  images.length === 1
                    ? "grid-cols-1"
                    : images.length === 2
                      ? "grid-cols-2"
                      : images.length === 3
                        ? "grid-cols-3"
                        : "grid-cols-4"
                }`}
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${title} screenshot ${index + 1}`}
                    className='w-full h-full object-contain rounded-lg'
                  />
                ))}
              </div>
            )}
            {!videoSource && !images && (
              <div className='w-full h-full flex items-center justify-center text-slate-300'>
                No preview
              </div>
            )}
          </div>

          {/* Content - Right Side */}
          <div className='flex-1 flex flex-col justify-between h-full'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors'>
                {title}
              </h2>
              <p className='text-slate-500 line-clamp-2'>{description}</p>
            </div>

            {/* View More Arrow */}
            <div className='flex items-center justify-end mt-4 text-slate-400 group-hover:text-blue-600 transition-colors'>
              <span className='text-sm font-medium mr-1'>View Details</span>
              <ChevronRight
                size={18}
                className='group-hover:translate-x-1 transition-transform'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        videoSource={videoSource}
        images={images}
        links={links}
      />
    </>
  );
}
